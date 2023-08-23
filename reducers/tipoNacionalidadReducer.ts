import {
  fetchAction,
  removeAction,
  saveAction
} from '../actions/tiponacionlidad';
import { TipoNacionalidad } from '../entity/TipoNacionalidad';
import { CRUDState } from '../interfaces/CRUDState';
import crudReducer from './crudReducer';

const initialState: CRUDState<TipoNacionalidad> = {
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
  'tiponacionalidad',
  fetchAction,
  saveAction,
  removeAction
);

export const { add, edit } = provinceSlice.actions;

export default provinceSlice.reducer;
