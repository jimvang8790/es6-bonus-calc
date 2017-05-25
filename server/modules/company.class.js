let Employee = require('./employee.class');

let Company = class Company {

  constructor(name) {
    this.name =
    this.employees = [];
    this.longevityDays = 365;
    this.incomeBonusCap = 65000;
    this.maxBonusPercentage = .13;
    this.minBonusPercentage = 0;
  }

  addEmployee(name, startDate, salary, reviewRating) {
    let newEmployee = new Employee(name, startDate, salary, reviewRating);
    this.employees.push(newEmployee);
  }

  // go through all employees and calc bonuses
  calculateBonuses() {

    for (var emp of this.employees) {
      let baseBonusPercent = this.getBaseBonusPercentage(emp.reviewRating);

      // longevity
      if(emp.daysAtCompany() > this.longevityDays) {
        baseBonusPercent += .05;
      }

      // income cap
      if(emp.salary > this.incomeBonusCap) {
        baseBonusPercent -= .01;
      }

      if(baseBonusPercent > this.maxBonusPercentage) {
        baseBonusPercent = .13;
      }

      if(baseBonusPercent < this.minBonusPercentage) {
        baseBonusPercent = 0;
      }


      emp.salary += Number(emp.salary * baseBonusPercent);

      console.log(emp);
    }
  }

  getBaseBonusPercentage(rating) {
    switch(rating) {
      case 5:
        return .10;
        break;
      case 4:
        return .06;
        break;
      case 3:
        return .04;
        break;
    }
    return 0;
  }


}

module.exports = Company;
