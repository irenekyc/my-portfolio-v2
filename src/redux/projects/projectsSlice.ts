import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import loadProjects from "./actions/loadProjects";
import { Project } from "../../typings/Project";

type ProjectsStates = {
  projects: Array<Project>;
  error: boolean;
  loading: boolean;
};

const initialState: ProjectsStates = {
  error: false,
  loading: true,
  projects: [],
};

export const projectsSlice = createSlice({
  name: "Projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadProjects.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      loadProjects.fulfilled,
      (
        state,
        action: PayloadAction<{
          projects: Array<Project>;
          error: boolean;
        }>
      ) => {
        state.projects = action.payload.projects;
        state.error = action.payload.error;
      }
    );
  },
});

export default projectsSlice.reducer;
