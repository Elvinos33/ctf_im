<script lang="ts">
  import { popup } from "@skeletonlabs/skeleton";
  import type { PopupSettings } from "@skeletonlabs/skeleton";
  import { page } from "$app/stores";
  import { signOut } from "@auth/sveltekit/client";

  const popupUser: PopupSettings = {
    event: "click",
    target: "popupUser",
    placement: "bottom",
  }
</script>

<button use:popup={popupUser}>
  <img src="{$page.data.session?.user ? $page.data.session.user.image : ''}" alt="Profile Picture" width="32" height="32" class="rounded-full"/>
</button>

<div class="px-5 arrow card flex flex-col items-center rounded" data-popup="popupUser">
  <button class="btn" on:click={signOut}>Sign Out</button>
</div>
