'use client';
import { TextInput } from '@tremor/react';

import { useSelector } from 'react-redux';
import { saveAction } from '../../../actions/tiponacionlidad';
import { RootState } from '../../../store/store';
import FormBase from '../../components/form/form';

export default function Form() {
  const element = useSelector(
    (state: RootState) => state.tipoNacionalidad.element
  );

  return (
    <FormBase
      title="Tipo Nacionalidad"
      element={element}
      saveAction={saveAction}
    >
      <TextInput placeholder="Código" name="codigo" />
      <TextInput placeholder="Descripción" name="descripcion" />
    </FormBase>
  );
}
