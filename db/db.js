const mongoose = require("mongoose")
require("dotenv").config()

/* Para conectar a la DB

CONNECTMONGO = mongodb+srv://john:lennon@cluster0.0hxwpvr.mongodb.net/test
PORT = 8080

 */

const connect = async () => {
    try {
        await mongoose.connect(process.env.CONNECTMONGO)
        console.log("Base de datos conectada")
    } catch {
        console.log("No se pudo conectar a la base de datos")
    }
}

module.exports = { connect }