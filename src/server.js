const express = require ('express')
const app = express()

app.get('/', (req, res) => {
    res.send ('Abacate')
})

app.listen (3000)