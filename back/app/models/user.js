const database = require('../database');



/**
* @typedef User
* @property {number} id
* @property {string} firstName
* @property {string} lastName
* @property {string} email
* @property {string} password
* @property {string} role
*/

class User {

    // we're referencing the custom error as static property of the model 
    // to test the class of an error in the controller without having to 
    // import the class of the error


    constructor(data={}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    // We are not sure yet to need this method
    // /**
    // * Retrieves all users from database
    // * @static
    // * @async
    // * @returns {Array<User>} all users in database
    // * @throws {Error} an error object
    // */
    // static async findAll() {
    //     try {
    //         //console.log(rows);
    //         const {rows} = await database.query('SELECT * FROM "user"');
    //         return rows.map(row => new User(row));
    //     } catch (error) {
    //         if (error.detail) {
    //             throw new Error(error.detail);
    //         } else {
    //             throw error;
    //         }
    //     }
    // }

    // We are not sure yet to need this method
    // /**
    // * Retrieves one user from database
    // * @static
    // * @async
    // * @param {number} id 
    // * @returns {User} the instance identified with its id
    // * @throws {Error} an error object
    // */
    // static async findOneById(id) {
    //     try {
    //         const {rows} = await database.query('SELECT * FROM "user" WHERE id =$1  ', [id]);
    //         if (rows[0]) {
    //             return new User(rows[0]);
    //         } else {
    //             throw new UserError(id);
    //         }
    //     } catch (error) {
    //         if (error.detail) {
    //             throw new Error(error.detail);
    //         } else {
    //             throw error;
    //         }
    //     }
    // }

    /**
    * Finds one user by his/her email in database
    * @static
    * @async
    * @param {string} email 
    * @returns {User} the instance identified by its email
    * @throws {Error} an error object
    */
    static async findOneByEmail(email) {
        try {
            const {rows} = await database.query('SELECT * FROM "user" WHERE email=$1 ', [email]);
            if (rows[0]) {
                return new User(rows[0]);
            }
        } catch (error) {
            if (error.detail) {
                throw new Error(error.detail);
            } else {
                throw error;
            }
        }
    }

    /**
    * Adds or updates an instance of User in database
    * @async
    * @returns {User} the inserted or updated instance
    * @throws {Error} An Error object
    */
    async save() {
        try {
            if (this.id) {
                await database.query('SELECT update_user($1)', [this]);
            } else {
console.log("this", this);
                //it is important to name the result here, else wise 
                //postgre will do it automatically and we won't be able 
                //to guess

                 const {rows} = await database.query('INSERT INTO "user"(firstname,lastname,  email, password,role) VALUES ($1, $2, $3, $4, $5) RETURNING * ', [this.firstname, this.lastname, this.email, this.password, this.role]);

                this.id = rows[0].id;
                return this;
            }
        } catch (error) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail);
            } else {
                throw error;
            }
        }
    }

    /**
    * Deletes a user from database
    * @static
    * @async
    * @param {number} id 
    * @returns {User}} the deleted instance
    * @throws {Error} an error object
    */
    static async findOneAndDelete(id) {
        try {
            const {rows} = await database.query('SELECT * FROM "user" WHERE id=$1', [id]);
            if (rows[0]) {
                await database.query('DELETE FROM "user" WHERE id=$1', [id]);
            } else {
                throw new UserError(id);
            }
        } catch (error) {
            if (error.detail) {
                throw new Error(error.detail);
            } else {
                throw error;
            }
        }
    }
}    

module.exports = User;

