import { fetchAction, removeAction, saveAction } from '../actions/tipodeficiencia';
import { TipoDeficiencia } from '../entity/TipoDeficiencia';
import { CRUDState } from '../interfaces/CRUDState';
import crudReducer from './crudReducer';

const initialState: CRUDState<TipoDeficiencia> = {
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

const tipodeficiencia = crudReducer(
  'tipodeficiencia',
  fetchAction,
  saveAction,
  removeAction
);

export const { add, edit } = tipodeficiencia.actions;

export default tipodeficiencia.reducer;
