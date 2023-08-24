import { fetchAction, removeAction, saveAction } from '../actions/condicionactividad';
import { CondicionActividad } from '../entity/CondicionActividad';
import { CRUDState } from '../interfaces/CRUDState';
import crudReducer from './crudReducer';

const initialState: CRUDState<CondicionActividad> = {
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

const condicionactividad = crudReducer(
  'condicionactividad',
  fetchAction,
  saveAction,
  removeAction
);

export const { add, edit } = condicionactividad.actions;

export default condicionactividad.reducer;
