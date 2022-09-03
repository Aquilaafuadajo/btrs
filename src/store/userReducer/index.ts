import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  name: string;
  token: string;
}

export interface UserAction {
  payload: UserState;
}

const initialState: UserState = {
  name: '',
  token: '',
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: UserState, action: UserAction) => {
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
    logOut: (state: UserState) => {
      state.name = '';
      state.token = '';
    },
  },
});

export const { setUser, logOut } = userReducer.actions;

export default userReducer.reducer;
