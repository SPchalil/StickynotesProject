// Database Configurations
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const MySQL_Configs = {
    host: process.env.HOST,
    user: process.env.MYSQL_USER, //change this accordingly
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}
console.log(port, MySQL_Configs);
module.exports = {MySQL_Configs, port};
