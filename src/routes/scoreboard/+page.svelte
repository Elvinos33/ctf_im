<script lang="ts">
  export let data;
</script>

<div>
  {#each data.sortedUsers as user}
    <div>
      {user.username + user.points}
    </div>
  {/each}
</div>
