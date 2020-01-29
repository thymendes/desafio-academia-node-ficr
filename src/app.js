const express = require('express')

class AppController {
    contructo(){
        this.app = express()
        this.middlewares()
        this.routes()
    }
    middlewares(){

    }

    routes(){
        this.app.use()
    }
}