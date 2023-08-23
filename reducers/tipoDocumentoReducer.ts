import { fetchAction, removeAction, saveAction } from '../actions/tipodocumento';
import { TipoDocumento } from '../entity/TipoDocumento';
import { CRUDState } from '../interfaces/CRUDState';
import crudReducer from './crudReducer';

const initialState: CRUDState<TipoDocumento> = {
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

const tipodocumento = crudReducer(
  'tipodocumento',
  fetchAction,
  saveAction,
  removeAction
);

export const { add, edit } = tipodocumento.actions;

export default tipodocumento.reducer;
