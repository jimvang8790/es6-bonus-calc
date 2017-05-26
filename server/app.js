let Company = require('./modules/company.class');

let myCompany = new Company('My Company');

myCompany.addEmployee('Kris', '12-11-2013', 40000, 4);
myCompany.addEmployee('Millie', '01-15-2017', 40000, 4);

myCompany.calculateBonuses();
