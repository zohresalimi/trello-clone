<template>
  <div class="board">
    <div class="flex flex-row item-start">
      <div
        class="column"
        v-for="(column, $columnIndex) of board.columns"
        :key="$columnIndex"
      >
        <div class="flex items-center mb-2 font-bold">
          {{ column.name }}
        </div>
        <div class="list-reset">
          <div
            class="task"
            v-for="(task, $taskIndex) of column.tasks"
            :key="$taskIndex"
          >
            <span class="w-full flex-no-shrink font-bold">
              {{ task.name }}
            </span>
            <p
              v-if="task.description"
              class="w-full flex-no-shrink mt-1 text-sm"
            >
              {{ task.description }}
            </p>
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
  @apply p-4 bg-green-300 h-full overflow-auto;
}

.column {
  @apply bg-gray-200 p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
}
.task {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-gray-900 no-underline;
}
</style>
