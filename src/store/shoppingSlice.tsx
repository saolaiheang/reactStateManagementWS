import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface shoppingItem {
    items: string[]
}

const inittalState: shoppingItem = {
    items: ["Milk", "Bread"]
}
const shoppingSlice = createSlice({
    name: "shopping",
    initialState: inittalState,
    reducers: {
        addItem: (state, action: PayloadAction<string>) => {
            const newItem: string = action.payload
            state.items.push(newItem)
        },
    },
});

export const {addItem}= shoppingSlice.actions;
export default shoppingSlice.reducer;
