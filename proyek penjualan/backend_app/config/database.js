const { Sequelize } = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        dialect: process.env.DB_DIALECT,
        logging: process.env.NODE_ENV === 'development' ? console.log : false,
    }
)

module.exports = sequelize