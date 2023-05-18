import React, { useState } from "react";

export default function CreateArea({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <form action="">
      <input
        value={title}
        type="text"
        name="title"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={content}
        name="content"
        placeholder="Take a note..."
        rows="3"
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={(e) => {
          onAddNote(title, content);
          e.preventDefault();
          setTitle("");
          setContent("");
        }}
      >
        Add
      </button>
    </form>
  );
}
