const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get("/",(req, res) =>{
    res.send("Hello World")
})

app.get("/todo", (req, res) =>(
    res.send(["Run", "Shopping", "Do dishes", "Cut Grass"])
))

app.listen(PORT, () =>{
    console.log("Listening on Port 3000")
})