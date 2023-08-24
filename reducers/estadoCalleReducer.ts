import { fetchAction, removeAction, saveAction } from '../actions/estadocalle';
import { EstadoCalle } from '../entity/EstadoCalle';
import { CRUDState } from '../interfaces/CRUDState';
import crudReducer from './crudReducer';

const initialState: CRUDState<EstadoCalle> = {
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

const estadocalle = crudReducer(
  'estadocalle',
  fetchAction,
  saveAction,
  removeAction
);

export const { add, edit } = estadocalle.actions;

export default estadocalle.reducer;
