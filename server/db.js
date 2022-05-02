const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "sprisha0810",
    host: "localhost",
    port: 5432,
    database: "pawsairlines"
});

module.exports = pool;