'use strict';
var dbConn = require('../config/db.config');
//Appointment object create
var Appointment = function(appointment){
  this.doctorid = appointment.doctorid;
  this.patientid = appointment.patientid;
  this.appointment_date = appointment.appointment_date;
  this.appointment_time = appointment.appointment_time;
  this.status = appointment.status;
};
Appointment.create = function (newEmp, result) {
dbConn.query("INSERT INTO appointments set ?", newEmp, function (err, res) {
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
Appointment.findById = function (id, result) {
dbConn.query("Select * from appointments where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Appointment.findAllByDoctorId = function (id, result) {
dbConn.query("Select * from appointments where doctorid = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res)
  result(null, res);
}
});
};
Appointment.findAllByStudentId = function (id, result) {
dbConn.query("Select * from appointments where studentid = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Appointment.findAll = function (result) {
dbConn.query("Select * from appointments", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('appointments : ', res);
  result(null, res);
}
});
};
Appointment.update = function(id, appointment, result){
dbConn.query("UPDATE appointments SET appointment_date=?, appointment_time=?, status=? WHERE id = ?", [appointment.appointment_date, appointment.appointment_time, appointment.status, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Appointment.delete = function(id, result){
dbConn.query("DELETE FROM appointments WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Appointment;