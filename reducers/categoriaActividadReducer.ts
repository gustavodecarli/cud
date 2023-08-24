import { fetchAction, removeAction, saveAction } from '../actions/categoriaactividad';
import { CategoriaActividad } from '../entity/CategoriaActividad';
import { CRUDState } from '../interfaces/CRUDState';
import crudReducer from './crudReducer';

const initialState: CRUDState<CategoriaActividad> = {
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

const categoriaactividad = crudReducer(
  'categoriaactividad',
  fetchAction,
  saveAction,
  removeAction
);

export const { add, edit } = categoriaactividad.actions;

export default categoriaactividad.reducer;
