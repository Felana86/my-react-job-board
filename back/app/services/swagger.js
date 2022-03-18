const options = {
    swaggerDefinition: {
        info: {
            description: 'A job board API REST',
            title: 'JobBoard',
            version: '1.0.0'
        },
        host: `localhost:${process.env.PORT}`,
        basePath: '/',
        produces: [
            "application/json"
        ],
        schemes: ['http'],
    },
    basedir: __dirname,
    files: ['../../app/**/*.js']
};

module.exports = options;