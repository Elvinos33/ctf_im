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
      image: taskCardProps.url,
    }
    modalStore.trigger(taskModal)
  }
</script>

<button on:click={triggerModal} class="w-[20rem] m-2 card rounded p-5 flex justify-between">
  <p>{taskCardProps.title}</p>
  <p class="opacity-50">{taskCardProps.points}</p>
</button>
