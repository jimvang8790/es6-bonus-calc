let Employee = class Employee {
  constructor(name, startDate, salary, reviewRating) {
    this.name = name;
    this.startDate = new Date(startDate);
    this.salary = Number(salary);
    this.reviewRating = parseInt(reviewRating);
  }

  daysAtCompany() {
    let today = new Date();
    let timeDiff = Math.abs(today.getTime() - this.startDate.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return diffDays;
  }
}

module.exports = Employee;
