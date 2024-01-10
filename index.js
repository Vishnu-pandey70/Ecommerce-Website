const express = require('express');
const app = express()
const mongoose = require('mongoose');

// odm
mongoose.connect('mongodb://127.0.0.1:27017/newDB')
.then(()=>{
    console.log("db connected")
})
.catch((err)=>{
    console.log('error')
    console.log(err)
})
let movieSchema = new mongoose.Schema({ //schema
    name: String,
    rating: Number , 
    year: Number ,
    isWatched: Boolean
})
movieModel  = mongoose.model('movies', movieSchema);

const ironman = new movieModel({name:'ironman' , rating:10 , year:2008 , isWatched:false });
console.log(ironman)
//ironman.save();


app.listen(8080 , ()=>{
    console.log("server connected at 8080")
})



