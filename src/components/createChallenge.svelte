<script lang="ts">
  import { getModalStore,  type ModalSettings } from "@skeletonlabs/skeleton";

  const modalStore = getModalStore();
  
  function triggerModal() {
    const createModal: ModalSettings = {
      type: 'component',
      component: "createChallenge",
    }
    modalStore.trigger(createModal)
  }
  
</script>

<button on:click={triggerModal} class="py-3 h-fit btn variant-filled-primary rounded">
  Create
</button>
