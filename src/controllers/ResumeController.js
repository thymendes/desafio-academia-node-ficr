const axios = require ('axios')


module.exports = {
    async consulta(req, res){
        try {//Pega dados do Github
            const apiGit = await axios.get ('https://api.github.com/users/thymendes')

            const { name = login, html_url, bio, company, repos_url, avatar_url, location } = apiGit.data

            //return res.json(apiGit.data)
            const curriculoData = { 
                "facebook_profile": {
                "image": avatar_url,
                "nome": name,
                "surname": " de Almeida",
                "endereco" : location,
                "gender": "Masculino",
                "birthday": "30/10/1986",
                "e-mail": "thymendes@gmail.com",
                },
                "github_profile": {
                    "name": name,
                    "html_url": html_url,
                    "bio":bio,
                    "company": company,
                    "repositories": repos_url,

                }}
        return res.json(curriculoData)

        } catch (error) {
            console.error('Erro ao consultar api do github')
        }
    }
}