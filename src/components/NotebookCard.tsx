import type { Notebook } from '@/data/notebooks'
import { pluralize } from '@/lib/pluralize'

const NOTE_FORMS = { one: 'poznámka', few: 'poznámky', other: 'poznámek' }
const CLUSTER_FORMS = { one: 'okruh', few: 'okruhy', other: 'okruhů' }

const CLUSTER_COLORS: Record<string, string> = {
  blue: 'bg-cluster-blue',
  cyan: 'bg-cluster-cyan',
  green: 'bg-cluster-green',
  orange: 'bg-cluster-orange',
  pink: 'bg-cluster-pink',
  red: 'bg-cluster-red',
  violet: 'bg-cluster-violet',
  yellow: 'bg-cluster-yellow',
}

type NotebookCardProps = {
  notebook: Notebook
}

export const NotebookCard = ({ notebook }: NotebookCardProps) => {
  const { name, noteCount, clusters } = notebook

  return (
    <article className="flex h-full flex-col gap-4.5 rounded-3xl border bg-surface px-7 pt-7 pb-5">
      <h2 className="text-2xl font-bold tracking-tight">{name}</h2>
      <ul className="grid gap-2 text-muted">
        {clusters.map((cluster) => (
          <li key={cluster.slug} className="flex min-w-0 items-center gap-2.5">
            <span
              aria-hidden="true"
              className={`size-2 shrink-0 rounded-full ${CLUSTER_COLORS[cluster.color]}`}
            />
            <span className="truncate">{cluster.name}</span>
          </li>
        ))}
      </ul>
      <p className="mt-auto border-t pt-5 text-muted">
        {pluralize(noteCount, NOTE_FORMS)} · {pluralize(clusters.length, CLUSTER_FORMS)}
      </p>
    </article>
  )
}
