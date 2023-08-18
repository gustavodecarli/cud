'use client';

import { Card, Title } from '@tremor/react';

import { useSelector } from 'react-redux';
import { fetchAction } from '../../actions/tiponacionlidad';
import { add } from '../../reducers/nacionalidadReducer';
import { RootState } from '../../store/store';
import Search from '../components/form/search';
import TipoNacionalidadTable from './table/table';

export default function Page() {
  const crudState = useSelector((state: RootState) => state.tipoNacionalidad);

  const appState = useSelector((state: RootState) => state.app);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Tipo Nacionalidad</Title>
      <Search crudState={crudState} fetchAction={fetchAction} add={add} />
      <Card className="mt-6">
        <TipoNacionalidadTable data={crudState.data} />
      </Card>
    </main>
  );
}
