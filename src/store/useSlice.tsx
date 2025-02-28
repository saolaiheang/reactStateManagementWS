import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserList {
    name: string;
}
const initialState: UserList = {
    name: "laiheang"
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeName:(state, action: PayloadAction<string>) =>{
            state.name = action.payload;
        },
    },
});
export const { changeName } = userSlice.actions;
export default userSlice.reducer;