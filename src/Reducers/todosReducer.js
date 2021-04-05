import { ADD_TASK, DONE_TASK, UNDONE_TASK , RESET } from "../Constants/action-types";
import { TOGGLE_TASK } from "../Constants/action-types";
import { EDIT_TASK } from "../Constants/action-types";

const initialState = {
  todos: [
    {
      id: Math.random(),
      task: "Climb Mountain Everest",
      isDone: false,
    },
    {
      id: Math.random(),
      task: "Swim in the Great Barrier Reef",
      isDone: false,
    },
    {
      id: Math.random(),
      task: "Go to Hawaii",
      isDone: false,
    },
    {
      id: Math.random(),
      task: "Visit the great wall of china",
      isDone: false,
    },
  ],
};

export default function todosReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK: {
      return {
        todos: [
          ...state.todos,
          { id: Math.random(), task: payload.newTask, isDone: false },
        ],
      };
    }
    case TOGGLE_TASK: {
      return {
        todos: state.todos.map((task) =>
          task.id === payload.id ? { ...task, isDone: !task.isDone } : task
        ),
      };
    }
    case EDIT_TASK : {
      return {
        todos: state.todos.map((task)=>
        task.id === payload.id ? {...task, task : payload.todo} : task
        )
      }
    }
    case DONE_TASK : {
      return {
        todos: state.todos.filter(task => task.isDone == true)
      }
    }
    case UNDONE_TASK : {
      return {
        todos: state.todos.filter(task => task.isDone == false)
      }
    }
    case RESET : {
      return {
        todos: state.todos.filter(task => task.isDone == false && task.isDone == true)
      }
    }
    default:
      return state;
  }
}
