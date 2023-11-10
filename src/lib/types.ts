export type TaskCardProps = {
  title: string
  content: string
  url: string
  points: number
  solution: string
  id: number
}

export type OrganizedType = {
  type: string
  items: Array<TaskCardProps>
}

export type answerType = {
  username: string
  task: number
} 

export type scoreboardType = {
  username: string
  points: number
}
