import prisma from "$lib/prisma";

export async function POST({ request }) {
  const { requestData } = await request.json();

  // Retrieve the current user to check the 'completed' array
  const task = await prisma.task.findFirst({
    where: {
      title: requestData.title,
    }
  });


  // Check if the task is not already in the 'completed' array
  if (!task) {
   await prisma.task.create({
      data: {
        title: requestData.title,
        content: requestData.content,
        url: requestData.url,
        solution: requestData.solution,
        completed: [],
        type: requestData.type,
        points: requestData.points
      },
    })

    // Return a success response
    return new Response(JSON.stringify({ message: 'Task completed' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } else {
    // Task is already in the 'completed' array, do not update
    // Return an appropriate response indicating no update was necessary
    return new Response(JSON.stringify({ message: 'Task already exists' }), {
      status: 403,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

