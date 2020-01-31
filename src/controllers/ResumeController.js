const axios = require ('axios')
require ('dotenv').config()

module.exports = {
    async consulta(req, res){
        try {

            //Pega dados do Github
            const apiGit = await axios.get ('https://api.github.com/users/thymendes')

            const { name = login, html_url, bio, repos_url, avatar_url, location } = apiGit.data

            return res.json(apiGit.data)

            //Pega dados do Facebook

            //const apiFacebook = await axios.get ('')

           // return res.json(apiFacebook.data)

            const curriculoData = { 
                "nome": name,
                //"data_nascimento":,
                "endereco" : location,
                
            }
        //return res.json(curriculoData)

        } catch (error) {
            console.error('Erro ao consultar api do github')
        }
    }
}