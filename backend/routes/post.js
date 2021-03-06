const { post, getPost } = require("../controllers/post.controller");
const middleware = require("../middlewares/authToken");
// const authorization = require("../middlewares/authorize");

const router = require("express").Router();

router.post("/post",middleware, post);
router.get("/post",middleware, getPost);

module.exports = router;