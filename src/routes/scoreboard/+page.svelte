<script lang="ts">
  import Scoreboard from '../../components/scoreboard.svelte';

  export let data;
</script>

<div class="flex flex-col my-4 items-center w-full">
  <h2 class="h2 text-center">SCOREBOARD</h2>
  <Scoreboard scoreboardProps={data.sortedUsers} />
</div>
