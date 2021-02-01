import { uuid } from "./utils";

export default {
  name: "workshop",
  columns: [
    {
      name: "todo",
      tasks: [
        {
          description: "",
          name: "first tasks",
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
      tasks: [
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
      tasks: [
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
