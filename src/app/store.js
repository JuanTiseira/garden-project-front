import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/features/counter/counterSlice';
import userReducer from '@/features/user/userSlice';
import apiSlice from './api/apiSlice';
import formSlice from '@/features/plant/formSlice';
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    counter: counterReducer,
    user: userReducer,
    form: formSlice,
  },
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat(apiSlice.middleware),
  devTools: false,
});

export default store;
