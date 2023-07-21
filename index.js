import Express from 'express' 
import appRoutes from './routes/index.js'
import db from './config/db.js'

const app = Express()

//Otra forma de pasar variables a las vistas desde el middleware

//Conexion con la base de datos
try {
    await db.authenticate()
    db.sync() 
    console.log('Conexión correcta a la base de datos')
} catch (error) {
    console.log(error)
}

//Otra manera de crear middlewares y pasar variables a todas las vistas
app.use( (req, res, next) => {
    const year = new Date()
    res.locals.year = year.getFullYear()
    return next()
})

//El router tiene que estar justo antes del listen y el urlencoded debe estar antes del router
//Configuración para leer los datos de un formulario
app.use( Express.urlencoded( { extended: true } ) )

//PUG
app.set('view engine', 'pug')
app.set('views', './views')

//Archivos estáticos
app.use( Express.static('public'))

//Routing
app.use('/', appRoutes)

const port = process.env.PORT || 3000 
app.listen( port, () => console.log(`La aplicación se esta ejecutando en el puerto ${port}`) )