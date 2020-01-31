const express = require ('express')
const routes = express.Router()

const ResumeController = require ('./controllers/ResumeController')
//const FacebookController = require ('./controllers/FacebookController')

routes.get('/resume', ResumeController.consulta)
//routes.get ('/facebookapi', FacebookController.faceapi)

module.exports = routes 