<script lang="ts">
  import { getModalStore, type ModalSettings } from "@skeletonlabs/skeleton";
  import type { TaskCardProps } from "$lib/types"

  const modalStore = getModalStore();

  export let taskCardProps: TaskCardProps

  function triggerModal() {
    const taskModal: ModalSettings = {
      type: 'component',
      component: 'taskModal',
      title: taskCardProps.title,
      body: taskCardProps.content,
      meta: {points: taskCardProps.points, url: taskCardProps.url, solution: taskCardProps.solution, id: taskCardProps.id}
    }
    modalStore.trigger(taskModal)
  }
</script>

<button on:click={triggerModal} class="w-[20rem] card rounded p-5 flex justify-between">
  <p>{taskCardProps.title}</p>
  <p class="opacity-50">{taskCardProps.points}</p>
</button>
