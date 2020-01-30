const express = require ('express')
const routes = express.Router()

const GithubController = require ('./services/github')
const FacebookController = require ('./controllers/FacebookController')

routes.get('/github', GithubController.consulta)

module.exports = routes 