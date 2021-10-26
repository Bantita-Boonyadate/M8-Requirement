const post = require("../models/post");

module.exports = {
    post: async (req, res, next) => {
        try {
            const { imageURL, caption } = req.body;
            const data = { imageURL, caption };

            const newPost = new post(data);

            await newPost.save(async (error, data) => {
                if(error) {
                    res.status(400).json("Something wrong!");
                    console.log(error);
                } else {
                    res.status(200).json({ success: true, data: data });
                    console.log(data);
                }
            })
        } catch (error) {
            console.log(error);
            res.status(500).json("Something wrong!");
        }
    },
    getPost: async (req, res) => {
        try {
            const posts = await post.find({});

            if(!posts){
                res.status(400).json("No exist!");
            }
            res.status(200).json(posts);

        } catch (error) {
            res.status(500).json("Something wrong!");
        }
    }
};