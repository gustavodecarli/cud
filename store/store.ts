import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../reducers/appReducer';
import categoriaActividadReducer from '../reducers/categoriaActividadReducer';
import condicionActividadReducer from '../reducers/condicionActividadReducer';
import estadoCalleReducer from '../reducers/estadoCalleReducer';
import estadoCivilReducer from '../reducers/estadoCivilReducer';
import generoReducer from '../reducers/generoReducer';
import gradoAlfabetizacionReducer from '../reducers/gradoAlfabetizacionReducer';
import localidadReducer from '../reducers/localidadReducer';
import monedaReducer from '../reducers/monedaReducer';
import nacionalidadReducer from '../reducers/nacionalidadReducer';
import paisReducer from '../reducers/paisReducer';
import provinceReducer from '../reducers/provinceReducer';
import tipoDeficienciaReducer from '../reducers/tipoDeficienciaReducer';
import tipoDocumentoReducer from '../reducers/tipoDocumentoReducer';
import tipoEquipamientoReducer from '../reducers/tipoEquipamientoReducer';
import tipoMatriculaReducer from '../reducers/tipoMatriculaReducer';
import tipoNacionalidadReducer from '../reducers/tipoNacionalidadReducer';
import tipoOrientacionProfesionalReducer from '../reducers/tipoOrientacionProfesionalReducer';
import tipoResidenciaReducer from '../reducers/tipoResidenciaReducer';
import tipoTelefonoReducer from '../reducers/tipoTelefonoReducer';
import tipoViviendaReducer from '../reducers/tipoViviendaReducer';
import vinculosReducer from '../reducers/vinculosReducer';
/*IMPORTS*/

export const store = configureStore({
  reducer: {
    province: provinceReducer,
    nacionalidad: nacionalidadReducer,
    tipoNacionalidad: tipoNacionalidadReducer,
    moneda: monedaReducer,
    tipodocumento: tipoDocumentoReducer,
    tiporesidencia: tipoResidenciaReducer,
    localidad: localidadReducer,
    estadocivil: estadoCivilReducer,
    genero: generoReducer,
    tipotelefono: tipoTelefonoReducer,
    tipoequipamiento: tipoEquipamientoReducer,
    tipodeficiencia: tipoDeficienciaReducer,
    tipoorientacionprofesional: tipoOrientacionProfesionalReducer,
    tipovivienda: tipoViviendaReducer,
    estadocalle: estadoCalleReducer,
    vinculos: vinculosReducer,
    gradoalfabetizacion: gradoAlfabetizacionReducer,
    condicionactividad: condicionActividadReducer,
    categoriaactividad: categoriaActividadReducer,
    tipomatricula: tipoMatriculaReducer,
    pais: paisReducer,
    /*REDUCERS*/
    app: appReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
