const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;



app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log(`listening on localhost:5000`)
})

app.get("/", (req, res) => {
    res.send('hello world')
})