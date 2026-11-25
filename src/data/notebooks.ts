import mockNotebooks from '@/data/notebooks.mock.json'

type Cluster = {
  slug: string
  name: string
  color: string
}

export type Notebook = {
  slug: string
  name: string
  noteCount: number
  clusters: Cluster[]
}

const notebooks: Notebook[] = mockNotebooks

export const getNotebooks = async () => notebooks
