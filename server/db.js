const Pool = require("pg").Pool;

const pool = new Pool({
    user: "sam",
    password: "postgres123",
    host: "localhost",
    port: 5432,
    database: "flightslist"
});

module.exports = pool;