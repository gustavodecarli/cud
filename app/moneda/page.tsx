'use client';

import { Card, Title } from '@tremor/react';

import { useSelector } from 'react-redux';
import { fetchAction } from '../../actions/moneda';
import { add } from '../../reducers/monedaReducer';
import { RootState } from '../../store/store';
import Search from '../components/form/search';
import MonedaTable from './table/table';

export default function Page() {
  const crudState = useSelector((state: RootState) => state.moneda);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Moneda</Title>
      <Search crudState={crudState} fetchAction={fetchAction} add={add} />
      <Card className="mt-6">
        <MonedaTable data={crudState.data} />
      </Card>
    </main>
  );
}
