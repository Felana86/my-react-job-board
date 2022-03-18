// We have chosen to secure the authorisation of admin access with JSON Web Tokens
const jwt = require('jsonwebtoken');


const SECRET_KEY_JWT = process.env.TOKEN_KEY;

module.exports = {

    createToken (userData) {

        let isAdmin = false;
        
        // method package jwt
        if (userData.role.toLowerCase() === "admin") {
            isAdmin = true;
        }
        return jwt.sign(

            { 
                userId: userData.id,
                userEmail: userData.email,
                isAdmin: isAdmin
            },
            SECRET_KEY_JWT, 
            {
                expiresIn: "24h"
            }
        )
    }
}