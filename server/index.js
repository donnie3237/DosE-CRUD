require('dotenv').config();
const express = require('express')
const app = express();
const PORT = process.env.PORT || 3030
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
const conNect = mongoose.connect()

app.use(cors());


app.listen(PORT,()=>
    {
        console.log("server is running on port",PORT)
    }
    
    
)
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'./server.html'));
})
app.get('/jsondata', function(req,res){
    res.sendFile(path.join(__dirname,'./data.json'))
    
})
app.get('/thisindexjs', function(req,res){
    res.sendFile(__filename,'./index.js')
}
)