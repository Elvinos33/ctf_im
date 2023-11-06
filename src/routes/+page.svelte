<script lang="ts">
  import TaskCard from "../components/TaskCard.svelte";
  import type { TaskCardProps } from "$lib/types";

  let taskCardProps: TaskCardProps = {
    title: "I can't find my table!",
    content: "Please help find my tableeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    points: 230,
    url: 'https://youtube.com',
  }
</script>

<div>
  <TaskCard taskCardProps={taskCardProps} />
</div>
