import { check, validationResult } from "express-validator"
import Testimonial from '../models/Testimonial.js'

export const testimoniales = async (req, res) => {
    
    const testimoniales = await Testimonial.findAll()
    
    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    })
}

export const agregarTestimoniales = async (req, res) => {

    await check('nombre')
            .notEmpty()
            .withMessage(' El nombre no puede ir vacio')
            .run(req)

    await check('correo')
            .isEmail()
            .withMessage('El correo no es valido')
            .run(req)
    await check('mensaje')
            .isLength({min: 10})
            .withMessage('El mensaje esta vacio o es muy corto')
            .run(req)

    let resultado = validationResult(req)
    
    const { nombre, correo, mensaje } = req.body
    
    if(!resultado.isEmpty()) {
        
        const testimoniales = await Testimonial.findAll()
        
        return res.render('testimoniales', {
            errores: resultado.array(),
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }

    try {
        
        await Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        
        return res.redirect('/testimoniales')

    } catch (error) {
        console.log(error)
    }
}