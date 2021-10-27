const user = require("../models/user");
const userForm = require("../models/userForm");
const bcrypt = require("bcryptjs");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const authTokenMiddleware = require("../middlewares/authToken");

module.exports = {
  facebook: async (req, res, next) => {
    try {
      const email = req.body.user.email;
      const response = await axios({
        method: "post",
        url: `https://graph.facebook.com/v6.0/oauth/access_token?grant_type=fb_exchange_token&client_id=1006115476601013
                &client_secret=c7e2daa99cb63bb60df1e37029459f9f&fb_exchange_token=${req.body.user.accessToken}`,
      });
      const result = response.data;
      const Auth = await axios({
        method: "get",
        url: `https://graph.facebook.com/me?access_token=${result.access_token}`,
      });

      if (Auth) {
        let find = await user.findOne({ email });
        if (find) {
          const token = jwt.sign({ _id: find._id }, "id_key_account", {
            expiresIn: "1d",
          });
          const { _id, name, email } = find;
          res.status(200).json({ token, user: { _id, name, email } });
        } else {
          let users = new user({
            name: Auth.data.name,
            email,
            type_account: "Facebook",
          });
          console.log(users);
          await users.save(async (err, data) => {
            if (err) {
              return users
                .status(400)
                .json({ error: "Something went wrong..." });
            }
            const token = jwt.sign({ _id: data._id }, "id_key_account", {
              expiresIn: "1d",
            });
            const { _id, name, email } = users;
            res.status(200).json({ token, user: { _id, name, email } });
          });
        }
      } else {
      }
    } catch (error) {}
  },
  signup: async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
      const hashedPassword = bcrypt.hashSync(password, 12);
      const data = { name, email, password: hashedPassword };

      const newUser = new userForm(data);

      await newUser.save(async (error, data) => {
        if (error) {
          res.status(400).json("Username that other user has already exist!");
          console.log(error);
        } else {
          res.status(200).json({ success: true, data: data });
          console.log(data);
        }
      });
    } catch (error) {
      console.log(error);
      res.status(400).send("Error");
    }
  },
  signin: async (req, res) => {
    try {
      //Checking if the email exists
      const user = await userForm.findOne({ email: req.body.email });
      if (!user) {
        res.status(400).json("Email is not found!");
      }
      //Password is correct
      const password = req.body.password;
      const checkPassword = await bcrypt.compareSync(password, user.password);
      if (checkPassword) {
        //Shows token of user information
        // const { password, ...others } = user._doc;
        const token = await user.generateAuthenToken();
        // res.send(token);
        res.status(200).json(token);
        
      } else {
        res.status(400).json("Incorrect password!");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
