import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { addItem } from "../store/shoppingSlice";
import { changeName } from "../store/useSlice";

export const AddItem = () => {
  const navigate = useNavigate();
  const [itemName, setItemName] = useState("");
  const [userName, setUserName] = useState(""); // State for user name

const dispatch= useDispatch<AppDispatch>();
  const handleAdd = () => {
    if (itemName.trim()) {
      setItemName(""); // Clear input
      navigate("/"); // Go back to list
      dispatch(addItem(itemName))
    }
  };

  const handleSetName = () => {
    if (userName.trim()) {
      setUserName("")
      dispatch(changeName(userName))

    }
  };

  return (
    <div className="p-6 min-h-screen min-w-screen bg-gray-100 flex flex-col items-center justify-center text-black">
      <h1 className="text-2xl font-bold mb-4">Add Shopping Item</h1>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Enter item name"
        className="p-2 border rounded w-full max-w-md mb-4"
      />
      <div className="space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleAdd}
        >
          Save Item
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
      </div>

      <h1 className="text-2xl font-bold mb-4 mt-8">Set User Name</h1>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter your name"
        className="p-2 border rounded w-full max-w-md mb-4"
      />
      <button
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={handleSetName}
      >
        Set Name
      </button>
    </div>
  );
};