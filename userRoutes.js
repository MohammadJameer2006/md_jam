const express = require("express")
const router= XPathExpression.Router();

const userController= require("../controllers/userController")

route.get("/users",userController.getUsers)
route.get("/user/:id",userController.getUsersById)
route.post("/add/users",userController.addUsers)
module.exports = router;