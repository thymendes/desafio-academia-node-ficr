const axios = require ('axios')

module.exports = {
    async faceapi (req, res) {
        try {
           const apiFacebook = await axios.get ("https://graph.facebook.com/v5.0/")

            const {  first_name, adress, gender, birthday, email,  } = apiFacebook.data;

            return res.json(apiFacebook.data) 
        } catch (error) {
            console.error('Erro ao consultar api do facebook')
        }
    }
}

