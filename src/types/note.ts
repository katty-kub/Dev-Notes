export type Category = 'React' | 'JavaScript' | 'Node.js' | 'PostgreSQL' | 'Git' | 'Osobní'

export type Note =  {
    id: string
    title: string
    content: string
    favorite: boolean
    createdAt: string
    category: Category
}
