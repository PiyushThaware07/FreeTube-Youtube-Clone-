import { configureStore, combineReducers } from "@reduxjs/toolkit";

import VideoSlice from "./Slice/VideoSlice";
import LoginSlice from "./Slice/LoginSlice";
import HistorySlice from "./Slice/HistorySlice";
import LikeSlice from "./Slice/LikeSlice";

const rootReducer = combineReducers({
    HistoryReducer: HistorySlice,
    LikeReducer: LikeSlice,
    loginReducer: LoginSlice,
    videoReducer: VideoSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;