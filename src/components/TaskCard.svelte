<script lang="ts">
  import { getModalStore, type ModalSettings } from "@skeletonlabs/skeleton";

  const modalStore = getModalStore();

  function triggerModal() {
    const taskModal: ModalSettings = {
      type: 'component',
      component: 'taskModal',
      title: "I can't find my table",
      body: 'Please help find my table'
    }
    modalStore.trigger(taskModal)
  }
</script>

<button on:click={triggerModal} class="w-[20rem] m-2 card p-5 flex justify-between">
  <p>I can't find my table!</p>
  <p class="opacity-50">973</p>
</button>
