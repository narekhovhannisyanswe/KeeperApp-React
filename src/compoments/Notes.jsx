import Note from "./Note";
import { notes } from "../notes";

const Notes = () => {
    return (
        <div>
            {notes.map((n) => {
                return <Note key={n.key} title={n.title} content={n.content} />
            })}
        </div>
    )
}

export default Notes;