const jwt = require("jsonwebtoken");
const fs = require("fs");

const authorization = ((req, res, next) => {
    const authorize = req.headers['Authorization'];
    if(authorize === undefined) return res.status(401).json({
        "status": 401,
        "message": "Unauthorized"
    });
    
    const token = req.headers['Authorization'].split(' ')[1];

    if(token === undefined) return res.status(401).json({
        "status": 401,
        "message": "Unauthorized"
    });

    const privateKey = fs.readFileSync(__dirname+'/../middlewares/private.key');
    jwt.verify(token, privateKey, function(error, decoded) {
        if(error) return res.status(401).json({
            "status": 401,
            "message": "Unauthorized"
        })
        console.log(error);
        console.log(decoded);

        next();
    })
});

module.exports = authorization;