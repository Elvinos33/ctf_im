export type TaskCardProps = {
  title: string
  content: string
  url: string
  points: number
}

export type OrganizedType = {
  type: string
  items: Array<TaskCardProps>
}
