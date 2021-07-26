const  User  = require("../models/user");
const jwt = require('../services/jwt');
const bcrypt = require('bcrypt');

const userController = {

    isRegister: async (request, response, next) => {

        try {
    
            // We get all user input from the front
            // on a besoin que du mail et pwd ( vu par Caro)
            const {  email, password } = request.body;
    
            // Make validation user input
            if (!(email && password)) {
                response.status(400).send("All input is required");
            }
    
            // We check if user already exist
            // Validate if user exist in our database
            const existUser = await User.findOneByEmail({email});
    
            if (existUser) {
                response.status(409).send("User is allready exist ! Please, login");
            }    
                  //We will encrypting user password
            encryptedPassword = await bcrypt.hash(password, 10);
              
            // Creating user in our database
           
            const user = await User.create({
                firstName,
                lastName,
                email: email.toLowerCase().toString(),
                password: encryptedPassword
            });
    
            response.status(201).send(user);
            
    
    
        } catch (error) {
            console.log(error);
        } next();
    },

    isLogin: async (request, response) => {

        // our login logic goes here
            try {
                
                //we'll getting the user input
                const { email, password } = request.body;
        
                // Validation of of user input
                if (!(email && password))  {
                    return response.status(400).send("All input are required");
                }
                // Validate if user exist in our database
                const user = await User.findOneByEmail({ email });
        
                if (user && (await bcrypt.compare(password, user.password))) {
                    
                    delete user.password;
                    // user
                    response.status(200).json({user, token: jwt.createToken(user)});
                }
                response.status(400).send("Invalid Informations");
        
            } catch (error) {
                console.log(error);
            }
    },
                    

            



    getAllUser: async (_, response) => {
        try {
            
            const users = await User.findAll();
            //console.log(users);
            response.json(users);
        } catch(error) {
            response.status(500).send(error.message);
        }
    },

    getOneUser: async (request, response) => {
 
        try {
            const user = await User.findOneById(parseInt(request.params.id, 10));
            response.json(user);
        } catch(error) {
            if (error instanceof User.UserError) {
                response.status(404).send(error.message);
            } else {
                response.status(500).send(error.message);
            }
        }
    },

    addUser: async (request, response) => {
        try {
            const user = new User(request.body);
            const newUser = await user.save();
            if (newUser) { //equivalent if (newUser !== undefined)
                //model responds with instance, hence it's an insert
                response.status(201).json(newUser);
            } else {
                //no return from model, hence it's an update
                response.status(204).json(user);
            }
        } catch (error) {
            response.status(500).send(error.message);
        }
    },
    
    deleteOneUser: async (request, response) => {
        try {
            const user = await User.findOneAndDelete(parseInt(request.params.id, 10));
            if(!user) // if user is no more, delete was successful
                response.status(204).json(user);
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