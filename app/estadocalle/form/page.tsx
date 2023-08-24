'use client';
import { TextInput } from '@tremor/react';

import { useSelector } from 'react-redux';
import { saveAction } from '../../../actions/estadocalle';
import { RootState } from '../../../store/store';
import FormBase from '../../components/form/form';

export default function Form() {
  const element = useSelector((state: RootState) => state.estadocalle.element);

  return (
    <FormBase title="EstadoCalle" element={element} saveAction={saveAction}>
      <TextInput placeholder="Código" name="codigo" />
      <TextInput placeholder="Descripción" name="descripcion" />
    </FormBase>
  );
}
