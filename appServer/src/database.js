/* importacion de lmodulo que permite conectar la base de datos*/


import mongoose from "mongoose"

const atlas = "mongodb+srv://jonathanaguilera2021:1010*@cluster0.nayfa.mongodb.net/express?retryWrites=true&w=majority"

const native = "mongodb://localhost/express"

mongoose.connect(atlas, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => {
        console.log("Base de datos conectada")
    })
    .catch(err => {
        console.log("Error", err)
    })