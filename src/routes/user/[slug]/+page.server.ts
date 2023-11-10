import { error } from "@sveltejs/kit";
import prisma from "$lib/prisma";

export async function load({ params }) {
  const user = await prisma.user.findFirst({
    where: {
      username: params.slug
    }
  })


  if (!user) throw error(404);

  return user
}
