


import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
}

interface TodoState {
    todos: Todo[];
    loading: boolean;
    error: string | null;
}

export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return response.data.slice(0, 10); 
});

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<Todo>) {
            state.todos.push(action.payload);
        },
        deleteTodo(state, action: PayloadAction<number>) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo(state, action: PayloadAction<number>) {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) todo.completed = !todo.completed;
        },
    },
    extraReducers: (builders) => {
        builders
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.todos = action.payload;
            })
            .addCase(fetchTodos.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to fetch todos.";
            });
    },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
