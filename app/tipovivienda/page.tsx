'use client';

import { Card, Title } from '@tremor/react';

import { useSelector } from 'react-redux';
import { fetchAction } from '../../actions/tipovivienda';
import { add } from '../../reducers/tipoviviendaReducer';
import { RootState } from '../../store/store';
import Search from '../components/form/search';
import TipoViviendaTable from './table/table';

export default function Page() {
  const crudState = useSelector((state: RootState) => state.tipovivienda);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>TipoVivienda</Title>
      <Search crudState={crudState} fetchAction={fetchAction} add={add} />
      <Card className="mt-6">
        <TipoViviendaTable data={crudState.data} />
      </Card>
    </main>
  );
}
