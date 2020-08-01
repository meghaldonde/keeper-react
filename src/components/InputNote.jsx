import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function InputNote(props) {
  const [note, setNote] = useState({ key: "", title: "", content: "" });
  const [isExpanded, setExpanded] = useState(false);

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

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={saveNoteState}
            placeholder="Title"
            value={note.title}
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={saveNoteState}
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          value={note.content}
        />
        <Zoom in={isExpanded}>
          <Fab
            onClick={(event) => {
              props.addNote(note);
              setNote({ key: "", title: "", content: "" });
              event.preventDefault();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default InputNote;
