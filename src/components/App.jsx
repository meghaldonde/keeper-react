import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import InputNote from "./InputNote";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    console.log("delete func  id:" + id);
    setNotes((prevNotes) => {
      return prevNotes.filter((newNote) => {
        return newNote.id !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <InputNote addNote={addNote} />

      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          handleDelete={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
