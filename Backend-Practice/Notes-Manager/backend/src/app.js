const express = require('express');
const noteModel = require('./models/note.model.js');
const cors = require('cors');
const path = require('path');


const app = express();




// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("./public"))


// api's for notes manager




// post api
app.post('/api/notes', async (req, res) => {
    const {title, description} = req.body;
    const newNote = await noteModel.create({
        title,
        description
    });

    res.status(201).json({
        message: "note created successfully",
        newNote
    })
})




//get api
app.get('/api/notes', async (req, res) => {
    const notes = await noteModel.find();

    res.status(200).json({
        message: "notes fetched successfully",
        notes
    })
})





//update api
app.patch('/api/notes/:id', async (req, res) => {
    const {id} = req.params;
    const {title, description} = req.body;
    const note = await noteModel.findByIdAndUpdate(id, {title, description})

    res.status(200).json({note})
})





// delete api
app.delete('/api/notes/:id', async (req, res) => {
    const {id} = req.params;
    const note = await noteModel.findByIdAndDelete(id); 

    res.status(200).json({note});
})



app.use('*name', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})







module.exports = app;