'use strict';
const Appointment = require('../models/appointments.model');

exports.create = function(req, res) {
const new_appointment = new Appointment(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ 
    error:true, 
    status:400, 
    message: 'Please provide all required field' });
}else{
Appointment.create(new_appointment, function(err, appointment) {
  if (err)
  res.send(err);
  res.json({
    error:false,
    status:200,
    message:"Appointment added successfully!",
    data:appointment
});
});
}
};

exports.findById = function(req, res) {
Appointment.findById(req.params.id, function(err, appointment) {
  if (err)
  res.send(err);
  res.json(appointment);
});
};

exports.findAllByDoctorId = function(req, res) {
Appointment.findAllByDoctorId(req.params.id, function(err, appointment) {
    if (err)
    res.send(err);
    res.json(appointment);
});
};

exports.findAllByStudentId = function(req, res) {
Appointment.findAllByStudentId(req.params.id, function(err, appointment) {
    if (err)
    res.send(err);
    res.json(appointment);
});
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ 
        error:true, 
        status:400,
        message: 'Please provide all required field' });
  }else{
    Appointment.update(req.params.id, new Appointment(req.body), function(err, appointment) {
   if (err)
   res.send(err);
   res.json({ 
    error:false, 
    status:200,
    message: 'Appointment successfully updated' });
});
}
};

exports.delete = function(req, res) {
Appointment.delete( req.params.id, function(err, appointment) {
  if (err)
  res.send(err);
  res.json({ 
    error:false, 
    status:200,
    message: 'Appointment successfully deleted' });
});
};