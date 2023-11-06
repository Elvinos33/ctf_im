<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import { getModalStore } from "@skeletonlabs/skeleton";
  import { page } from "$app/stores";
  import { signIn } from "@auth/sveltekit/client";
  import { completedTasks } from "$lib/stores"

  const modalStore = getModalStore();
  export let parent: SvelteComponent;

  let answer: string = ''

  console.log($completedTasks)

  async function submitAnswer(answer: string, solution: string) {
    const requestData = {
      username: $page.data.session.user.name,
      task: $modalStore[0].title,
      points: $modalStore[0].meta.points
    }

    if (answer === solution && answer.length > 0) {
      if ($completedTasks.includes(requestData.task)) {
        console.log("You have already answered this!")
        return
      }
      await fetch("/challenges", {
        method: 'POST',
        body: JSON.stringify({requestData})
      })
      $completedTasks.push(requestData.task)
    }
  }

</script>

{#if $modalStore[0]}
  <div class="card rounded p-5 w-[25rem] md:w-[40rem] space-y-4">
    <div class="flex justify-between">
      <h3 class="text-xl h3 line-clamp-2 font-bold">{$modalStore[0].title ?? 'Title Missing'}</h3>
      <p class="opacity-50">{$modalStore[0].meta.points}</p>
    </div>
    <p class="break-words">{$modalStore[0].body ?? 'Content Missing'}</p>
    {#if $modalStore[0].meta.url}
      <div class="card p-3 rounded w-fit">
        <p class="opacity-50 mb-2">Material</p>
        <a class="text-primary-300 hover:text-primary-500 hover:underline" href="{$modalStore[0].meta.url}">{$modalStore[0].meta.url}</a>
      </div>
    {/if}
    <form on:submit={() => submitAnswer(answer, $modalStore[0].meta.solution)} class="flex flex-col gap-2 justify-center" action="">
      {#if $page.data.session?.user}
        <input bind:value={answer} class="input rounded" type="text">
        <button class="btn variant-filled-primary rounded">Submit</button>
      {:else}
        <div class="input rounded p-3">You must be signed in to submit an answer</div>
        <button on:click={() => signIn('github')} class="btn variant-filled-primary rounded">Sign In</button>
      {/if}
    </form>
    <button class="btn variant-soft-error rounded w-full" on:click={parent.onClose}>Close</button>
  </div>
{/if}

