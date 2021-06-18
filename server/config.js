// Database Configurations
const dotenv = require('dotenv');
dotenv.config();
const MYSQL_CONFIGS = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}
module.export(MYSQL_CONFIGS)
