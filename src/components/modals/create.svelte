<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import { getModalStore, getToastStore } from "@skeletonlabs/skeleton";
  import type { ToastSettings } from "@skeletonlabs/skeleton";
  import { tasks } from "$lib/stores";

  const modalStore = getModalStore();
  const toastStore = getToastStore();
  export let parent: SvelteComponent;

  let title: string = ''
  let content: string = ''
  let points: number = 500
  let url: string = ''
  let category: string = ''
  let solution: string = ''

  function toast(message: string, type: string) {
    const toast: ToastSettings = {
      message: message,
      background: `variant-filled-${type}`,
    }
    toastStore.trigger(toast)
  }

  async function createTask() {
      const requestData = {
        title: title,
        content: content,
        url: url,
        solution: solution,
        type: category,
        points: points
      }

      if ($tasks.includes(requestData.title)) {
        toast("Task already completed", "error")
        return
      }
      let response = await fetch("/challenges/create", {
        method: 'POST',
        body: JSON.stringify({requestData}),
				headers: {
					'Content-Type': 'application/json'
				}
      })
      const { message } = await response.json()
      console.log(response)
      if (response.status === 200) {
        toast(message, "success")
      } else {
        toast(message, "error")
      }
    }


</script>

{#if $modalStore[0]}
  <div class="card p-5 rounded space-y-4">
    <h4 class="w-full text-center h4 font-bold">CREATE A CHALLENGE</h4>
    <form class="space-y-2" on:submit={createTask} action="">
      <label for="Title">Task Title*</label>
      <input bind:value={title} class="rounded input variant-ghost" type="text" name="Title" placeholder="Title...">
      <label for="Content">Task Description*</label>
      <textarea bind:value={content} class="rounded input variant-ghost resize-none" name="Content" placeholder="Content..."/>
      <label for="Type">Category*</label>
      <input bind:value={category} class="rounded input variant-ghost" type="text" name="Type" placeholder="Category...">
      <label for="Points">Points*</label>
      <input bind:value={points} class="rounded input variant-ghost" type="number" name="Points" placeholder="Points...">
      <label for="URL">URL</label>
      <input bind:value={url} class="rounded input variant-ghost" type="url" name="URL" placeholder="URL">
      <label for="Solution">Flag*</label>
      <input bind:value={solution} class="rounded input variant-ghost" type="text" name="Solution" placeholder="Flag...">
      <button class="rounded btn variant-filled-primary">Create</button>
    </form>
    <button on:click={parent.onClose} class="rounded btn variant-filled-error">Close</button>
  </div>
{/if}
