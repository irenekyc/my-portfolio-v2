import { createSlice } from "@reduxjs/toolkit";

type ProjectsStates = {
  projects: Array<any>;
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
  extraReducers: () => {
    // builder.addCase(
    //   loadNewClientPromotions.pending,
    //   (state, action: PayloadAction<PromotionType[] | undefined>) => {
    //     if (action.payload) {
    //       state.newClientPromotion = action.payload;
    //     }
    //   }
    // );
    // builder.addCase(
    //   loadPromotions.fulfilled,
    //   (
    //     state,
    //     action: PayloadAction<{
    //       promotions: PromotionType[];
    //       heroPromotion: PromotionType[];
    //     }>
    //   ) => {
    //     state.promotions = action.payload.promotions;
    //     state.heroPromotion = action.payload.heroPromotion;
    //   }
    // );
  },
});

export default projectsSlice.reducer;
