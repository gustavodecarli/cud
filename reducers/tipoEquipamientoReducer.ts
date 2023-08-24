import { fetchAction, removeAction, saveAction } from '../actions/tipoequipamiento';
import { TipoEquipamiento } from '../entity/TipoEquipamiento';
import { CRUDState } from '../interfaces/CRUDState';
import crudReducer from './crudReducer';

const initialState: CRUDState<TipoEquipamiento> = {
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

const tipoequipamiento = crudReducer(
  'tipoequipamiento',
  fetchAction,
  saveAction,
  removeAction
);

export const { add, edit } = tipoequipamiento.actions;

export default tipoequipamiento.reducer;
