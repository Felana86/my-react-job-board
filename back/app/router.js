const { Router } = require('express');

// Controllers
const jobController = require('./controllers/jobController');
const userController = require('./controllers/userController');
const poleemploiController = require('./controllers/poleemploiController');

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

// We are not sure yet to need this route as we might choose to handle 
// showing details of one job with a toggle, meaning without changing the page 
// /**
// * Responds with one job in database
// * @route GET /jobs/{id}
// * @group Jobboard
// * @param {number} id.path.required The id of the job to fetch
// * @returns {Job.model} 200 - A single job identified by its id
// * @returns {string} 404 - An error message
// * @returns {string} 500 - An error message
// */
// router.get('/jobs/:id(\\d+)', jobController.findOneJob);

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

// We are not sure yet to need that route
// /**
// * Responds with all users in database if Admin
// * @route GET /users
// * @group Jobboard
// * @returns {Array<User>} 200 - An array of users
// * @returns {string} 500 - An error message
// */
// router.get('/users',  authorizationAdmin, userController.getAllUser);

// We are not sure yet to need this route
// /**
// * Responds with one user in database
// * @route GET /users/{id}
// * @group Jobboard
// * @param {number} id.path.required The id of the user to fetch
// * @returns {User.model} 200 - One user identified by his/her id
// * @returns {string} 404 - An error message
// * @returns {string} 500 - An error message
// */
// router.get('/users/:id(\\d+)', authorizationAdmin, userController.getOneUser);

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

// // SE RAJOUTER UN COMPTE ADMIN NOUS-MEME VIA LE FORMULAIRE DE LOGIN
// /**
// * Adds a new Admin in database
// * @route POST /users/register
// * @group Jobboard
// * @param {UserPost.model} object.body.required User object to add to database
// * @returns {User.model} 201 - The newly created Admin* @returns {String} 500 - An error message
// */
// router.post('/users/registerAdmin', /*authorizationAdmin,*/ validateBody(userSchema), userController.isRegister);

/**
* Finds a user in database / user login
* @route POST /users/loginUser
* @group Jobboard
* @param {UserPost.model} object.body.required User object to connect to database
* @returns {Job.model} 201 - The newly connected user
* @returns {string} 500 - An error message
*/
router.post('/users/loginUser', userController.isLogin);

// This route likely is superfluous for now
// /**
// * Connect an ADMIN in database
// * @route POST /user/login
// * @group Jobboard
// * @param {UserPost.model} object.body.required User object to connect to database
// * @returns {User.model} 201 - The newly connected Admin
// * @returns {string} 500 - An error message
// */
// router.post('/user/loginAdmin', /*authorizationAdmin,*/ validateBody(userSchema), userController.isLogin);

// We are not sure yet to need this route
// /**
// * Updates a user in database
// * @route PATCH /users/update
// * @group Jobboard
// * @param {User.model} object.body.required User object to update in database
// * @returns {*} 204 - User has been updated
// * @returns {string} 500 - An error message
// */
// router.patch('/users/update', authorizationUser, validateBody(userSchema), userController.addUser);
// // SI BESOIN DE RAJOUTER UNE ROUTE POUR LES ADMIN pour modifier les info user
// router.patch('/users/update', authorizationAdmin, validateBody(userSchema), userController.addUser);

// We are not sure yet to need this route
// /**
// * Finds and deletes a user in database
// * @route DELETE /user/delete/{id}
// * @group Jobboard
// * @param {number} id.path.required The id of the job to delete
// * @returns {*} 204 - User has been deleted
// * @returns {string} 404 - An error message
// * @returns {string} 500 - An error message
// */
// router.delete('/user/delete/:id(\\d+)', userController.deleteOneUser);

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

router.use((request, response) => response.status(404).json(`Endpoint ${request.url} not found`));

module.exports = router;



// suite au login, pour l'arrivée sur la "page de profil", il faudra une route user et admin de plus:
// un router pour les visiteurs connectées
// un router pour les admins