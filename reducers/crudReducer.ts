import {
  AsyncThunk,
  PayloadAction,
  createSlice,
  current
} from '@reduxjs/toolkit';
import { CRUDState } from '../interfaces/CRUDState';

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

export default function crudReducer(
  name: string,
  fetchAction: AsyncThunk<any, any, any>,
  saveAction: AsyncThunk<any, any, any>,
  removeAction: AsyncThunk<any, number, any>
) {
  const initialState: CRUDState<any> = {
    data: [],
    pagination: {
      page: 0,
      size: 5,
      search: '',
      hasMore: false,
      isFetching: false
    },

    element: undefined
  };

  const slice = createSlice({
    name: name,
    initialState,
    reducers: {
      add: (state: CRUDState<any>, action) => {
        state.element = action.payload;
      },
      edit: (state: CRUDState<any>, action: PayloadAction<any>) => {
        state.element = current(state.data).find((e) => e.id == action.payload);
      }
    },
    extraReducers: (builder) => {
      //Cases

      builder.addCase(fetchAction.fulfilled, (state, action) => {
        console.log('fetchAction', action.payload.result);

        state.data = action.payload.result;
        state.pagination.hasMore = action.payload.hasMore;
      });

      builder.addCase(saveAction.fulfilled, (state, action) => {
        const { payload } = action;

        console.log('saveAction', payload);

        const dataCurrent = current(state.data);
        let dataNew = [];

        let isNew = true;

        dataNew = dataCurrent.map((e) => {
          if (e.id == payload.id) {
            isNew = false;
            return payload;
          } else {
            return e;
          }
        });

        if (isNew) {
          dataNew = [...dataNew, payload];
        }

        state.data = dataNew;
        state.element = payload;
      });

      builder.addCase(removeAction.fulfilled, (state, action) => {
        const provincesNew = current(state.data).filter(
          (e) => e.id !== action.payload.id
        );
        state.data = provincesNew;
      });

      //Matchers

      builder.addMatcher<PendingAction>(
        (action) => action.type.endsWith('/pending'),
        (state, action) => {
          state.pagination.isFetching = true;
        }
      );

      builder.addMatcher<RejectedAction>(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.pagination.isFetching = false;
        }
      );

      builder.addMatcher<FulfilledAction>(
        (action) => action.type.endsWith('/fulfilled'),
        (state, action) => {
          state.pagination.isFetching = false;
        }
      );
    }
  });

  return slice;
}
