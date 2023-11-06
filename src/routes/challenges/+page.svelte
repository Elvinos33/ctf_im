<script>
  import TaskCard from '../../components/TaskCard.svelte';

  export let data;

  console.log(data)
</script>

<div class="flex justify-center">
  <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
    {#each data.tasks as task}
      <TaskCard taskCardProps={task} />
    {/each}
  </div>

</div>
