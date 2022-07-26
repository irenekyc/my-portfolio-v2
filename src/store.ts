import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./redux/projects/projectsSlice";

export const store = configureStore({
  reducer: {
    projectSlices: projectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
