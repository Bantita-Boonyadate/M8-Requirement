const { facebook, signup, signin } = require("../controllers/auth.controller");


const router = require("express").Router();

router.post("/sign-in/facebook", facebook);
router.post("/sign-up", signup);
router.post("/sign-in", signin);

module.exports = router;