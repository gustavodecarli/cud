import { fetchAction, removeAction, saveAction } from '../actions/tipotelefono';
import { TipoTelefono } from '../entity/TipoTelefono';
import { CRUDState } from '../interfaces/CRUDState';
import crudReducer from './crudReducer';

const initialState: CRUDState<TipoTelefono> = {
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

const tipotelefono = crudReducer(
  'tipotelefono',
  fetchAction,
  saveAction,
  removeAction
);

export const { add, edit } = tipotelefono.actions;

export default tipotelefono.reducer;
