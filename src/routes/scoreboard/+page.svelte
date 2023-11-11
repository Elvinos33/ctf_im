<script lang="ts">
  import Scoreboard from '../../components/scoreboard.svelte';

  export let data;
</script>

<div class="flex flex-col items-center w-full">
  <h2 class="h2 m-5 font-bold text-center">SCOREBOARD</h2>
  <Scoreboard scoreboardProps={data.sortedUsers} />
</div>
