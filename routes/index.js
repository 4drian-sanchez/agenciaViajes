import Express from 'express' 
import {inicio, 
        nosotros, 
        contacto, 
        viajes,
        viajeDetalles,
} from '../controllers/paginasController.js'

import {
        agregarTestimoniales, 
        testimoniales
} from '../controllers/testimonialesController.js'

const router = Express.Router()

router.get('/', inicio) 
router.get('/nosotros', nosotros) 
router.get('/contacto', contacto) 
router.get('/testimoniales', testimoniales) 
router.post('/testimoniales', agregarTestimoniales) 
router.get('/viajes', viajes) 
router.get('/viaje/:slug', viajeDetalles) 

export default router
