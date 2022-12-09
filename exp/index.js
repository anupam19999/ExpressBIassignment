const express=require("express")
const fs=require('fs')
const app=express()

app.use(express.json())
const port=process.env.PORT||8000;

app.get("/",(req,res)=>{
    res.send("Anupam")
})
app.post("/student",(req,res)=>{
  fs.writeFile('data.json',JSON.stringify(req.body),(err)=>{console.log(err)})
    res.send({
        "result": "Success"
       })
})

app.get('/details',(req,res)=>{ 
    (fs.readFile('data.json','utf8',function(err,data){
        console.log(data);
        res.send(data)
    }))

})

app.listen(port,()=>{
    console.log(`PORT is sucessfully running on ${port}`);
})