const express= require('express')
const app =express();

app.get('/',(req,res)=>{
    res.send("Hello, This is the home page")
})
app.get('/about',(req,res)=>{
    res.send("Hello, This is the about page" + ` Hey ${req.query.name}` + ' you are ' + req.query.age)
})

//const server=http.createServer(app)

//we don't even need http

//server.listen(67,()=>{
//    console.log("Serevr is listening to port 67")
//})

app.listen(67,()=>{
    console.log("App is listening on port 67")
})