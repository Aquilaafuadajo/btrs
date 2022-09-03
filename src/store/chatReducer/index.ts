import { createSlice } from '@reduxjs/toolkit';

type Message = {
  message: string;
  ownerId: string;
  ownerName: string;
  time: string;
};

const initialState: { messages: Message[] } = {
  messages: [],
};

const chatReducer = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    sendMessage: (state: typeof initialState, action: { payload: Message }) => {
      state.messages = [...state.messages, action.payload];
    },
  },
});

export const { sendMessage } = chatReducer.actions;

export default chatReducer.reducer;
