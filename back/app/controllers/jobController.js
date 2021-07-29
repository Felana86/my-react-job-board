const  Job  = require('../models/job');



const jobController = {

    findAllJobs: async (_, response) => {
        try {
            const jobs = await Job.findAll();
            response.json(jobs);
        } catch(error) {
            response.status(500).send(error.message);
        }
    },

    // We are not sure yet to need this method as we might choose to handle 
    // showing details of one job without changing the page 
    // findOneJob: async (request, response) => {
    //     try {
    //         const job = await Job.findOne(parseInt(request.params.id, 10));
    //         response.json(job);
    //     } catch(error) {
    //         if (error instanceof Job.JobError) {
    //             response.status(404).send(error.message);
    //         } else {
    //             response.status(500).send(error.message);
    //         }
    //     }
    // },

    addJob: async (request, response) => {
        try {
            const job = new Job(request.body);
            const newJob = await job.save();
            if (newJob) { //equivalent if (newJob !== undefined)
                //model responds with instance, hence it's an insert
                response.status(201).json(newJob);
            } else {
                //no return from model, hence it's an update
                response.status(204).json(job);
            }
        } catch (error) {
            response.status(500).send(error.message);
        }
    },

    deleteJob: async (request, response) => {
        try {
            const job = await Job.findOneAndDelete(parseInt(request.params.id, 10));
            if(!job) // if job is not anymore, delete was successful
                response.status(204).json(job);
        } catch (error) {
            if (error instanceof Job.JobError) {
                response.status(404).send(error.message);
            } else {
                response.status(500).send(error.message);
            }
        }
    }
}

module.exports = jobController;