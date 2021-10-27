const { post, getPost, getFeed } = require("../controllers/post.controller");

const router = require("express").Router();

router.post("/post", post);
router.get("/post", getPost);
router.get("/feed", getFeed);

module.exports = router;