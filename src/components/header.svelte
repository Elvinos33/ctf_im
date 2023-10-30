<script>
  import { AppBar } from "@skeletonlabs/skeleton";
</script>

<AppBar gridColumns="grid-cols-2" slotDefault="place-self-start" slotTrail="place-content-end">
  <h1 class="h1 font-bold">CTF_IM</h1>
  <svelte:fragment slot="trail">
    <button class="hover:border-b-2">Challenges</button>
    <button class="hover:border-b-2">Scoreboard</button>
    <button class="btn variant-ghost-primary rounded">Login</button>
    <button class="btn variant-ghost-primary rounded">Create Account</button>
  </svelte:fragment>
</AppBar>
