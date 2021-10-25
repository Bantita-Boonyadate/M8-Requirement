const mongoose = require("../config/database");
const Schema = mongoose.Schema;

const userForm = new Schema({
    name: String,
    email: {type: String, unique: true},
    password: String
});

const UserForm = mongoose.model("userForm", userForm);

module.exports = UserForm;