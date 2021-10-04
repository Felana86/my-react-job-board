const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            description: 'This job board API REST is an end-of-training project in which we are creating an application to help developers find React-related jobs in France.',
            title: 'Job Board - react-jobs.fr',
            version: '1.0.0',
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
                },
            contact: {
                name: "react-jobs",
                url: "http://react-jobs.fr",
                email: "info@react-jobs.fr",
                },
            },
        host: `localhost:${process.env.PORT}`,
        basePath: '/',
        produces: [
            "application/json"
        ],
        schemes: ['http'],
    basedir: __dirname,
    files: ['../../app/**/*.js']
    }
};

module.exports = options;