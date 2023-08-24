import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../reducers/appReducer';
import monedaReducer from '../reducers/monedaReducer';
import nacionalidadReducer from '../reducers/nacionalidadReducer';
import provinceReducer from '../reducers/provinceReducer';
import tipoDocumentoReducer from '../reducers/tipoDocumentoReducer';
import tipoNacionalidadReducer from '../reducers/tipoNacionalidadReducer';
import tipoResidenciaReducer from '../reducers/tipoResidenciaReducer';
import localidadReducer from '../reducers/localidadReducer'; import estadoCivilReducer from '../reducers/estadoCivilReducer'; import generoReducer from '../reducers/generoReducer'; import tipoTelefonoReducer from '../reducers/tipoTelefonoReducer'; import tipoEquipamientoReducer from '../reducers/tipoEquipamientoReducer'; import tipoDeficienciaReducer from '../reducers/tipoDeficienciaReducer'; import tipoOrientacionProfesionalReducer from '../reducers/tipoOrientacionProfesionalReducer'; import tipoViviendaReducer from '../reducers/tipoViviendaReducer'; import estadoCalleReducer from '../reducers/estadoCalleReducer'; import vinculosReducer from '../reducers/vinculosReducer'; import gradoAlfabetizacionReducer from '../reducers/gradoAlfabetizacionReducer'; import condicionActividadReducer from '../reducers/condicionActividadReducer'; import categoriaActividadReducer from '../reducers/categoriaActividadReducer'; /*IMPORTS*/

export const store = configureStore({
  reducer: {
    province: provinceReducer,
    nacionalidad: nacionalidadReducer,
    tipoNacionalidad: tipoNacionalidadReducer,
    moneda: monedaReducer,
    tipodocumento: tipoDocumentoReducer,
    tiporesidencia: tipoResidenciaReducer,
    localidad: localidadReducer,    estadocivil: estadoCivilReducer,    genero: generoReducer,    tipotelefono: tipoTelefonoReducer,    tipoequipamiento: tipoEquipamientoReducer,    tipodeficiencia: tipoDeficienciaReducer,    tipoorientacionprofesional: tipoOrientacionProfesionalReducer,    tipovivienda: tipoViviendaReducer,    estadocalle: estadoCalleReducer,    vinculos: vinculosReducer,    gradoalfabetizacion: gradoAlfabetizacionReducer,    condicionactividad: condicionActividadReducer,    categoriaactividad: categoriaActividadReducer,    /*REDUCERS*/
    app: appReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
