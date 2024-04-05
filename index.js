/* Your Code Here */
const createEmployeeRecord = function (employeeData) {
    return {
      firstName: employeeData[0],
      familyName: employeeData[1],
      title: employeeData[2],
      payPerHour: employeeData[3],
      timeInEvents: [],
      timeOutEvents: [],
    };
  };

  //writing function to show employees data
  const createEmployeeRecords = function (employeesData) {
    return employeesData.map(createEmployeeRecord);
  };

  const createTimeInEvent = function (dateTime) {
    const [date, hour] = dateTime.split(" ");

    this.timeInEvents.push({
      type: "TimeIn",
      date,
      hour: parseInt(hour, 10),
    });

    return this;
  };

  //creating a timeout event
  const createTimeOutEvent = function (dateTime) {
    const [date, hour] = dateTime.split(" ");

    this.timeOutEvents.push({
      type: "TimeOut",
      date,
      hour: parseInt(hour, 10),
    });
    return this;
};

//writing a code to show hours worked and date
const hoursWorkedOnDate = function (date) {
  const timeInEvent = this.timeInEvents.find((event) => event.date === date);
  const timeOutEvent = this.timeOutEvents.find((event) => event.date === date);

  const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;

  return hoursWorked;
};

//function to show wages earned on specific dates
const wagesEarnedOnDate = function (date) {
  const hoursWorked = hoursWorkedOnDate.call(this, date);
  const payRate = this.payPerHour;
  const wagesEarned = hoursWorked * payRate;

  return wagesEarned;
};

//function to find employees by their first name
const findEmployeeByFirstName = function (firstName) {
  return this.find((employee) => employee.firstName === firstName);
};
const calculatePayroll = function (employeeRecords) {
    const totalPayroll = employeeRecords.reduce(function (total, employee) {
      return total + allWagesFor.call(employee);
    }, 0);

    return totalPayroll;
  };

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

