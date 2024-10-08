const express = require("express");
const usercontroller = require("../controller/usercontroller");
const authorise = require("../middleware/auth");
const upload = require("../middleware/multer"); // Ensure multer is properly configured
const router = express.Router();

router.post("/register", usercontroller.register);
router.post("/login", usercontroller.login);
router.get("/userinfo", authorise.auth, usercontroller.userinfo);
router.put('/UpdateById/:id',authorise.auth, usercontroller.UpdateById);

module.exports = router;
