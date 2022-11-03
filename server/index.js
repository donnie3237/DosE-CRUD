//นี่คือการอิมพอร์ทไลบรารีต่างๆ
require('dotenv').config(); //import .envเพื่อซ่อนรหัส
const express = require('express') //import expressไลบรารี
const app = express(); //ใช้ฟงก์ชั่น express
const PORT = process.env.PORT || 8080 ; //กำหนดพอร์ทจากไฟล์.env และเขียนสด
const cors = require('cors') //import cors มิดเดิ้ลแวร์
const path = require('path'); //import ตัวpath
const { ObjectID, ObjectId } = require('bson');
const MongoClient  = require('mongodb').MongoClient;
var database; //ค่าฐานข้อมูล
const Datadase_URI = process.env.MONGODB_URI //import รหัส Database

//นี่คือมิดเดิ้ลแวร์ที่เชื่อม(middle ware)
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended : true}))


//นี่คือส่วนของการรันเซิร์ฟเวอร์บนพอร์ตและเชื่อมฐานข้อมูล
app.listen(PORT,()=>
    {
        console.log('running on port:',PORT)
        MongoClient.connect(Datadase_URI,{useNewUrlParser:true},(err,result)=>{
            if (err){console.log('err :'+err)}
            database = result.db('mydb')
            console.log('connected to database')
        })
    }
)

//นี่คือเราเตอร์ของเซิฟเวอร์(ของจิงต้องอิมพอร์ตเข้า เพราะมันมีเราเตอร์เยอะมากๆ)

//นี่คือหน้าหลักหรือ indexของServer
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'./server.html'));
})
//อันนี้เป็นหน้าของไฟล์หลักของเซิฟเวอร์(ที่เอาไว้รัน หรือไฟล์ที่คุณอ่านอยู่)
app.get('/thisindexjs', function(req,res){
    res.sendFile(__filename,'./index.js')
}
)

//นี่คือเราต์สำหรับ CREATE,DELETE,UPDATE,READ ข้อมูลจากฐานข้อมูล

//อ่านข้อมูล
app.get('/api',(req,res)=>{
    database.collection('users').find({}).toArray((err,result)=>{
        if (err) {
            res.send('Cannot find data!!')
        }
        res.send(result)
    })
})

//เลือกอ่านข้อมูล
app.get('/api/:id',(req,res)=>{
    database.collection('users').find({_id : ObjectId(req.params['id'])}).toArray((err,result) => {
        if(err) throw err
        res.send(result)
        console.log(result)
    })
})
//เพิ่มข้อมูล
app.post('/api', (req,res)=>{
    var user = {
        "name":req.body.name,
        "age":req.body.age,
        "height":req.body.height,
        "weight":req.body.weight,
        "descrip":req.body.descrip
    }
    database.collection('users').insertOne(user, (err,res)=>{
        console.log("insert has success")
    })
})

//ลบข้อมูล
app.delete('/api/:id',(req,res)=>{
    database.collection('users').deleteOne({_id : ObjectId(req.params['id'])},(err,result)=>{
        if (err){
            res.send('Delete Eror :'+err)
        }
        res.json({message: 'deleted Brooo!!'})
    })
})

//อัพเดทข้อมูล
app.put('/api/:id', (req,res)=>{
    database.collection('users').findOneAndUpdate({_id:req.params.userId},
        (err,result)=>{
            if (err){
                res.send('I cannot Update bacause :'+ err)
            }
            res.send({message: 'Udated!'})
        }
        )
}  )