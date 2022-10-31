//นี่คือการอิมพอร์ทไลบรารีต่างๆ
require('dotenv').config();
const express = require('express')
const app = express();
const PORT = process.env.PORT || 3030
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')

//นี่คือการเชื่อมฐานข้อมูลMongoBD

//นี่คือมิดเดิ้ลแวร์ที่เชื่อม
app.use(cors());


//นี่คือส่วนของหารรันเซิร์ฟเวอร์บนพอร์ต
app.listen(PORT,()=>
    {
        console.log("server is running on port",PORT)
    }
)

//นี่คือเราเตอร์ของเซิฟเวอร์(ของจิงต้องอิมพอร์ตเข้า เพราะมันมีเราเตอร์เยอะมากๆ)
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