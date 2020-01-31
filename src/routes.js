const express = require ('express')
const routes = express.Router()

const ResumeController = require ('./controllers/ResumeController')

routes.get('/resume', ResumeController.consulta)

module.exports = routes 