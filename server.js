const express=require("express")
const app=express()
app.listen(3000,()=>{
    console.log("Server started..")
})
const fruitsarray=[]
app.get("/name",(req,res)=>{
    console.log(req)
    fruitsarray.push(req.query.fruitname)
    console.log(fruitsarray)
    res.send(fruitsarray)
})
app.get("/",(req,res)=>{
    res.send(" Welcome")
})