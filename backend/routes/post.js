const { post, getPost } = require("../controllers/post.controller");
// const middleware = require("../middlewares/authToken");
const authorization = require("../middlewares/authorize");

const router = require("express").Router();

router.post("/post",authorization, post);
router.get("/post",authorization, getPost);

module.exports = router;