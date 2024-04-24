import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: "modals",
  initialState: { value:[false,false,false,false,false,false] }, // array of modals to be
  reducers: {
    openVisitModal: (state) => {
      state.value[0]  = true;
    },
    closeVisitModal: (state) => {
      state.value[0] = false;
    },
    openAddModal: (state) => {
      state.value[1] = true;
    },
    closeAddModal: (state) => {
      state.value[1] = false;
    },
    openEditModal: (state) => {
      state.value[2] = true;
    },
    closeEditModal: (state) => {
      state.value[2] = false;
    },
    openDeleteModal: (state) => {
      state.value[3] = true;
    },
    closeDeleteModal: (state) => {
      state.value[3] = false;
    },
    openChartModal: (state) => {
      state.value[4] = true;
    },
    closeChartModal: (state) => {
        state.value[4] = false;
    },
    openMapModal: (state) => {
      state.value[5] = true;
    },
    closeMapModal: (state) => {
        state.value[5] = false;
    },
  },
});

export const { openVisitModal, closeVisitModal ,openAddModal ,closeAddModal ,openEditModal ,closeEditModal ,openDeleteModal ,closeDeleteModal ,openChartModal,closeChartModal ,openMapModal , closeMapModal} = userSlice.actions;
export default userSlice.reducer;
