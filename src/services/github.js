const axios = require ('axios')
require ('dotenv').config()

module.exports = {
    async consulta(req, res){
        try {
            const apiGit = await axios.get ('https://api.github.com/users/thymendes')

            const { name = login, html_url, bio, repos_url, avatar_url } = apiGit.data

            return res.json(apiGit.data)
        } catch (error) {
            console.error('ERROR: Deu ruim')
        }
    }
}