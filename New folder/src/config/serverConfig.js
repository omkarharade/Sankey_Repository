const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    USER : process.env.USER,
    HOST : process.env.HOST,
    DATABASE : process.env.DATABASE,
    PASSWORD : process.env.PASSWORD,
    DIALECT : process.env.DIALECT,
    DB_PORT : process.env.DB_PORT,
    SERVER_PORT : process.env.SERVER_PORT,
};
