const express = require('express')
const routing = express.Router();
const defectTrackerController = require('../controller/defectTrackerController')

routing.get('/getAllDefects',defectTrackerController.getAllDefects);
routing.post('/newDefect',defectTrackerController.newDefect);

module.exports = routing;
