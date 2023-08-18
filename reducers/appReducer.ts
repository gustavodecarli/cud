import { AsyncThunk, PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isFetching: false
};

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setFetching(state, action: PayloadAction<boolean>) {
      state.isFetching = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher<PendingAction>(
      (action) => action.type.endsWith('/pending'),
      (state, action) => {
        state.isFetching = true;
      }
    );

    builder.addMatcher<RejectedAction>(
      (action) => action.type.endsWith('/rejected'),
      (state, action) => {
        state.isFetching = false;
      }
    );

    builder.addMatcher<FulfilledAction>(
      (action) => action.type.endsWith('/fulfilled'),
      (state, action) => {
        state.isFetching = false;
      }
    );
  }
});

export const { setFetching } = appSlice.actions;

export default appSlice.reducer;
