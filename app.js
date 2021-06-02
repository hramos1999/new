const express = require('express')
const app = express()

const regsumarRoutes = require('./routes/regsumarRoutes')
const sumarioRoutes = require('./routes/sumarioRoutes')
const docenteRoutes = require('./routes/docenteRoutes')
const disciplinaRoutes = require('./routes/disciplinaRoutes')
const cursoRoutes = require('./routes/cursoRoutes')
const authRoutes = require('./routes/authRoutes')
const iniRegSum = require('./routes/iniRegSum')

app.disable('x-powered-by')
app.use(express.urlencoded({ extended: true }))

// ------------------------ End points -----------------------
// simple route
app.use('/', iniRegSum)
//app.use('/regsumar', regsumarRoutes)
app.use('/docentes', docenteRoutes)
//app.use('/sumario', sumarioRoutes)
app.use('/disciplinas', disciplinaRoutes)
app.use('/cursos', cursoRoutes)
//app.use('/auth', authRoutes)



module.exports = app