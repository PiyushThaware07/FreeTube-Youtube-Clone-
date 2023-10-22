import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    videoArray: [],
};

const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        addVideo: (state, action) => {
            console.log("addVideo : ", action.payload);
            state.videoArray = [...action.payload];
        },
    },
});

export const { addVideo } = videoSlice.actions;

export default videoSlice.reducer;
