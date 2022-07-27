import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchGoogle from "../../../data/google-connect";

const loadProjects = createAsyncThunk<{ projects: Array<any>; error: boolean }>(
  "loadProjects",
  async () => {
    const res = await fetchGoogle();
    return res;
  }
);

export default loadProjects;
