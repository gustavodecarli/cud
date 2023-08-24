'use client';

import { Card, Title } from '@tremor/react';

import { useSelector } from 'react-redux';
import { fetchAction } from '../../actions/tipotelefono';
import { add } from '../../reducers/tipotelefonoReducer';
import { RootState } from '../../store/store';
import Search from '../components/form/search';
import TipoTelefonoTable from './table/table';

export default function Page() {
  const crudState = useSelector((state: RootState) => state.tipotelefono);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>TipoTelefono</Title>
      <Search crudState={crudState} fetchAction={fetchAction} add={add} />
      <Card className="mt-6">
        <TipoTelefonoTable data={crudState.data} />
      </Card>
    </main>
  );
}
