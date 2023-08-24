'use client';

import { Card, Title } from '@tremor/react';

import { useSelector } from 'react-redux';
import { fetchAction } from '../../actions/estadocalle';
import { add } from '../../reducers/estadocalleReducer';
import { RootState } from '../../store/store';
import Search from '../components/form/search';
import EstadoCalleTable from './table/table';

export default function Page() {
  const crudState = useSelector((state: RootState) => state.estadocalle);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>EstadoCalle</Title>
      <Search crudState={crudState} fetchAction={fetchAction} add={add} />
      <Card className="mt-6">
        <EstadoCalleTable data={crudState.data} />
      </Card>
    </main>
  );
}
