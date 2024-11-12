import { createSlice } from "@reduxjs/toolkit";

const userInitialState = {
  userId: 1,
  username: "user",
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    updateUser: (state, action) => {
      state.userId = action.payload.id;
      state.username = action.payload.name;
    },
  },
});

export interface userState {
  userId: number;
  username: string;
}

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
