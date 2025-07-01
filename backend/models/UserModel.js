const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    Name:String,
    Email:String,
    Password:String,
    Address:String

})
const userdata=mongoose.model('entries',UserSchema)
module.exports=userdata;