import type { Note } from '../types/note'

export const initialNotes: Note[] = [
  {
    id: '1',
    title: 'React useState',
    content: 'useState je Hook, který přidává stav do funkční komponenty.',
    category: 'React',
    favorite: true,
    createdAt: '2026-06-13',
  },
  {
    id: '2',
    title: 'Props v komponentách',
    content: 'Props předávají data z rodičovské komponenty do potomka.',
    category: 'React',
    favorite: false,
    createdAt: '2026-06-12',
  },
  {
    id: '3',
    title: 'async/await',
    content: 'async funkce vždy vrací Promise, await počká na výsledek.',
    category: 'JavaScript',
    favorite: false,
    createdAt: '2026-06-11',
  },
  {
    id: '4',
    title: 'Git příkazy',
    content: 'git add, git commit -m "zpráva", git push.',
    category: 'Git',
    favorite: true,
    createdAt: '2026-06-10',
  },
]