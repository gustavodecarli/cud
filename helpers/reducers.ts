import { ActionReducerMapBuilder, AsyncThunk, current } from '@reduxjs/toolkit';
import { CRUDState } from '../interfaces/CRUDState';
import { PaginationRequest } from '../interfaces/Pagination';

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

export function addMatcher(builder: ActionReducerMapBuilder<CRUDState<any>>) {
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

export function addCaseFetch(
  builder: ActionReducerMapBuilder<CRUDState<any>>,
  fetchAction: AsyncThunk<any, PaginationRequest, any>
) {
  builder.addCase(fetchAction.fulfilled, (state, action) => {
    state.data = action.payload.result;
    state.pagination.hasMore = action.payload.hasMore;
  });
}

export function addCaseSave(
  builder: ActionReducerMapBuilder<CRUDState<any>>,
  saveAction: AsyncThunk<any, any, any>
) {
  builder.addCase(saveAction.fulfilled, (state, action) => {
    const { payload } = action;
    const dataCurrent = current(state.data);
    let dataNew = [];
    if (payload.id === undefined) {
      payload.id = dataCurrent.length + 1;
      dataNew = [...dataCurrent, action.payload];
    } else {
      dataNew = dataCurrent.map((e) => {
        if (e.id == action.payload.id) {
          return action.payload;
        } else {
          return e;
        }
      });
    }

    state.data = dataNew;
    state.element = payload;
  });
}

export function addCaseRemove(
  builder: ActionReducerMapBuilder<CRUDState<any>>,
  removeAction: AsyncThunk<any, number, any>
) {
  builder.addCase(removeAction.fulfilled, (state, action) => {
    const elementNews = current(state.data).filter(
      (e) => e.id !== action.payload.id
    );
    state.data = elementNews;
  });
}
