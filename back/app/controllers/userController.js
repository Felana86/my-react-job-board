const User = require("../models/user");
const jwt = require('../services/jwt');
const bcrypt = require('bcrypt');

const userController = {

    isRegister: async (request, response) => {
     console.log(request.body, "je suis là"); 
        try {
            // User input from front-end (body): email and password
            const { email, password } = request.body;
            // console.log(request.body, "hello");

            // Validate user input
            if (!(email && password)) {
                response.status(400).send("Please enter both, email and password!");
            }
    
            // Check if user exists in database
            const existUser = await User.findOneByEmail(email);
    
            if (existUser) {
                response.status(409).send("This user exists already! Please, login to proceed.");
            } else {   
            // Encrypting user password
            encryptedPassword = await bcrypt.hash(password, 10);
            
            // Create user in database
            const newUser = new User({

                firstname: request.body.firstname.toString().toLowerCase(),
                lastname: request.body.lastname.toString().toLowerCase(),
                email: request.body.email.toString().toLowerCase(),
                password: encryptedPassword,
                role: "user" /* once we have different user types (e.g. candidate and recruter) 
                and a front-end admin profile with a fonctionnality to create other user types as well as 
                users with admin rights, we will handle role creation dynamically */

            });console.log("newUser", newUser);
            const insert =  await newUser.save();
            // console.log(insert);
            response.status(201).send(insert);
            }
        } catch (error) {
            console.log(error);
        } 
    },



    isLogin: async (request, response) => {

        // Our login logic goes here
            try {
                // Get user input
                const { email, password } = request.body;
                // console.log(request.body);
                // Validate user input
                if (!(email || password))  {
                    return response.status(400).send("Please enter both, email and password!");
                }
                // Validate if user exists in database
                const user = await User.findOneByEmail(email);
        
                if (!user) {
                    response.status(400).send("This user could not be found.");
                }
                const validPassword = await bcrypt.compare(password, user.password);
                if (!validPassword) {
                    response.status(400).send("Invalid password!");
                } else {
                    delete user.password;
                    return response.status(200).json({user, token: jwt.createToken(user)});
                }
            } catch (error) {
                console.log(error);
            }
    },

    // We are not sure yet if we will need this method
    // getAllUser: async (_, response) => {
    //     try {
    
    //         const users = await User.findAll();
    //         //console.log(users);
    //         response.json(users);
    //     } catch(error) {
    //         response.status(500).send(error.message);
    //     }
    // },

    // we are not sure yet to need this method
    // getOneUser: async (request, response) => {

    //     try {
    //         const user = await User.findOneById(parseInt(request.params.id, 10));
    //         response.json(user);
    //     } catch(error) {
    //         if (error instanceof User.UserError) {
    //             response.status(404).send(error.message);
    //         } else {
    //             response.status(500).send(error.message);
    //         }
    //     }
    // },

    // We are not sure yet if we will need this method
    // addUser: async (request, response) => {
    //     try {
    //         const user = new User(request.body);
    //         const newUser = await user.save();
    //         if (newUser) { //equivalent if (newUser !== undefined)
    //             //model responds with instance, hence it's an insert
    //             response.status(201).json(newUser);
    //         } else {
    //             //no return from model, hence it's an update
    //             response.status(204).json(user);
    //         }
    //     } catch (error) {
    //         response.status(500).send(error.message);
    //     }
    // },
    
    deleteOneUser: async (request, response) => {
        try {
            const user = await User.findOneAndDelete(parseInt(request.params.id, 10));
            if(!user) // if user is no more, delete was successful
                // with response.status(204).json(user); --> status code 204 has no body, 
                // so .json might be completely unnecessary,
                // sending a personnalised status message in the body is possible with
                // status code 200 though:
                response.status(200).send("Delete successful.");
        } catch (error) {
            if (error instanceof User.UserError) {
                response.status(404).send(error.message);
            } else {
                response.status(500).send(error.message);
            }
        }
    },
};

module.exports = userController;
