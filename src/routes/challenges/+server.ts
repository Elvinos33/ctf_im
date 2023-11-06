import prisma from "$lib/prisma";
import { completedTasks } from "$lib/stores";

export async function POST({ request }) {
  const { requestData } = await request.json();

  // Retrieve the current user to check the 'completed' array
  const user = await prisma.user.findUnique({
    where: {
      username: requestData.username,
    }
  });

  // If the user doesn't exist, handle it accordingly (e.g., throw an error or return a response)
  if (!user) {
    // Handle user not found situation
    return new Response(JSON.stringify({ message: 'User not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Check if the task is not already in the 'completed' array
  if (!user.completed.includes(requestData.task)) {
    // Task is not in the 'completed' array, update the user
    await prisma.user.update({
      where: {
        username: requestData.username,
      },
      data: {
        completed: {
          push: requestData.task,
        },
        // Assuming you also want to increment points only if the task wasn't completed before
        points: {
          increment: requestData.points,
        },
      },
    });

    await prisma.task.update({
      where: {
        title: requestData.task
      },
      data: {
        completed: {
          push: requestData.username
        }
      }
    })

    // Return a success response
    return new Response(JSON.stringify({ message: 'Task added to completed' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } else {
    // Task is already in the 'completed' array, do not update
    // Return an appropriate response indicating no update was necessary
    return new Response(JSON.stringify({ message: 'Task already completed' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

