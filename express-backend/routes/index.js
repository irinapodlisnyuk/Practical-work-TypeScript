const express = require("express");
const authController = require("../controllers/authController");
const trackController = require("../controllers/trackController");
const authenticate = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

router.get("/tracks", trackController.getTracks);
router.post("/favorites", authenticate, trackController.addToFavorites);
router.delete("/favorites", authenticate, trackController.removeFromFavorites);
router.get("/favorites", authenticate, trackController.getFavorites);

module.exports = router;
