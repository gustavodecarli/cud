import { fetchAction, removeAction, saveAction } from '../actions/moneda';
import { Moneda } from '../entity/Moneda';
import { CRUDState } from '../interfaces/CRUDState';
import crudReducer from './crudReducer';

const initialState: CRUDState<Moneda> = {
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

const moneda = crudReducer(
  'moneda',
  fetchAction,
  saveAction,
  removeAction
);

export const { add, edit } = moneda.actions;

export default moneda.reducer;
