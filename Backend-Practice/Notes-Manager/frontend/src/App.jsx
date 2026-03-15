import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [isUpdate, setIsUpdate] = useState(false)
  const [updateID, setUpdateID] = useState("")


  const fetchNotes = async () => {
    const allNotes = await axios.get('http://localhost:3000/api/notes');
    setNotes(allNotes.data.notes);
  }

  const deleteNote = async (id) => {
    await axios.delete(`http://localhost:3000/api/notes/${id}`)
    fetchNotes();
  }


  const clickUpdate = async (id, currTitle, currDescription) => {
    setTitle(currTitle);
    setDescription(currDescription);
    setIsUpdate(true);
    setUpdateID(id)
  }

  const updateNote = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:3000/api/notes/${updateID}`, {title, description})
    fetchNotes();
    setTitle("");
    setDescription("");
    setIsUpdate(false);
  }


  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/api/notes',{title, description});
    fetchNotes();
    setTitle("");
    setDescription("")
  }


  useEffect(() => {
    fetchNotes()
  }, [])
  


  return (
    <div>
      <form onSubmit={(e) => {isUpdate ? updateNote(e) : submitHandler(e)}} className='form'>
        <div className='input'>
          <input className='input1'
          value={title} 
          onChange={(e) => {setTitle(e.target.value)}}
          type="text" placeholder='Enter title'
          />
          <input className='input2'
          value={description} 
          onChange={(e) => {setDescription(e.target.value)}}
          type="text" placeholder='Enter description'
          />
        </div>
        <button>{isUpdate ? "Update Note" : "Create Note"}</button>
      </form>


      <div className='notes'>
        {
          notes.map(note => {
            return <div key={note._id} className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <div className='buttons'>
                <button onClick={() => {clickUpdate(note._id,note.title, note.description)}}>Update</button>
                <button onClick={() => {deleteNote(note._id)}}>delete</button>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default App