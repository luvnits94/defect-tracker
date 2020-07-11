const express = require('express')
const routing = express.Router();
const defectTrackerController = require('../controller/defectTrackerController')

routing.get('/getAllDefects',defectTrackerController.getAllDefects);

module.exports = routing;
