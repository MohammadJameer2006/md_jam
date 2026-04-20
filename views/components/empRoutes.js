const express = require("express");

const router = express.Router();

const empController = require("../controllers/empController");

router.get("/create/emp", empController.createEmployees);

module.exports = router;