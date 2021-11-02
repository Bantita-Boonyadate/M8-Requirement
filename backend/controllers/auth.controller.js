const user = require("../models/user");
const userForm = require("../models/userForm");
const bcrypt = require("bcryptjs");
const axios = require("axios");
const jwt = require("jsonwebtoken");
// const authTokenMiddleware = require("../middlewares/authToken");

module.exports = {
  facebook: async (req, res, next) => {
    try {
      const email = req.body.user.email; //รับมาจากหน้าบ้าน
      const response = await axios({
        method: "post",
        url: `https://graph.facebook.com/v6.0/oauth/access_token?grant_type=fb_exchange_token&client_id=1006115476601013
                &client_secret=c7e2daa99cb63bb60df1e37029459f9f&fb_exchange_token=${req.body.user.accessToken}`,
      });
      const result = response.data; //ได้tokenมาจาก บรรทัด15
      const Auth = await axios({
        method: "get",
        url: `https://graph.facebook.com/me?access_token=${result.access_token}`,
      }); //ส่งข้อมูลกลับมาให้หลังจากได้access token

      if (Auth) {
        let find = await user.findOne({ email });
        if (find) {
          const token = jwt.sign({ _id: find._id }, "secretkey", {
            expiresIn: "1d",
          });
          console.log(token);
          const { _id, name, email } = find;
          res.status(200).json({ token, user: { _id, name, email } }); //ส่งtokenกลับไป
        } else {
          let users = new user({
            name: Auth.data.name,
            email,
            type_account: "Facebook",
          }); //user facebook คนใหม่
          console.log(users);
          await users.save(async (err, data) => {
            if (err) {
              return users
                .status(400)
                .json({ error: "Something went wrong..." });
            }
            const token = jwt.sign({ _id: data._id }, "secretkey", {
              expiresIn: "1d",
            });
            const { _id, name, email } = users;
            res.status(200).json({ token, user: { _id, name, email } });
          });
        }
      } else {
        res.status(500).json("Error");
      }
    } catch (error) {
      res.status(500).json("Error");
    }
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
          const token = await newUser.generateAuthenToken();
          res.status(200).json({token, user: name});
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
      const checkPassword = await bcrypt.compareSync(password, user.password); //การป้องกันpassword
      if (checkPassword) {
        const token = await user.generateAuthenToken();

        res.status(200).json({token, user: user.name});
      } else {
        res.status(400).json("Incorrect password!");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
