<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import { getModalStore } from "@skeletonlabs/skeleton";

  const modalStore = getModalStore();
  export let parent: SvelteComponent;

</script>

{#if $modalStore[0]}
  <div class="card p-5 space-y-4">
    <h3 class="text-xl h3 line-clamp-2 font-bold">{$modalStore[0].title ?? 'Title Missing'}</h3>
    
  </div>
{/if}

