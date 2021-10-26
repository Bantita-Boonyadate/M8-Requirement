const auth = require('./auth');
const profile = require('./post');

const router = require("express").Router();

router.use("/auth", auth);
router.use("/profile", profile);

module.exports = router;