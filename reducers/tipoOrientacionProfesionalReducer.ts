import { fetchAction, removeAction, saveAction } from '../actions/tipoorientacionprofesional';
import { TipoOrientacionProfesional } from '../entity/TipoOrientacionProfesional';
import { CRUDState } from '../interfaces/CRUDState';
import crudReducer from './crudReducer';

const initialState: CRUDState<TipoOrientacionProfesional> = {
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

const tipoorientacionprofesional = crudReducer(
  'tipoorientacionprofesional',
  fetchAction,
  saveAction,
  removeAction
);

export const { add, edit } = tipoorientacionprofesional.actions;

export default tipoorientacionprofesional.reducer;
