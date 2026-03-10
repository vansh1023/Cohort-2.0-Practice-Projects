const express = require('express');

const app = express();

app.use(express.json());

const notes = [
    
]

app.get('/', (req, res) => {
    // console.log(req);
    res.send("home");
})


app.post('/notes', (req, res) => {
    console.log(req.body);
    let newnotes = [...notes, ...req.body];
    notes.push(newnotes);
    res.send("note created");
})

app.get('/notes', (req, res) => {
    res.send(notes);
})

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});