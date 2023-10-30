<script lang="ts">
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
  import Header from "../components/header.svelte"
  import { initializeStores, Modal } from '@skeletonlabs/skeleton';

  initializeStores();

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<Modal  />

<!-- App Shell -->
<AppShell>
  <svelte:fragment slot="header">
    <Header/>
  </svelte:fragment>
  <slot />
</AppShell>
