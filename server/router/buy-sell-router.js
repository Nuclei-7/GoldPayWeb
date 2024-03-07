const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");
const  {BuyGold}  = require("../controllers/buy-sell-controller");

router.route("/buy-gold").post(authMiddleware, BuyGold);

module.exports = router;