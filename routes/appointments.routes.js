const express = require('express')
const router = express.Router()

const appointmentsController =   require('../controllers/appointments.controllers');
// Retrieve all doctor
router.get('/:id', appointmentsController.findById);
// Create a new doctor
router.post('/', appointmentsController.create);
// Retrieve a single doctor with id
router.get('/doctor/:id', appointmentsController.findAllByDoctorId);
// Retrieve a single doctor with id
router.get('/student/:id', appointmentsController.findAllByStudentId);
// Update a doctor with id
router.put('/:id', appointmentsController.update);
// Delete a doctor with id
router.delete('/:id', appointmentsController.delete);
module.exports = router