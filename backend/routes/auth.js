const { facebook, signup } = require("../controllers/auth.controller");


const router = require("express").Router();

router.post("/sign-in/facebook", facebook);
router.post("/sign-up", signup);

module.exports = router;