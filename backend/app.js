const express = require('express')
const cors = require('cors')
const app = new express()
require('dotenv').config();
require("./connection")
const filmModel = require('./models/FilmModel')
const userModel = require('./models/UserModel')



const PORT = 3000;

app.use(express.json())
app.use(cors())

app.get('/viewfilm',async(req,res)=>{
    try{
        const data=await filmModel.find()
        // console.log(data)
        res.send(data)
    }
    catch(error){
        console.log(error) 
    }

})
app.get('/viewuser',async(req,res)=>{
    try{
        const data=await userModel.find()
        // console.log(data)
        res.send(data)
    }
    catch(error){
        console.log(error) 
    }

})

app.post('/addfilm',async(req,res)=>{
    try{
        var item=req.body;
        const datasave=new filmModel(item);
        const saveddata=await datasave.save();
        res.send('Film Added Successful');
    }
    catch(error){
        console.log('error')
    }
})
app.post('/adduser',async(req,res)=>{
    try{
        var item=req.body;
        const datasave=new userModel(item);
        const saveddata=await datasave.save();
        res.send('User Added Successful');
    }
    catch(error){
        console.log('error')
    }
})
app.put ('/movieedit/:id',async(req,res)=>{
    try{
        const data = await filmModel.findByIdAndUpdate(req.params.id,req.body);
        res.send('Updated Successfully');
    }
    catch(error){      
        console.log(error)
    }
})

app.delete('/moviedelete/:id',async(req,res)=>{
    try{
        await filmModel.findByIdAndDelete(req.params.id);
        res.send('Deleted Successfully');
    }
    catch(error){
        console.log(error)
    }
})

console.log(process.env.MONGO_URI);


app.listen(PORT,()=>{
    console.log("Listening to port 3000....")
})