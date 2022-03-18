const database = require('../database');




/**
* @typedef Job
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

class Job {

// we're referencing the custom error as static property of the model 
// to test the class of an error in the controller without having to 
// import the class of the error
  
    // static JobError ;

    constructor(data={}) {
         for (const prop in data) {
             this[prop] = data[prop];
         }
     }

    /**
    * Retrieves all jobs from database
    * @static
    * @async
    * @returns {Array<Job>} all jobs in database
    * @throws {Error} an error object
    */
    static async findAll() {
        try {
            const {rows} = await database.query('SELECT * FROM job');
            return rows.map(row => new Job(row));
        } catch (error) {
            if (error.detail) {
                throw new Error(error.detail);
            } else {
                throw error;
            }
        }
    }

    // We are not sure yet to need this method as we might choose to handle 
    // showing details of one job with a toggle, meaning without changing the page 
    // /**
    // * Retrieves one job from database
    // * @static
    // * @async
    // * @param {number} id 
    // * @returns {Job} the instance identified with its id
    // * @throws {Error} an error object
    // */
    // static async findOne(id) {
    //     try {
    //         const {rows} = await database.query('SELECT * FROM job WHERE id=$1', [id]);
    //         if (rows[0]) {
    //             return new Job(rows[0]);
    //         } else {
    //             throw new JobError(id);
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
    * Adds or updates an instance of Job in database
    * @async
    * @returns {Job} the inserted or updated instance
    * @throws {Error} An Error object
    */
    async save() {
        try {
            if (this.id) {
                await database.query('SELECT update_job($1)', [this]);
            } else {
                //it is important to name the result here, else wise 
                //postgre will do it automatically and we won't be able 
                //to guess
                const {rows} = await database.query('SELECT id FROM add_job($1)', [this]);
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
    * Deletes a job from database
    * @static
    * @async
    * @param {number} id 
    * @returns {Job} the deleted instance
    * @throws {Error} an error object
    */
    static async findOneAndDelete(id) {
        try {
            const {rows} = await database.query('SELECT * FROM job WHERE id=$1', [id]);
            if (rows[0]) {
                await database.query('DELETE FROM job WHERE id=$1', [id]);
            } else {
                throw new JobError(id);
            }
        } catch (error) {
            if (error.detail) {
                throw new Error(error.detail);
            } else {
                throw error;
            }
        }
    }
};

module.exports = Job;
