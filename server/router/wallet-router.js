const express = require("express");
const router = express.Router();
const {wallet} = require('../controllers/wallet-controller');
const authMiddleware = require("../middlewares/auth-middleware");


router.route("/wallet").post(authMiddleware, wallet);

module.exports = router;