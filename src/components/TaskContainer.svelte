<script lang="ts">
  import TaskCard from "./TaskCard.svelte";
  import type { OrganizedType } from "$lib/types";
  import Icon from '@iconify/svelte';

  export let taskContainerProps: OrganizedType;

  let hidden = true
</script>


<div class="flex flex-col w-[320px] md:w-[648px] lg:w-[976px] items-start">
  <div class="my-2 flex items-center px-2 px-2 w-full card rounded variant-ghost">
    <button on:click={() => hidden = !hidden} class="text-start h4 flex-1 font-bold m-3">{taskContainerProps.type.toUpperCase()}</button>
    <Icon class="text-primary-500" icon="{hidden ? 'ep:arrow-down' : 'ep:arrow-up'}" />
  </div>
  {#if !hidden}
    <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {#each taskContainerProps.items as task}
        <TaskCard taskCardProps={task} />
      {/each}
    </div>
  {/if}

</div>
