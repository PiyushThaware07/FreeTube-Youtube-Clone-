import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    HistoryArray: [],
}

const HistorySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        addVideo: (state, action) => {
            let newVideo = action.payload;
            // Check if the video already exists in the history
            const existingVideo = state.HistoryArray.find((video) => video.id === newVideo.id)
            if (!existingVideo) {
                state.HistoryArray.push(newVideo);
            }
        },
        removeVideo: (state, action) => {
            let newVideo = action.payload;
            state.HistoryArray = state.HistoryArray.filter((video) => video.id !== newVideo.id)
        },
        clearVideo:(state)=>{
            state.HistoryArray = [];
        }
    }
})

export default HistorySlice.reducer;
export const { addVideo, removeVideo,clearVideo } = HistorySlice.actions;