import { fetchAction, removeAction, saveAction } from '../actions/gradoalfabetizacion';
import { GradoAlfabetizacion } from '../entity/GradoAlfabetizacion';
import { CRUDState } from '../interfaces/CRUDState';
import crudReducer from './crudReducer';

const initialState: CRUDState<GradoAlfabetizacion> = {
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

const gradoalfabetizacion = crudReducer(
  'gradoalfabetizacion',
  fetchAction,
  saveAction,
  removeAction
);

export const { add, edit } = gradoalfabetizacion.actions;

export default gradoalfabetizacion.reducer;
