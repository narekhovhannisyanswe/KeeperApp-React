import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { v4 as createUUID } from "uuid";

function App() {
  const [notes, setNotes] = useState([
    { title: "first title", content: "first content" },
  ]);

  function handleAddNote(title, content) {
    const uuid = createUUID();
    const newNote = { uuid, title, content };
    console.log(newNote);
    setNotes((notes) => [...notes, newNote]);
  }

  function handleDeleteNote(uuid) {
    console.log("delete the note with uuid:", uuid);
    setNotes((notes) => notes.filter((n) => n.uuid !== uuid));
  }

  return (
    <div>
      <Header />
      <CreateArea onAddNote={handleAddNote} />
      {notes.map((note) => {
        return (
          <Note
            key={note.uuid}
            uuid={note.uuid}
            title={note.title}
            content={note.content}
            onDeleteNote={handleDeleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
