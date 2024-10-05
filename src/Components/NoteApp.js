import React, { useState } from "react";
import "./NoteApp.css"; // Optional CSS for styling

function NoteApp() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");

  // Add new note
  const addNote = () => {
    if (noteText.trim()) {
      setNotes([...notes, noteText]);
      setNoteText(""); // Clear input
    }
  };

  // Delete a note
  const deleteNote = (index) => {
    const updatedNotes = notes.filter((note, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="note-app">
      <h1>Note App</h1>

      {/* Input area to add a new note */}
      <div className="note-input">
        <input
          type="text"
          placeholder="Write a note..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button onClick={addNote}>Add Note</button>
      </div>

      {/* Display the list of notes */}
      <ul className="note-list">
        {notes.map((note, index) => (
          <li key={index} className="note-item">
            {note}
            <button onClick={() => deleteNote(index)} className="delete-btn">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteApp;

//css
.note-app {
  width: 300px;
  margin: 50px auto;
  text-align: center;
  font-family: Arial, sans-serif;
}

.note-input {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.note-input input {
  width: 70%;
  padding: 8px;
  font-size: 16px;
}

.note-input button {
  width: 25%;
  padding: 8px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

.note-input button:hover {
  background-color: #45a049;
}

.note-list {
  list-style-type: none;
  padding: 0;
}

.note-item {
  background-color: #f9f9f9;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.delete-btn {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: #d32f2f;
}
