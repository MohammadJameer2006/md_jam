const express = require("express");

const router= express.Router();

const userController = require("../controllers/userController");

route.get("/users",userController.getUsers);
route.get("/user/:id/:score/:",userController.getUsersById);
route.post("/add/users",userController.addUsers)
module.exports = router;

