const axios = require ('axios')

async function returnJSON (){
    const response = await axios.get (`https://api.github.com/users/repos`)
}
const connect = await axios.get('')

console.log('githubResponse')

module.exports = githubResponse