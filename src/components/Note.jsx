import React from 'react';

function Note({ title, content, onDeleteNote, uuid }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => onDeleteNote(uuid)}>DELETE</button>
    </div>
  );
}

export default Note;
