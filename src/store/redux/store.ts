import { configureStore } from "@reduxjs/toolkit";
import jobTrackerReducer from "@/features/user/jobTrackerSlice";

export const store = configureStore({
  reducer: {
    jobTracker: jobTrackerReducer,
  }
});