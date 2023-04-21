import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [clicked, setClicked] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
        id: crypto.randomUUID(),
      };
    });
  }

  function handle() {
    setClicked(true);
  }
  return (
    <div>
      <form className="create-note">
        {clicked && (
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={note.title}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={!clicked ? "1" : "4"}
          onChange={handleChange}
          value={note.content}
          onClick={handle}
        />
        <Zoom in={clicked}>
          <Fab
            style={{ visibility: !clicked ? "hidden" : null }}
            size="small"
            onClick={(event) => {
              event.preventDefault();
              props.onAdd(note);
              setNote({ title: "", content: "", id: "" });
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.
