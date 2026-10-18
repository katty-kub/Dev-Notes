import type { Note } from '../types/note'

type NoteCardProps = {
  note: Note
}

function NoteCard({ note }: NoteCardProps) {
  return (
    <li>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <small>
        {note.category} • {note.createdAt}
      </small>
    </li>
  )
}

export default NoteCard