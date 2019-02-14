const mongoose = require('./connection.js')
const Schema = mongoose.Schema;


const GifSchema = new Schema({

    image: String,
    title: String

})





module.exports = mongoose.model("Gif", GifSchema)