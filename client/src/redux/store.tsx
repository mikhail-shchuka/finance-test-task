import { configureStore } from '@reduxjs/toolkit';
import tickersReducer from './tickersSlice';

export const store = configureStore({
  reducer: tickersReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
