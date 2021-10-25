const db = require("mongoose");

db.connect("mongodb://localhost:27017/m8database", { useNewUrlParser: true });

module.exports = db;