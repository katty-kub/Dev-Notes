
import type { Note } from '../types/note'
import NoteCard from './NoteCard'

type NotesListProps = {
  notes: Note[]
}

function NotesList({ notes }: NotesListProps) {
  return (
    <section>
      <h2>Moje poznámky</h2>
      <ul>
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </ul>
    </section>
  )
}

export default NotesList