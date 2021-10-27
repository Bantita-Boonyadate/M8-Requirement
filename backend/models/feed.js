const mongoose = require("../config/database");
const Schema = mongoose.Schema;

const feeds = require("../json/pet.json");

const feed = new Schema({
    imageURL: String,
    caption: String
});

const Feeds = mongoose.model("feeds", feed);

const saveFeed = async () => {
    if(0 == (await Feeds.find())) await Feeds.insertMany(feeds);
};

saveFeed();

module.exports = Feeds;