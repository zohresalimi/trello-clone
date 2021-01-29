<template>
  <div class="board">
    {{ board }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["board"])
};
</script>
<style scoped lang="postcss">
.board {
  @apply p-4 bg-green-200 h-full overflow-auto;
}

.task-bg {
  @apply bg-blue-500 absolute;
  background: rgba(0, 0, 0, 0.5);
}
</style>
