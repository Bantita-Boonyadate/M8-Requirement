const jwt = require("jsonwebtoken");
const userFacebook = require("../models/user");
const userForm = require("../models/userForm");
const authToken = async (req, res, next) => {
    try {
       
        const authHeader = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(authHeader, process.env.JWTPRIVATEKEY);
        console.log(user);
        if (user) {
            // req.user = user;
            // console.log(user);
            try {
                const checkUserFacebook = await userFacebook.findById(user._id);
                
                if(checkUserFacebook) {
                    req.user = checkUserFacebook;
                    next();
                }
                const checkUserForm = await userForm.findById(user._id);
                
                if(checkUserForm) {
                    req.user = checkUserForm;
                }
               
            } catch (error) {
                res.status(400).json("Not found!")
            }
        }
        // console.log(authHeader);
        
        
        
    }catch (error) {
        res.status(400).json(error);
    }
    next();
}

module.exports = authToken;