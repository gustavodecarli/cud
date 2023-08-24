import { fetchAction, removeAction, saveAction } from '../actions/genero';
import { Genero } from '../entity/Genero';
import { CRUDState } from '../interfaces/CRUDState';
import crudReducer from './crudReducer';

const initialState: CRUDState<Genero> = {
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

const genero = crudReducer(
  'genero',
  fetchAction,
  saveAction,
  removeAction
);

export const { add, edit } = genero.actions;

export default genero.reducer;
