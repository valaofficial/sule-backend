'use strict';
var dbConn = require('../config/db.config');
//Doctor object create
var Doctor = function(doctor){
  this.fullname     = doctor.fullname;
  this.specialization      = doctor.specialization;
  this.email          = doctor.email;
  this.phone          = doctor.phone;
  this.dob   = doctor.dob;
  this.gender    = doctor.gender;
  this.password         = doctor.password;
};
Doctor.create = function (newEmp, result) {
dbConn.query("INSERT INTO doctors set ?", newEmp, function (err, res) {
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
Doctor.findById = function (id, result) {
dbConn.query("Select * from doctors where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Doctor.findAll = function (result) {
dbConn.query("Select * from doctors", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('doctors : ', res);
  result(null, res);
}
});
};
Doctor.search = function (name, speciality, result) {
  console.log(name)
  console.log(speciality)
  if(name != undefined & speciality!= undefined){
    dbConn.query("Select * from doctors WHERE fullname LIKE '%" + name + "%' AND specialization LIKE '%" + speciality + "%'", function (err, res) {
      if(err) {
        console.log("error: ", err);
        result(null, err);
      }
      else{
        console.log('doctors : ', res);
        result(null, res);
      }
      });
  }else{
    dbConn.query("Select * from doctors WHERE fullname LIKE '%" + name + "%' OR specialization LIKE '%" + speciality + "%'", function (err, res) {
      if(err) {
        console.log("error: ", err);
        result(null, err);
      }
      else{
        console.log('doctors : ', res);
        result(null, res);
      }
      });
  }
  };
Doctor.update = function(id, doctor, result){
dbConn.query("UPDATE doctors SET fullname=?,specialization=?,email=?,phone=?,dob=?,gender=?,password=? WHERE id = ?", [doctor.fullname,doctor.specialization,doctor.email,doctor.phone,doctor.dob,doctor.gender,doctor.password, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Doctor.delete = function(id, result){
dbConn.query("DELETE FROM doctors WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Doctor;