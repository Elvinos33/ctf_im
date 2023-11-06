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

<button class="rounded-full w-fit h-fit" use:popup={popupUser}>
  <img src="{$page.data.session?.user ? $page.data.session.user.image : ''}" alt="Profile Picture" width="32" height="32" class="rounded-full"/>
</button>

<div class="card rounded" data-popup="popupUser">
  <div class="arrow" />
  <a class="btn rounded-t rounded-b-none" href="/account">Account</a>
  <button class="btn rounded-b rounded-t-none" on:click={signOut}>Sign Out</button>
</div>
