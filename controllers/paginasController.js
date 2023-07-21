import Viajes from '../models/Viajes.js'
import Testimonial from '../models/Testimonial.js'
import { dateFormatter } from '../helpers/index.js'

// req: lo que se envia al serrvidor, res: lo que express nos responde
export const inicio = async (req, res) => { 

    try {

        const [ viajes, testimoniales ] = await Promise.all([
            Viajes.findAll({limit: 3}),
            Testimonial.findAll({limit: 3})
        ])

        /* const viajes = await Viajes.findAll({limit: 3}) */
        
        res.render('Inicio', {
            pagina: 'Inicio',
            home: 'home',
            viajes,
            dateFormatter,
            testimoniales
        })
    } catch (error) {
        console.log(error)
    }

}
export const nosotros = (req, res) => { 
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}
export const contacto = (req, res) => { 
    res.render('contacto', {
        pagina: 'Contacto'
    })
}

export const viajes = async (req, res) => { 
    const viajes = await Viajes.findAll()

    res.render('viajes', {
        pagina: 'Proximos viajes',
        viajes,
        dateFormatter
    })
}

export const viajeDetalles = async (req, res) => {
    const { slug } = req.params
    
    try {
        const viaje = await Viajes.findOne(
            {
                where: {
                    slug
                }
            })
        return res.render( 'viajeDetalles', {
            pagina: viaje.titulo,
            viaje,
            dateFormatter
        })
    } catch (error) {
        console.log(error)
    }
}