import { Sequelize } from 'sequelize'
import dotenv from 'dotenv/config' 
/* dotenv.config({path: '.env'}) */

//Creación de la base de datos con Sequelize
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD ?? '', {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false,

} )

export default db;