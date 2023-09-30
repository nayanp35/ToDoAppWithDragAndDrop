import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: string;
  description: string;
  category: 'todo' | 'inProgress' | 'done';
}

const initialState = localStorage.getItem('todo')
  ? JSON.parse(localStorage.getItem('todo')!)
  : ([] as Todo[]);

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.push(action.payload);
      localStorage.setItem('todo', JSON.stringify(state));
    },
    removeTodo(state, action: PayloadAction<string>) {
      const index = state.findIndex((todo: Todo) => todo.id === action.payload);
      state.splice(index, 1);
      localStorage.setItem('todo', JSON.stringify(state));
    },
    setTodo(
      state,
      action: PayloadAction<{
        category: 'todo' | 'inProgress' | 'done';
        id: string;
      }>
    ) {
      const index = state.findIndex(
        (todo: Todo) => todo.id === action.payload.id
      );
      state[index].category = action.payload.category;
      localStorage.setItem('todo', JSON.stringify(state));
    },
  },
});

export const { addTodo, removeTodo, setTodo } = todoSlice.actions;
export default todoSlice.reducer;
