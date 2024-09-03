// features/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: string | null;
  email: string | null;
  name: string | null;
  phone: string | null;
  role: string | null;
  isLoggedIn: boolean; // Add this property
}

const initialState: UserState = {
  id: null,
  email: null,
  name: null,
  phone: null,
  role: null,
  isLoggedIn: false, // Set initial state
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      return { ...state, ...action.payload, isLoggedIn: true };
    },
    clearUser(state) {
      return { ...initialState, isLoggedIn: false };
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
