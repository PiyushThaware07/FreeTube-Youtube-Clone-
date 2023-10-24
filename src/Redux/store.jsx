import { configureStore, combineReducers } from "@reduxjs/toolkit";

import VideoSlice from "./Slice/VideoSlice";
import LoginSlice from "./Slice/LoginSlice";

const rootReducer = combineReducers({
    loginReducer: LoginSlice,
    videoReducer: VideoSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;