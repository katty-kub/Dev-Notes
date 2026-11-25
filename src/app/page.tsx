import { Container } from '@/components/Container'
import { NotebookCard } from '@/components/NotebookCard'
import { getNotebooks } from '@/data/notebooks'

const Home = async () => {
  const notebooks = await getNotebooks()

  return (
    <Container>
      <div className="py-7 md:py-14">
        <h1 className="mb-4 text-xs font-bold tracking-widest text-muted uppercase md:mb-6">
          Notebooks
        </h1>
        {notebooks.length > 0 ? (
          <ul className="grid gap-5 lg:grid-cols-3">
            {notebooks.map((notebook) => (
              <li key={notebook.slug}>
                <NotebookCard notebook={notebook} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted">Zatím tu není žádný sešit.</p>
        )}
      </div>
    </Container>
  )
}

export default Home
