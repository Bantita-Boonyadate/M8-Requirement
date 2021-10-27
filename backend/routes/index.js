const auth = require('./auth');
const timeline = require('./post');

const router = require("express").Router();

router.use("/auth", auth);
router.use("/timeline", timeline);

module.exports = router;