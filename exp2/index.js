const express=require('express')
const app=express()

const port=process.env.PORT||8080;
app.use(express.json())
app.get('/',(req,res)=>{
    res.send(  {
        "results": [
        "Rajesh",
        "Ramesh",
        "Sayali",
        "Sanjana"
        ]
       })

})

app.listen(port,()=>{
    console.log(`Your port is sucessfully connect on ${port}`);
})
