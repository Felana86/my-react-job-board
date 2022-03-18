const { Router } = require('express');

// Controllers
const jobController = require('./controllers/jobController');
const userController = require('./controllers/userController');
const poleemploiController = require('./controllers/poleemploiController');
const discordController = require('./Discord/discordController');

// Schemas
const jobSchema = require('./schemas/job');
const userSchema = require('./schemas/user');

// Middleware
const authorizationAdmin = require('../app/middleware/authAdminMiddleware');

const { validateBody } = require('./services/validator');

const router = Router();


//Routes

/**
* Test route
* @route GET /hello
* @group Jobboard
* @returns {string} 200 - 'Hello World!' if test is successful
*/
router.get('/hello', ( _, response) => response.json('Hello World!'));


// ROUTE TO FETCH POLE EMPLOI DATA

/**
* Responds with jobs from API Pôle Emploi without user discrimination
* @name /jobs/pe
* @group Jobboard
* @route GET 
* @returns {Array<Jobs>} 200 - An array of jobs
* @returns {string} 500 - An error message
* @route POST 
* @returns {Array<Jobs>} 200 - An array of jobs
* @returns {string} 500 - An error message
*/
router.route('/jobs/pe/')
      .get(poleemploiController.fetchJobs)
      .post(poleemploiController.fetchJobs);


// ROUTES RELATED TO JOB

/**
* Responds with all jobs in database without user discrimination
* @route GET /jobs
* @group Jobboard
* @returns {Array<Jobs>} 200 - An array of jobs
* @returns {string} 500 - An error message
*/
router.get('/jobs', jobController.findAllJobs);



/**
* @typedef JobPost
* @property {number} id
* @property {string} title
* @property {string} description
* @property {string} company
* @property {string} technology
* @property {string} locality
* @property {string} contract
* @property {string} salary
* @property {number} user_id
*/

/**
* Adds a new job in database, only with admin access rights
* @route POST /jobs/save
* @group Jobboard
* @param {JobPost.model} object.body.required Job object to add to database
* @returns {Job.model} 201 - The newly created job
* @returns {string} 500 - An error message
*/
router.post('/jobs/save', authorizationAdmin, validateBody(jobSchema), jobController.addJob);

/**
* Updates a job in database, only with admin access rights
* @route PATCH /jobs/update/{id}
* @group Jobboard
* @param {Job.model} object.body.required Job object to update in database
* @returns {*} 204 - Job has been updated
* @returns {string} 500 - An error message
*/
router.patch('/jobs/update/:id(\\d+)', authorizationAdmin, validateBody(jobSchema), jobController.addJob);

/**
* Finds and deletes a job in database, only with admin access rights
* @route DELETE /jobs/delete/{id}
* @group Jobboard
* @param {number} id.path.required The id of the job to delete
* @returns {*} 204 - Job has been deleted
* @returns {string} 404 - An error message
* @returns {string} 500 - An error message
*/
router.delete('/jobs/delete/:id(\\d+)', authorizationAdmin, jobController.deleteJob);


//ROUTES RELATED TO USER

/**
* @typedef UserPost
* @property {number} id
* @property {string} firstName
* @property {string} lastName
* @property {string} email
* @property {string} password
* @property {string} role
*/

/**
* Adds a new user in database/ user registration
* @route POST /users/registerUser
* @group Jobboard
* @param {UserPost.model} object.body.required User object to add to database
* @returns {User.model} 201 - The newly created user
* @returns {string} 500 - An error message
*/
router.post('/users/registerUser', validateBody(userSchema), userController.isRegister);




/**
* Finds a user in database / user login
* @route POST /users/loginUser
* @group Jobboard
* @param {UserPost.model} object.body.required User object to connect to database
* @returns {Job.model} 201 - The newly connected user
* @returns {string} 500 - An error message
*/
router.post('/users/loginUser', userController.isLogin);



/**
* Finds and deletes a user in database, only with admin access rights
* @route DELETE /users/delete/{id}
* @group Jobboard
* @param {number} id.path.required The id of the job to delete
* @returns {*} 204 - User has been deleted
* @returns {string} 404 - An error message
* @returns {string} 500 - An error message
*/
router.delete('/users/delete/:id(\\d+)', authorizationAdmin, userController.deleteOneUser);

// ROUTE TO DISCORD BOT

/**
* Responds with Discord Bot commands and events
* @name /discord
* @group Jobboard
* @route GET 
* @returns {Array<Jobs>} 200 - An array of messages and events
* @returns {string} 500 - An error message
* @route POST 
* @returns {Array<Jobs>} 200 - An array of messages and events
* @returns {string} 500 - An error message
*/
router.route('/discord')
      .get(discordController.fetchDiscordBot)
      .post(discordController.fetchDiscordBot);

router.use((request, response) => response.status(404).json(`Endpoint ${request.url} not found`));

module.exports = router;



