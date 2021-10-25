const { facebook } = require("../controllers/auth.controller");


const router = require("express").Router();

router.post("/sign-in/facebook", facebook);

module.exports = router;