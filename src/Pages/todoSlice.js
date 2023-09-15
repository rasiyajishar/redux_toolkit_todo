import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.unshift(action.payload);
    },
    editTask: (state, action) => {
      const { index, updatedTask } = action.payload;
      state[index] = updatedTask;
    },
    deleteTask: (state, action) => {
      const index = action.payload;
      state.splice(index, 1);
    },
  },
});

export const { addTask, editTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
