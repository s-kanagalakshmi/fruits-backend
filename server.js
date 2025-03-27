const express=require("express")
const app=express()
const PORT=process.env.PORT||3000
app.listen(PORT,()=>{
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























// const express = require("express")
// const app = express()
// app.listen(5000, () => {
//     console.log("Server started")
// })
// const myname="Ishaan"
// const mypass="123"
// app.get("/name", (req, res) => {
//    const {username,password}=req.query
//     if(myname===username&&mypass===password)
//     {
//         res.send("Login Successful")
//     }
//     else{
//         res.send("Login Failed")
//     }
// })
// app.post("/name", (req, res) => {
//     res.send("My name is Kanagalakshmi /post")
// })
// app.get("/age", (req, res) => {
//     res.send("My age is 34")
// })
// app.get("/address", (req, res) => {
//     res.send("My address is chennai")
// })
// app.get("/", (req, res) => {
//     res.send("Please pass the params")
// })