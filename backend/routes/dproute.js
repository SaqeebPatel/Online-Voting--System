const express = require("express");
const authorise = require("../middleware/auth");
const router = express.Router();
const dpcontroller = require("../controller/dpcontroller");
const upload = require("../middleware/multer");

router.post("/addimage", authorise.auth, upload, dpcontroller.addimage);
router.get("/getallimage", authorise.auth, dpcontroller.getallimage);

module.exports = router;