import db from '../config/db.js'
import sequelize  from 'sequelize'

const viajes = db.define( 'viajes', {
    titulo: {
        type: sequelize.STRING,
        allowNull: false
    },
    precio: {
        type: sequelize.STRING,
        allowNull: false
    },
    fecha_ida: {
        type: sequelize.DATE,
        allowNull: false
    },
    fecha_vuelta: {
        type: sequelize.DATE,
        allowNull: false
    },
    imagen: {
        type: sequelize.STRING,
        allowNull: false
    },
    descripcion: {
        type: sequelize.STRING,
        allowNull: false
    },
    disponibles: {
        type: sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: sequelize.STRING,
        allowNull: false
    },
})

export default viajes