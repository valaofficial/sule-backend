const express = require('express')
const router = express.Router()

const patientsController =   require('../controllers/patients.controllers');
// Retrieve all patient
router.get('/', patientsController.findAll);
// Create a new patient
router.post('/', patientsController.create);
// Retrieve a single patient with id
router.get('/:id', patientsController.findById);
// Update a patient with id
router.put('/:id', patientsController.update);
// Delete a patient with id
router.delete('/:id', patientsController.delete);
module.exports = router