const express= require('express')
const http=require('http')
const app =express();

app.get('/',(req,res)=>{
    res.send("Hello, This is the home page")
})
app.get('/home',(req,res)=>{
    res.send("Hello, This is the about page")
})

const server=http.createServer(app)

server.listen(67,()=>{
    console.log("Serevr is listening to port 67")
})
