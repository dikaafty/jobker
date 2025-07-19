import { configureStore } from "@reduxjs/toolkit";
import jobTrackerReducer from "@/features/user/jobTrackerSlice";

export const store = configureStore({
  reducer: {
    jobTracker: jobTrackerReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;