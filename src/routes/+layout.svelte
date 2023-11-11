<script lang="ts">
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
  import type { ModalComponent } from '@skeletonlabs/skeleton';
  import Header from "../components/header.svelte"
  import { initializeStores, Modal } from '@skeletonlabs/skeleton';
  import Task from '../components/modals/Task.svelte';
  import Create from '../components/modals/create.svelte';
  import prisma from '$lib/prisma';
  import { Toast } from '@skeletonlabs/skeleton';

  initializeStores();

  const modalRegistry: Record<string, ModalComponent> = {
    taskModal: { ref: Task },
    createChallenge: { ref: Create }
  }


	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
  import { page } from '$app/stores';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

  async function checkForUser() {
    if ($page.data.session?.user) {
      let user = await prisma.user.findFirst({
        where: {
          username: $page.data.session.user.name
        }
      })

      if (!user) {
        await prisma.user.create({
          data: {
            username: $page.data.session.user.name,
            points: 0,
            completed: [],
            isAdmin: false
          }
        })  
      }
    }
  }

  checkForUser()
</script>

<Toast zIndex={"z-[2000]"} />

<Modal components={modalRegistry} />

<!-- App Shell -->
<AppShell>
  <svelte:fragment slot="header">
    <Header/>
  </svelte:fragment>
  <slot />
</AppShell>
