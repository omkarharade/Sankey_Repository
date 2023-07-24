const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    USER : process.env.USER,
    HOST : process.env.HOST,
    DATABASE : process.env.DATABASE,
    PASSWORD : process.env.PASSWORD,
    DIALECT : process.env.DIALECT,
    PORT : process.env.PORT,
};