export type Task = {
    id: string
    name: string
    status: 'completed' | 'inprogress' | 'notstarted'
}