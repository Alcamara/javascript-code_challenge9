const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
const impl = require('./implementation/to-do')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log(`listening on localhost:5000`)
})

app.get("/", (req, res) => {
    res.send('hello world')
})

app.get("/todos", (req, res) => {
    const list = impl.getListItem()
    res.send(list)
})

app.post("/todos", (req, res) => {
    const { id, note, isComplete  } = req.body
    const statusCode = impl.addListItem(id, note, isComplete)
    res.sendStatus(statusCode)
})

