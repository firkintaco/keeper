import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
//import notes from "../notes";
import CreateArea from "./CreateArea";

const siteName = "kEEp";

export default function App() {
  const [notes, setNotes] = useState([]);
  function AddNote(note) {
    setNotes((prev) => {
      return [...prev, note];
    });
    console.log(note, notes);
  }
  function deleteNote(id) {
    setNotes((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  }
  return (
    <div>
      <Header siteName={siteName} />
      <CreateArea onAdd={AddNote} />
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          name={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

//1. Create a new React app.
//2. Create a App.jsx component.
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.
