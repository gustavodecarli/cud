import { fetchAction, removeAction, saveAction } from '../actions/vinculos';
import { Vinculos } from '../entity/Vinculos';
import { CRUDState } from '../interfaces/CRUDState';
import crudReducer from './crudReducer';

const initialState: CRUDState<Vinculos> = {
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

const vinculos = crudReducer(
  'vinculos',
  fetchAction,
  saveAction,
  removeAction
);

export const { add, edit } = vinculos.actions;

export default vinculos.reducer;
