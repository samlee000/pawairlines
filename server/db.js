const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "thunderxray",
    host: "localhost",
    port: 5432,
    database: "csce310_project"
});

module.exports = pool;