<template>
  <div class="board">
    <div class="flex flex-row item-start">
      <div class="column" v-for="column of board.columns" :key="column.name">
        <div class="flex items-center mb-2 font-bold">
          {{ column.name }}
        </div>
        <div class="list-reset">
          <div class="task" v-for="task of column.tasks" :key="task.id">
            {{ task }}
          </div>
        </div>
      </div>
    </div>
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

.column {
  @apply bg-gray-300 p-2 mr-4 text-left shadow rounded;
}
.task{
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-gray-900 no-underline
}
</style>
