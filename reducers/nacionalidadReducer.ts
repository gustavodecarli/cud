import { fetchAction, removeAction, saveAction } from '../actions/nacionalidad';
import { Nacionalidad } from '../entity/Nacionalidad';
import { CRUDState } from '../interfaces/CRUDState';
import crudReducer from './crudReducer';

const initialState: CRUDState<Nacionalidad> = {
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

const nacionalidad = crudReducer(
  'nacionalidad',
  fetchAction,
  saveAction,
  removeAction
);

export const { add, edit } = nacionalidad.actions;

export default nacionalidad.reducer;
