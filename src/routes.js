const {Router} = require ('express')
const routes = express.Router()

const FacebookController = require ('./controllers/FacebookController')
const GithubController = require ('./controllers/GithubController')
const githubResponse = require('./services/')

routes.get('/facebook', FacebookController.store)
routes.get('/githubresponse', githubResponse)


module.exports = routes 