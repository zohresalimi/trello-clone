import { uuid } from "./utils";

export default {
  name: "workshop",
  columns: [
    {
      name: "todo",
      task: [
        {
          description: "",
          name: "first task",
          id: uuid(),
          userAssined: null
        },
        {
          description: "",
          name: "second task",
          id: uuid(),
          userAssined: null
        },
        {
          description: "",
          name: "third task",
          id: uuid(),
          userAssined: null
        }
      ]
    },
    {
      name: "in-progress",
      task: [
        {
          description: "",
          name: "first task",
          id: uuid(),
          userAssined: null
        }
      ]
    },
    {
      name: "done",
      task: [
        {
          description: "",
          name: "first task",
          id: uuid(),
          userAssined: null
        }
      ]
    }
  ]
};
