// Database Configurations
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const MYSQL_CONFIGS = {
    host: process.env.HOST,
    user: "react-stickynotes-user", //change this accordingly
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}
console.log(port, MYSQL_CONFIGS);
module.exports = {MYSQL_CONFIGS, port};
