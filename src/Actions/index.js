import { ADD_TASK, DONE_TASK , UNDONE_TASK } from "../Constants/action-types";
import { TOGGLE_TASK } from "../Constants/action-types";
import { EDIT_TASK } from "../Constants/action-types";

export const addTask = (payload) => {
  return {
    type: ADD_TASK,
    payload: payload,
  };
};
export const toggleTask = (payload) => {
  return {
    type: TOGGLE_TASK,
    payload: payload,
  };
};
export const editTask = (payload) => {
  return {
    type: EDIT_TASK,
    payload: payload,
  };
};
export const doneTask = (payload) => {
  return {
    type: DONE_TASK,
    payload: payload,
  };
};
export const undoneTask = (payload) => {
  return {
    type: UNDONE_TASK,
    payload: payload,
  };
};


