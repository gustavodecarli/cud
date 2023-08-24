import { fetchAction, removeAction, saveAction } from '../actions/tipovivienda';
import { TipoVivienda } from '../entity/TipoVivienda';
import { CRUDState } from '../interfaces/CRUDState';
import crudReducer from './crudReducer';

const initialState: CRUDState<TipoVivienda> = {
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

const tipovivienda = crudReducer(
  'tipovivienda',
  fetchAction,
  saveAction,
  removeAction
);

export const { add, edit } = tipovivienda.actions;

export default tipovivienda.reducer;
