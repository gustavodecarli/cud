import { fetchAction, removeAction, saveAction } from '../actions/pais';
import { Pais } from '../entity/Pais';
import { CRUDState } from '../interfaces/CRUDState';
import crudReducer from './crudReducer';

const initialState: CRUDState<Pais> = {
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

const pais = crudReducer(
  'pais',
  fetchAction,
  saveAction,
  removeAction
);

export const { add, edit } = pais.actions;

export default pais.reducer;
