import { initialNotes } from './data/initialNotes'
import NotesList from './components/NotesList'

function App() {
  return (
    <div>
      <h1>DevNotes</h1>
      <p>Poznámkovník pro učení programování</p>

      <NotesList notes={initialNotes} />
    </div>
  )
}

export default App