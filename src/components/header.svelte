<script lang="ts">
  import { AppBar } from "@skeletonlabs/skeleton";
  import { page } from "$app/stores";
  import { signIn, signOut } from "@auth/sveltekit/client"

  let user: string = "Not Logged in"

  $: console.log($page.data.session?.user)

  $: if ($page.data.session?.user) {
    user = $page.data.session.user.name
  }
</script>

<AppBar gridColumns="grid-cols-2" slotDefault="place-self-start" slotTrail="place-content-end">
  <h2 class="h2 font-bold">{user}</h2>
  <svelte:fragment slot="trail">
    <button class="hover:border-b-2">Challenges</button>
    <button class="hover:border-b-2">Scoreboard</button>
    <button on:click={() => signIn('github')} class="btn variant-ghost-primary rounded">Login</button>
    <button on:click={signOut} class="btn variant-ghost-primary rounded">Create Account</button>
  </svelte:fragment>
</AppBar>
