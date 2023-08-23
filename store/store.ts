import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../reducers/appReducer';
import monedaReducer from '../reducers/monedaReducer';
import nacionalidadReducer from '../reducers/nacionalidadReducer';
import provinceReducer from '../reducers/provinceReducer';
import tipoNacionalidadReducer from '../reducers/tipoNacionalidadReducer';

export const store = configureStore({
  reducer: {
    province: provinceReducer,
    nacionalidad: nacionalidadReducer,
    tipoNacionalidad: tipoNacionalidadReducer,
    moneda: monedaReducer,
    app: appReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
