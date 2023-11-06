<script lang="ts">
  import { page } from "$app/stores";
  import { signIn } from "@auth/sveltekit/client";
</script>

<div class="w-full h-full flex flex-col justify-center items-center">
  <h2 class="h2 text-center">Welcome to IM-ctf<h2>
  <div class="mt-10 flex justify-center gap-4">
    <a class="btn variant-filled-surface rounded" href="/challenges">Challenges</a>
    <a class="btn variant-filled-surface rounded" href="/scoreboard">Scoreboard</a>
  </div>
  {#if !$page.data.session?.user}
  <button on:click={() => signIn("github")} class="btn variant-filled-primary rounded">Sign In</button>
  {/if}
</div>
