// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface todoList {
//     id: number,
//     title: string,
//     completed: boolean,
//     userId: number
// }
// interface todoListState {
//     todos: todoList[];
//     loading: boolean;
//     error: string | null;
//     fetchTodos: () => Promise<void>;
//     addTodo: (title: string) => void;
//     toggleTodo: (id: number) => void;
//     deleteTodo: (id: number) => void;
// }
// const initialState: todoListState = {
//     todoList: []
// }
// export const todoSlice = createSlice({
//     name: 'todo',
//     initialState,
//     reducers: {
//         addTodo(state, action: PayloadAction<todoList>) {
//             state.todoList.push(action.payload);
//         },
//         deleteTodo(state, action: PayloadAction<number>) {
//             state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
//         },
//         updateTodo(state, action: PayloadAction<todoList>) {
//             const todo = state.todoList.find(todo => todo.id === action.payload.id);
//             if (todo) {
//                 todo.title = action.payload.title;
//                 todo.completed = action.payload.completed;
//             }
//         },
//     }
// })
// export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
// export default todoSlice.reducer;




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

// Initial state
const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null
};

export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
    const response = await axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos?_limit=10");
    return response.data;
});

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<Todo>) {
            state.todos.push(action.payload);
        },
        deleteTodo(state, action: PayloadAction<number>) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        updateTodo(state, action: PayloadAction<Todo>) {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.title = action.payload.title;
                todo.completed = action.payload.completed;
            }
        },
    }
});

// Export actions
export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
