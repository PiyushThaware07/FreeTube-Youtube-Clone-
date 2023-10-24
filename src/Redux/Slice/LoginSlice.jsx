import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
}

const LoginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        addUser: (state, action) => {
            console.log("Adding user : ", action.payload);
            state.user = action.payload;
        },
        removeUser: (state, action) => {
            console.log("Removing User : ");
        }
    }
})

export default LoginSlice.reducer;
export const { addUser, removeUser } = LoginSlice.actions;