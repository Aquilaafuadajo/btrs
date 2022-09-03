import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import chatReducer from './chatReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    messages: chatReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
