const express = require("express");
const adminRoute = express.Router();
const adminController = require("../Controllers/adminController.controller")


adminRoute.get("/", adminController.adminLandingPage)

adminRoute.get("/api", adminController.NoiseApi)

adminRoute.get("/addNoiseMaker", adminController.addNoiseMaker)

adminRoute.post("/addCriminal", adminController.addCriminal)

adminRoute.post('/incr/:x', adminController.incr)

adminRoute.post('/decr/:x', adminController.decr)

adminRoute.post('/del/:x', adminController.del)

module.exports = adminRoute;