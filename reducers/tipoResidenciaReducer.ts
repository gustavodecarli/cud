import { fetchAction, removeAction, saveAction } from '../actions/tiporesidencia';
import { TipoResidencia } from '../entity/TipoResidencia';
import { CRUDState } from '../interfaces/CRUDState';
import crudReducer from './crudReducer';

const initialState: CRUDState<TipoResidencia> = {
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

const tiporesidencia = crudReducer(
  'tiporesidencia',
  fetchAction,
  saveAction,
  removeAction
);

export const { add, edit } = tiporesidencia.actions;

export default tiporesidencia.reducer;
