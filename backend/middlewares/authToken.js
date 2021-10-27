const jwt = require("jsonwebtoken");
const authToken = (req, res, next) => {
    try {
        
        const authHeader = req.headers.token;
        conlog.log(authHeader);
        
        
    }catch (error) {
        res.status(400).send("Invalid token");
    }
}

module.exports = authToken;