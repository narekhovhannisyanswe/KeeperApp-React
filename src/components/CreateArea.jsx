import React from "react";

export default function CreateArea() {
    return (
        <form action="">
            <input type="text" name="title" placeholder="Title" />
            <textarea name="content" placeholder="Take a note..." rows="3" />
            <button>Add</button>
        </form>
    )
}