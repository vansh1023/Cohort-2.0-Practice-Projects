const express = require('express');

// Creating server instance
const app = express();


// Middlewares
app.use(express.json());



let notes = [];


// Home api
app.get('/', (req, res) => {
    res.send("home");
})



// Notes APIs


app.get('/notes', (req, res) => {
    res.send(notes);
})


app.post('/notes', (req, res) => {
    notes.push(req.body);
    res.send("note created");
})


app.patch('/notes/:idx', (req, res) => {
    let {idx} = req.params;
    let {description} = req.body;
    notes[idx].description =  description;
    res.send("updated");
})


app.put('/notes/:idx', (req, res) => {
    let {idx} = req.params;
    let {title, description, newbhai} = req.body;
    notes[idx].title =  title;
    notes[idx].description =  description;
    notes[idx].newbhai =  newbhai;
    res.send("updated");
})

app.delete('/notes/:idx', (req, res) => {
    let {idx} = req.params;
    delete notes[idx];
    res.send("note deleted");
})






// exports app module
module.exports = app;