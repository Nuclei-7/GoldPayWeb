const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");
const  {Send}  = require("../controllers/send-receive-controller");

router.route("/send").post(authMiddleware, Send);

module.exports = router;