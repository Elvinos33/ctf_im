import prisma from "$lib/prisma";

export async function load() {
  const tasks = await prisma.task.findMany()
  console.log(tasks)

  return {tasks}
}
