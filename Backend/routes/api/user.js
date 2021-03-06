const express = require("express");
const router = express.Router();

const { baseAuth } = require("../../middleware/baseAuth");
const jwtAuth = require("../../middleware/jwtAuth");
const userController = require("../../controllers/userController");

router.post("/resetPassword", baseAuth, userController.resetPassword);

router.post("/resetPassword/:token", baseAuth, userController.updatePassword);

module.exports = router;
