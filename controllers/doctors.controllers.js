'use strict';
const Doctor = require('../models/doctors.model');

exports.findAll = function(req, res) {
Doctor.findAll(function(err, doctor) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', doctor);
  res.send(doctor);
});
};

exports.search = function(req, res) {
  console.log(req)
  Doctor.search(req.query.name,req.query.speciality,function(err, doctor) {
    console.log('controller')
    if (err){
      console.log(res.status) 
      res.send(err);
    }
    console.log('res', doctor);
    console.log(res.status) 
    res.send(doctor);
  });
  };

exports.create = function(req, res) {
const new_doctor = new Doctor(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ 
    error:true, 
    status:400, 
    message: 'Please provide all required field' });
}else{
Doctor.create(new_doctor, function(err, doctor) {
  if (err)
  res.send(err);
  res.json({
    error:false,
    status:200,
    message:"Doctor added successfully!",
    data:doctor
});
});
}
};

exports.findById = function(req, res) {
Doctor.findById(req.params.id, function(err, doctor) {
  if (err)
  res.send(err);
  res.json(doctor);
});
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ 
        error:true, 
        status:400,
        message: 'Please provide all required field' });
  }else{
    Doctor.update(req.params.id, new Doctor(req.body), function(err, doctor) {
   if (err)
   res.send(err);
   res.json({ 
    error:false, 
    status:200,
    message: 'Doctor successfully updated' });
});
}
};

exports.delete = function(req, res) {
Doctor.delete( req.params.id, function(err, doctor) {
  if (err)
  res.send(err);
  res.json({ 
    error:false, 
    status:200,
    message: 'Doctor successfully deleted' });
});
};