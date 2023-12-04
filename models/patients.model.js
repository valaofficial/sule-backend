'use strict';
var dbConn = require('../config/db.config');
//Patient object create
var Patient = function(patient){
  this.fullname     = patient.fullname;
  this.email          = patient.email;
  this.phone          = patient.phone;
  this.dob   = patient.dob;
  this.gender    = patient.gender;
  this.password         = patient.password;
  this.verified         = patient.verified;
};
Patient.create = function (newEmp, result) {
dbConn.query("INSERT INTO patients set ?", newEmp, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
Patient.findById = function (id, result) {
dbConn.query("Select * from patients where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Patient.findAll = function (result) {
dbConn.query("Select * from patients", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('patients : ', res);
  result(null, res);
}
});
};
Patient.update = function(id, patient, result){
dbConn.query("UPDATE patients SET fullname=?,email=?,phone=?,dob=?,gender=?,password=? WHERE id = ?", [patient.fullname,patient.email,patient.phone,patient.dob,patient.gender,patient.password, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Patient.delete = function(id, result){
dbConn.query("DELETE FROM patients WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Patient;