import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import workReducer from '../features/works/workSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    category: workReducer 
  },
});
