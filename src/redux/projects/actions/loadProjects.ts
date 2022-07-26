import { createAsyncThunk } from "@reduxjs/toolkit";

const loadProjects = createAsyncThunk<Array<any>>("loadProjects", async () => {
  return [];
});

export default loadProjects;
