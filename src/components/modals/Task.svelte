<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import { getModalStore } from "@skeletonlabs/skeleton";
  import { page } from "$app/stores";
  import { signIn } from "@auth/sveltekit/client";

  const modalStore = getModalStore();
  export let parent: SvelteComponent;

</script>

{#if $modalStore[0]}
  <div class="card rounded p-5 w-[25rem] md:w-[40rem] space-y-4">
    <h3 class="text-xl h3 line-clamp-2 font-bold">{$modalStore[0].title ?? 'Title Missing'}</h3>
    <p class="break-words">{$modalStore[0].body ?? 'Content Missing'}</p>
    {#if $modalStore[0].image}
      <div class="card p-3 rounded w-fit">
        <p class="opacity-50 mb-2">Material</p>
        <a class="text-primary-300 hover:text-primary-500 hover:underline" href="{$modalStore[0].image}">{$modalStore[0].image}</a>
      </div>
    {/if}
    <form class="flex flex-col gap-2 justify-center" action="">
      {#if $page.data.session?.user}
        <input class="input rounded" type="text">
        <button class="btn variant-filled-primary rounded">Submit</button>
      {:else}
        <div class="input rounded p-3">You must be signed in to submit an answer</div>
        <button on:click={() => signIn('github')} class="btn variant-filled-primary rounded">Sign In</button>
      {/if}
    </form>
    <button class="btn variant-soft-error rounded w-full" on:click={parent.onClose}>Close</button>
  </div>
{/if}

