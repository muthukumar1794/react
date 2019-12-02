var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var cors = require('cors')
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

var mysql=require('mysql')
var conn = mysql.createConnection({
    database:'project',
    password:'123456',
    host:'127.0.0.1',
    port:'3306',
    user:'root'
})
 conn.connect()
app.get("/get/data",(req,res)=>{
    conn.query("select * from persondetails",(err,result)=>{
        if (err){
            res.send({
                code:404,
                message:err
            })
        }
        else{
            console.log("success")
            res.send({
                code:200,
                message:result

            })
        }
    })
})

app.post("/post/data",(req,res)=>{
    const a = req.body.name;
    const b = req.body.age;
    const c = req.body.mobno;
    const d = req.body.email;
    const e = req.body.password;
  
    conn.query(`insert into persondetails (name,age,mobno,email,password) values('${a}',${b},${c},'${d}','${e}')`,(err,result)=>{
        if(err){
            res.send({
                code:404,
                message:err
            })
        }
        else {

            conn.query("select * from persondetails",(err,result)=>{
                if(err){
                    res.send({
                    code:400,
                    message:400
                })
                }
                else{
                    res.send({
                        code:200,
                        message:result
                    })
                }
            })
        }
    })
})

app.put("/update/data/",(req,res)=>{
    const a = req.body.name;
    const b = req.body.age;
    const c = req.body.mobno;
    const d = req.body.email;
    const e = req.body.password;

    
    conn.query(`UPDATE persondetails SET age = ${b}, mobno=${c}, name="${a}", password="${e}"
     where email ="${d}"`,(err,result)=>{
         if(err){
             res.send({
                 code:400,
                 message:err
             })
         }
         else {
            console.log("updated")
             conn.query("select * from persondetails",(err,result)=>{
                 if(err){
                     res.send({
                         code:400,
                         message:result
                     })
                 }
             
             res.send({
                 
                 code:200,
                 message:result
             })
            })
         }
     })
})
app.delete("/delete/data",(req,res)=>{
    const a = req.body.name
    conn.query(`delete from persondetails where name="${a}"`,(err,result)=>{
        if(err){
            res.send({
                code:400,
                message:err
            })
        }
        else{
            conn.query(`select * from persondetails`,(err,result)=>{
                console.log("delete")
                res.send({
                    code:200,
                    message:result
                })
            })
        }
    })
})


app.listen(4500,()=>{
    console.log("node")
})