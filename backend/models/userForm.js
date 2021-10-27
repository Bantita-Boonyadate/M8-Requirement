const mongoose = require("../config/database");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const userForm = new Schema({
    name: String,
    email: {type: String, unique: true},
    password: String
});

userForm.methods.generateAuthenToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY);
    return token;
};

const UserForm = mongoose.model("userForm", userForm);

module.exports = UserForm;