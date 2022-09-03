import { Message } from '../store/chatReducer';

export const getNewMessages: (count?: number) => Message[] = () => {
  const db = localStorage.getItem('wassup-storage');
  if (db) {
    return JSON.parse(db);
  } else {
    return [];
  }
};
