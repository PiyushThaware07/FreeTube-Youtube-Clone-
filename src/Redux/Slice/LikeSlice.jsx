import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    LikeArray: []
}

const LikeSlice = createSlice({
    name: "like",
    initialState,
    reducers: {
        addLike: (state, action) => {
            let newVideo = action.payload;
            let existingVideo = state.LikeArray.find((video) => video.id === newVideo.id);
            if (!existingVideo) {
                state.LikeArray.push(newVideo);
            }
        }
    }
})

export default LikeSlice.reducer;
export const { addLike } = LikeSlice.actions;
