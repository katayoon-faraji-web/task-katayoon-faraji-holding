import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: "selectedUser",
  initialState: { value:{id:'1',Fname:'کتایون',Lname:'فرجی',code:'0520906314',lat:"10.99835602",lng:"77.01502627"} }, // array of modals to be
  reducers: {
    setUser: (state, action) => {
      state.value.id=action.payload.id;
      state.value.Fname=action.payload.Fname;
      state.value.Lname=action.payload.Lname;
      state.value.code=action.payload.code;
      state.value.lat=action.payload.lat;
      state.value.lng=action.payload.lng;
    },

  },
});

export const { setUser} = userSlice.actions;
export default userSlice.reducer;
