const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Require routes
const doctorRoutes = require('./routes/doctors.routes')
const patientRoutes = require('./routes/patients.routes')
const appointmentRoutes = require('./routes/appointments.routes')


app.use('/api/v1/doctor', doctorRoutes)
app.use('/api/v1/patient', patientRoutes)
app.use('/api/v1/appointment', appointmentRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});