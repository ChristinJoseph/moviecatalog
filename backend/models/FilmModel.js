const mongoose = require('mongoose')

const FilmSchema = new mongoose.Schema({
        Movie:String,
        Genre:String,
        Review:String,
        ImageUrl:String,
        Rating: {
        type: Number,
        min: 0,
        max: 5
    }

})
const filmdata=mongoose.model('users',FilmSchema)
module.exports=filmdata;