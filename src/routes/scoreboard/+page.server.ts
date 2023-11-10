import prisma from "$lib/prisma";

export async function load() {
  const sortedUsers = await prisma.user.findMany({
    orderBy: {
      points: 'desc'
    }
  })

  console.log(sortedUsers[1])

  return {sortedUsers}
}
