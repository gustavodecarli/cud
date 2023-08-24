import { fetchAction, removeAction, saveAction } from '../actions/estadocivil';
import { EstadoCivil } from '../entity/EstadoCivil';
import { CRUDState } from '../interfaces/CRUDState';
import crudReducer from './crudReducer';

const initialState: CRUDState<EstadoCivil> = {
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

const estadocivil = crudReducer(
  'estadocivil',
  fetchAction,
  saveAction,
  removeAction
);

export const { add, edit } = estadocivil.actions;

export default estadocivil.reducer;
