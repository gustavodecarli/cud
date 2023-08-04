import { configureStore } from '@reduxjs/toolkit';
import provinceReducer from '../reducers/provinceReducer';
export const store = configureStore({
  reducer: { province: provinceReducer }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
