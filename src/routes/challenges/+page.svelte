<script lang="ts">
  import TaskCard from '../../components/TaskCard.svelte';
  import type { OrganizedType } from '$lib/types'
  import TaskContainer from '../../components/TaskContainer.svelte';
  import CreateChallenge from '../../components/createChallenge.svelte';
  import { tasks } from '$lib/stores'

  export let data;

  let organizedTasks: Array<OrganizedType> = []

  $tasks = data.tasks.map((task) => {
    return task.title
  })

  data.tasks.forEach(task => {
    const {type, ...taskData} = task;


    const existingGroup = organizedTasks.find(group => group.type === type);

    if (existingGroup) {
      existingGroup.items.push(taskData);
    } else {
      organizedTasks.push({type: type, items: [taskData] })
    }
  })

  console.log(organizedTasks)
</script>

<div class="flex flex-col items-center">
  <div class="flex items-center">
    <h2 class="h2 flex-1 font-bold m-5">CHALLENGES</h2>
    <CreateChallenge />
  </div>
  {#each organizedTasks as typeTasks}
    <TaskContainer taskContainerProps={typeTasks} />
  {/each}

</div>
