import { fetchAction, removeAction, saveAction } from '../actions/province';
import { Province } from '../entity/Province';
import { CRUDState } from '../interfaces/CRUDState';
import crudReducer from './crudReducer';

const initialState: CRUDState<Province> = {
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

const provinceSlice = crudReducer(
  'province',
  fetchAction,
  saveAction,
  removeAction
);

/*
export const provindeSlice = createSlice({
  name: 'province',
  initialState,
  reducers: {
    add: (state: CRUDState<Province>, action) => {
      state.element = action.payload;
    },
    edit: (state: CRUDState<Province>, action: PayloadAction<number>) => {
      state.element = current(state.data).find((e) => e.id == action.payload);
    }
  },
  extraReducers: (builder) => {
    addCaseFetch(builder, fetchAction);

    addCaseSave(builder, saveAction);

    addCaseRemove(builder, removeAction);

    addMatcher(builder);

 
    builder.addCase(fetchAction.fulfilled, (state, action) => {
      state.data = action.payload.result;
      state.pagination.hasMore = action.payload.hasMore;
    });

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

    builder.addCase(removeAction.fulfilled, (state, action) => {
      const provincesNew = current(state.data).filter(
        (e) => e.id !== action.payload.id
      );
      state.data = provincesNew;
    });

  }
});

*/

export const { add, edit } = provinceSlice.actions;

export default provinceSlice.reducer;
