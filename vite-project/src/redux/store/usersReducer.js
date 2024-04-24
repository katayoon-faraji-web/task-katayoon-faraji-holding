import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// [{id:'1',userFname:'کتایون',userLname:'فرجی',userCode:'0520906314'}]

export const getData = createAsyncThunk(
  "users/getData",
  async () => {
    return fetch("https://6628ba9054afcabd0736b7d7.mockapi.io/user")
      .then((res) => res.json())
      .then((data) => data);
  }
);
export const AddUserApi = createAsyncThunk(
  "users/AddUserApi",
  async (data) => {
    fetch('https://6628ba9054afcabd0736b7d7.mockapi.io/user', {
      method: 'POST',
      headers: {'content-type':'application/json'},
      // Send your data in the request body as JSON
      body: JSON.stringify(data)
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(task => {
      // do something with the new task
    }).catch(error => {
      // handle error
    })
      
  }
);
export const deleteUserApi = createAsyncThunk(
  "users/deleteUserApi",
  async (id) => {
    console.log(id);
    return fetch(`https://6628ba9054afcabd0736b7d7.mockapi.io/user/${id}`,{
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => data);
  }
    
);
export const UpdateUserApi = createAsyncThunk(
  "users/UpdateUserApi",
  async ({id,Fname,Lname,code}) => {
    console.log(id);
    return fetch(`https://6628ba9054afcabd0736b7d7.mockapi.io/user/${id}`,{
      method: 'PUT', // or PATCH
      headers: {'content-type':'application/json'},
      body: JSON.stringify({id:id,userFname:Fname,userLname:Lname,userCode:code})
    })
      .then((res) => res.json())
      .then((data) => data);
  }
    
);

export const userSlice = createSlice({
  
  name: "users",
  initialState: { value: [] },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },

    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },

    updateUsername: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.userFname = action.payload.Fname;
          user.userLname = action.payload.Lname;
          user.userCode = action.payload.code;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getData.fulfilled,
      (state, action) => {state.value = action.payload;}
    )
    builder.addCase(
      AddUserApi.fulfilled,
      (state, action) => state.value.push(action.payload) 
    )
    builder.addCase(
      deleteUserApi.fulfilled,
      (state, action) => {
        const newUsersList = state.value.filter((user) => user.id !== action.payload.id);
        return newUsersList;
      }
    )
    builder.addCase(UpdateUserApi.fulfilled,
    (state,action)=>{
      state.value.map((val)=>{
        if(val.id== action.payload.id){
          val.userFname = action.payload.Fname;
          val.userLname = action.payload.Lname;
          val.userCode = action.payload.code;

        }
      })

    })
  },
  
});

export const { addUser, deleteUser, updateUsername } = userSlice.actions;
export default userSlice.reducer;
