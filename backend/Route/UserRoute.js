const express = require("express");
const router = express.Router();
const auth = require("../Middleware/auth");
const UserController = require("../Controller/UserController");

// When a user is being registered the first time, allow the creation of it
router.get("/get-users", auth.auth, UserController.getUsers);
router.post("/create-user", UserController.createUser);
router.post("/login-user", UserController.loginUser);
router.patch("/update-user/:id", auth.auth, UserController.updateUser);
router.delete("/delete-user/:id", auth.auth, UserController.deleteUser);
router.get("/get-user/:id", auth.auth, UserController.getUserById);

module.exports = router;
