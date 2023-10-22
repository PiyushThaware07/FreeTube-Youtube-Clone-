import { configureStore, combineReducers } from "@reduxjs/toolkit";

import VideoSlice from "./Slice/VideoSlice";

const rootReducer = combineReducers({
    videoReducer: VideoSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;