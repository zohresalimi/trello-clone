import Vue from "vue";
import Vuex from "vuex";

import defaultBoard from "../default-board";
import { saveStatePlugin } from "../utils";

const localStorageString = process.env.VUE_APP_LOCAL_STORAGE_STRING;
const board =
  JSON.parse(localStorage.getItem(localStorageString)) || defaultBoard;
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    board,
  },
  mutations: {},
  getters: {
    getTask(state) {
      return (id) => {
        console.time("for loop");
        for (const column of state.board.columns) {
          for (const task of column.tasks) {
            if (task.id === id) return task;
          }
        }
        console.timeEnd("for loop");
      };
    },
  },
  actions: {},
  modules: {},
});
