import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { exercisesApi } from './endpoints/exercises-endpoints';

export const store = configureStore({
  reducer: {
    [exercisesApi.reducerPath]: exercisesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(exercisesApi.middleware),
});

setupListeners(store.dispatch);
