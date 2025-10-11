const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dbchris:chrisdb@cluster0.ylii4xb.mongodb.net/dbchris?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log("Connected to DB")
}).catch(()=>{
    console.log("not connected");
})