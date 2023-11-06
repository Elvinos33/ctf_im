<script lang="ts">
  import { AppBar } from "@skeletonlabs/skeleton";
  import { page } from "$app/stores";
  import { signIn } from "@auth/sveltekit/client"
  import UserDropdown from "./UserDropdown.svelte";

</script>

<AppBar gridColumns="grid-cols-2" slotDefault="place-self-start" slotTrail="place-content-end">
  <a href="/" class="h2 font-bold">CTF</a>
  <svelte:fragment slot="trail">
    <a href="/challenges" class="hover:border-b-2">Challenges</a>
    <a href="/scoreboard" class="hover:border-b-2">Scoreboard</a>
    {#if $page.data.session?.user}
      <UserDropdown />
    {:else}
      <button on:click={() => signIn('github')} class="btn variant-filled-primary rounded">Sign in</button>
    {/if}
 </svelte:fragment>
</AppBar>
