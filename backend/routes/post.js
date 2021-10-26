const { post, getPost } = require("../controllers/post.controller");

const router = require("express").Router();

router.post("/post", post);
router.get("/post", getPost);

module.exports = router;