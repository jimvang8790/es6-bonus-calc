class Company {

  constructor(name) {
    this.name =
    this.employees = [];
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
      if(emp.daysAtCompany() > 365) {
        baseBonusPercent += .05;
      }

      // income cap
      if(emp.salary > 65000) {
        baseBonusPercent -= .01;
      }

      if(baseBonusPercent > .13) {
        baseBonusPercent = .13;
      }

      if(baseBonusPercent < 0) {
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
