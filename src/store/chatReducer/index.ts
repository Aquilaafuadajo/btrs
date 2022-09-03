import { createSlice } from '@reduxjs/toolkit';
import { getNewMessages } from '../../utils/getNewMessages';

export type Message = {
  message: string;
  ownerId: string;
  ownerName: string;
  time: string;
};

const initialState: { messages: Message[] } = {
  messages: getNewMessages(),
};

const chatReducer = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    sendMessage: (state: typeof initialState, action: { payload: Message }) => {
      state.messages = [...state.messages, action.payload];
      localStorage.setItem('wassup-storage', JSON.stringify(state.messages));
    },
    setMessages: (state: typeof initialState) => {
      state.messages = getNewMessages();
    },
  },
});

export const { sendMessage, setMessages } = chatReducer.actions;

export default chatReducer.reducer;
