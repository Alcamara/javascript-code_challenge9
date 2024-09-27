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

app.get("/todos", (req, res) => {
    const list = impl.getListItem()
    res.send(list)
})

app.post("/todos", (req, res) => {
    const { id, note, isComplete  } = req.body
    const statusCode = impl.addListItem(id, note, isComplete)
    res.sendStatus(statusCode)
})

app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const statusCode = impl.deleteListItem(id)
    res.sendStatus(statusCode)
})

app.put('/todos/:id', (req, res) => {
   const id = parseInt(req.params.id);
   const { note, isComplete } = req.body;
   const statusCode = impl.updateListItem(id, note, isComplete);
   res.sendStatus(statusCode)
})

