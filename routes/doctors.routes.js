const express = require('express')
const router = express.Router()

const doctorsController =   require('../controllers/doctors.controllers');
// Search doctors
router.get('/search', doctorsController.search);
// Retrieve all doctor
router.get('/', doctorsController.findAll);
// Create a new doctor
router.post('/', doctorsController.create);
// Retrieve a single doctor with id
router.get('/:id', doctorsController.findById);
// Update a doctor with id
router.put('/:id', doctorsController.update);
// Delete a doctor with id
router.delete('/:id', doctorsController.delete);
module.exports = router