// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState, AppDispatch } from "../store/store";
// import { fetchTodos, addTodo, deleteTodo, updateTodo } from "../store/todoSlice";

// const TodoList: React.FC = () => {
//     const dispatch = useDispatch<AppDispatch>();
//     const { todos, loading, error } = useSelector((state: RootState) => state.todo);
//     const [newTodo, setNewTodo] = useState("");

//     useEffect(() => {
//         dispatch(fetchTodos());
//     }, [dispatch]);

//     const handleAddTodo = () => {
//         if (newTodo.trim()) {
//             dispatch(addTodo({ id: Date.now(), title: newTodo, completed: false, userId: 1 }));
//             setNewTodo("");
//         }
//     };

//     return (
//         <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-md">
//             <h1 className="text-2xl font-bold text-center mb-4">✅ Todo List</h1>

//             <div className="flex space-x-2 mb-4">
//                 <input
//                     type="text"
//                     value={newTodo}
//                     onChange={(e) => setNewTodo(e.target.value)}
//                     placeholder="Add a new task..."
//                     className="flex-1 p-2 border rounded"
//                 />
//                 <button onClick={handleAddTodo} className="px-4 py-2 bg-blue-500 text-black rounded">
//                     Add
//                 </button>
//             </div>

//             {loading && <p>Loading...</p>}
//             {error && <p className="text-red-500">{error}</p>}

//             <ul className="space-y-2">
//                 {todos.map((todo) => (
//                     <li key={todo.id} className="flex justify-between items-center p-2 border rounded">
//                         <span
//                             onClick={() => dispatch(updateTodo({ ...todo, completed: !todo.completed }))}
//                             className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
//                         >
//                             {todo.completed}
//                         </span>
//                         <button onClick={() => dispatch(deleteTodo(todo.id))} className="bg-red-500 text-white px-2 py-1 rounded">
//                             ❌
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default TodoList;




import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { fetchTodos, addTodo, deleteTodo, updateTodo } from "../store/todoSlice";

const TodoList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { todos, loading, error } = useSelector((state: RootState) => state.todo);
    const [newTodo, setNewTodo] = useState("");

    useEffect(() => {
        dispatch(fetchTodos()); // Fetch existing todos on mount
    }, [dispatch]);

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            dispatch(addTodo({ id: Date.now(), title: newTodo, completed: false, userId: 1 }));
            setNewTodo("");
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 p-5 border rounded-lg shadow-md bg-white">
            <h1 className="text-3xl font-bold text-center mb-4">✅ Todo List</h1>

            {/* Input for adding new todos */}
            <div className="flex space-x-2 mb-4">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new task..."
                    className="flex-1 p-2 border rounded"
                />
                <button onClick={handleAddTodo} className="px-4 py-2 bg-blue-500 text-black rounded">
                    Add
                </button>
            </div>

            {/* Show loading or error */}
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {/* Display todo list */}
            <ul className="space-y-2 max-h-80 overflow-y-auto">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex justify-between items-center p-2 border rounded">
                        <span
                            onClick={() => dispatch(updateTodo(todo.id))}
                            className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
                        >
                            {todo.title}
                        </span>
                        <button onClick={() => dispatch(deleteTodo(todo.id))} className="bg-red-500 text-black px-2 py-1 rounded">
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;

