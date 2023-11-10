<script lang="ts">
  import type { scoreboardType } from "$lib/types"

  export let scoreboardProps: Array<scoreboardType>;
</script>

<div class="table-container mt-5 w-3/4 md:w-1/2 rounded ">
  <table class="table rounded" >
    <thead>
      <tr>
        <th>User</th>
        <th>Points</th>
      </tr>
    </thead>
    <tbody>
      {#each scoreboardProps as user }
        <tr>
          <a class="p-3 table-cell" href="/user/{user.username}">{user.username}</a>
          <a class="p-3 table-cell" href="/user/{user.username}">{user.points}</a>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
