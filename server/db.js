const Pool = require("pg").Pool;

const pool = new Pool({
    user: "samlee",
    password: "postgres123",
    host: "localhost",
    port: 5432,
    database: "pawsairline"
});

module.exports = pool;