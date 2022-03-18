const jwt = require('jsonwebtoken');

require('dotenv').config();

module.exports = function (request, response, next) {
        // console.log(request.headers)
    try {
        
        // Stock the token we received from header authorization
        const token = request.headers.authorization.split(" ")[1];
        // console.log(token);
        // If token is not valid
        if (!token) {
            return response.status(403).json("Admin access denied");
        }
        // If token is valid
        const verify = jwt.verify(token, process.env.TOKEN_KEY);
        // Verify if user has admin rights
        if (verify.isAdmin === false || verify.isAdmin === null ) {
            return response.status(401).json("You don't have the right access rights");
        }
        request.user = verify;
        next();
    } catch (error) {
        console.error(error);
            response.status(403).json("Token invalid");
    }
}
