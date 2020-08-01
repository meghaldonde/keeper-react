import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function InputNote(props) {
  const [note, setNote] = useState({ key: "", title: "", content: "" });

  function saveNoteState(event) {
    const { name, value } = event.target;
    const id = uuidv4();

    if (name === "title") {
      setNote((prevNote) => {
        return { id: id, title: value, content: prevNote.content };
      });
    } else if (name === "content") {
      setNote((prevNote) => {
        return { id: id, title: prevNote.title, content: value };
      });
    }
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={saveNoteState}
          placeholder="Title"
          value={note.title}
        />
        <textarea
          name="content"
          onChange={saveNoteState}
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button
          onClick={(event) => {
            props.addNote(note);
            setNote({ key: "", title: "", content: "" });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default InputNote;
