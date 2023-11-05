<script lang="ts">
	import '../app.postcss';
	import { AppShell, type ModalComponent } from '@skeletonlabs/skeleton';
  import Header from "../components/header.svelte"
  import { initializeStores, Modal } from '@skeletonlabs/skeleton';
  import Task from '../components/modals/Task.svelte';

  initializeStores();

  const modalRegistry: Record<string, ModalComponent> = {
    taskModal: { ref: Task }
  }

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<Modal components={modalRegistry} />

<!-- App Shell -->
<AppShell>
  <svelte:fragment slot="header">
    <Header/>
  </svelte:fragment>
  <slot />
</AppShell>
