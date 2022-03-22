// Using a connection pool to avoid PostgreSQL to pipeline and execute serially all queries 
// among simultaneous requests 
const {Pool} = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

if (process.env.NODE_ENV === "production") {
    
    pool = new Pool({

        connectionString: process.env.DATABASE_URL,
        // We add this option for letting to no-https connexions will be allowed to the database
        // on ajoute cette option pour que heroku ne rejette pas les connexions non https à la DB
        ssl: {
            rejectUnauthorized: false
        }
    });
}

module.exports = pool;