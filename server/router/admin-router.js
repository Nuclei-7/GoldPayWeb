const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");
const {getAllUsers, getAllContacts, deleteUserById, getUserById} = require("../controllers/admin-controller");


router.route("/users").get(authMiddleware, adminMiddleware, getAllUsers);
router.route("/contacts").get(authMiddleware, adminMiddleware, getAllContacts);
router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, deleteUserById);
router.route("/users/:id").get(authMiddleware, adminMiddleware, getUserById);

module.exports = router;

