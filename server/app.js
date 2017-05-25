var Company = require('./modules/company.class');

var app = require('express')();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

var myCompany = new Company('My Company');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/company', (req, res) => {
  console.log(myCompany);
  res.send(myCompany);
});

app.get('/process-bonuses', (req, res) => {
  myCompany.calculateBonuses();
  res.status(200).send(myCompany.employees);
});

app.get('/employees', (req, res) => {
  res.send(myCompany.employees);
});

app.post('/employee', (req, res) => {
  myCompany.addEmployee(req.body.name, req.body.startdate, req.body.salary, req.body.reviewRating);
  res.status(201).send(myCompany.employees);
});

app.listen(port, () => {
  console.log('server up on : ', port);
});
