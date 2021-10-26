const mongoose = require("../config/database");
const Schema = mongoose.Schema;

const post = new Schema({
    imageURL: String,
    caption: String
});

const Post = mongoose.model("posts", post);

module.exports = Post;