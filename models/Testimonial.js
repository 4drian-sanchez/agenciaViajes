import sequelize  from 'sequelize'
import db from '../config/db.js'

const Testimonial = db.define( 'testimoniales', {
    nombre: {
        type: sequelize.STRING,
        allowNull: false
    },
    correo: {
        type: sequelize.STRING,
        allowNull: false
    },
    mensaje: {
        type: sequelize.STRING,
        allowNull: false
    }
})

export default Testimonial