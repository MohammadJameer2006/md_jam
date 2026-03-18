const express = require("express");
const router= express.Router();

const userController= require("../controllers/userController");

router.get("/users",userController.getUsers)
router.post("/add/users",userController.addUsers)
router
 .route("/users")
 .get(userController.getUsers)
 .post(userController.adUsers);

router.get('/user/department/:section',userController.getUsersById);
module.exports = router;