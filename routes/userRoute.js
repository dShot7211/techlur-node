const express = require("express");

const userController = require("../controllers/userController");

const router = express.Router();

router.post("/signup", userController.signup);
router.get("/getAllUsers", userController.getAllUsers);
router
  .route("/:id")
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
