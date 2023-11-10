<script>
  export let data;
</script>

<div class="p-5">
  <div class="flex flex-col gap-5 items-center">
    <div class="flex flex-col gap-5 items-center">
      <h1 class="h1 font-bold">{data.username}</h1>
      <h4 class="h4 font-extralight opacity-50">Points: {data.points}</h4>
      <div class="flex flex-col items-center gap-10 card rounded p-5">
        <h3 class="h3">COMPLETED TASKS</h3>
        {#if data.completed.length > 0}
          {#each data.completed as task}
            <p class="font-extralight">{task}</p>
          {/each}
            <div class="flex gap-2">
              <p class="font-bold">Total Tasks Solved:</p>
              <p class="font-extrabold">{data.completed.length}</p>
            </div>
        {:else}
          <p>No tasks completed yet</p>
        {/if}
      </div>
    </div>
  </div>
 </div>
