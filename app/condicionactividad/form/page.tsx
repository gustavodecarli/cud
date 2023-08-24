'use client';
import { TextInput } from '@tremor/react';

import { useSelector } from 'react-redux';
import { saveAction } from '../../../actions/condicionactividad';
import { RootState } from '../../../store/store';
import FormBase from '../../components/form/form';

export default function Form() {
  const element = useSelector((state: RootState) => state.condicionactividad.element);

  return (
    <FormBase title="CondicionActividad" element={element} saveAction={saveAction}>
      <TextInput placeholder="Código" name="codigo" />
      <TextInput placeholder="Descripción" name="descripcion" />
    </FormBase>
  );
}
