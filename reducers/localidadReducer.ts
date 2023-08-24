import { fetchAction, removeAction, saveAction } from '../actions/localidad';
import { Localidad } from '../entity/Localidad';
import { CRUDState } from '../interfaces/CRUDState';
import crudReducer from './crudReducer';

const initialState: CRUDState<Localidad> = {
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

const localidad = crudReducer(
  'localidad',
  fetchAction,
  saveAction,
  removeAction
);

export const { add, edit } = localidad.actions;

export default localidad.reducer;
