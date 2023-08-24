import { fetchAction, removeAction, saveAction } from '../actions/tipomatricula';
import { TipoMatricula } from '../entity/TipoMatricula';
import { CRUDState } from '../interfaces/CRUDState';
import crudReducer from './crudReducer';

const initialState: CRUDState<TipoMatricula> = {
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

const tipomatricula = crudReducer(
  'tipomatricula',
  fetchAction,
  saveAction,
  removeAction
);

export const { add, edit } = tipomatricula.actions;

export default tipomatricula.reducer;
