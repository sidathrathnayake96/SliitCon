/**Importing the express into this file */
const express = require('express');
/**Accessing the Router() method from the express into this file */
const router = express.Router();
/**Importing the conferenceAttendeeController.js to route */
const controller = require('../controllers/workshopConductorController');

/**Exporting the routes to map the routes*/ 
module.exports = function() {
    router.post('/create',controller.createWorkshopConductor);
    router.get('/get/:name',controller.getOneWorkshopConductor);
    return router;
}