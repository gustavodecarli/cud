'use client';

import { Card, Title } from '@tremor/react';

import { useSelector } from 'react-redux';
import { fetchAction } from '../../actions/pais';
import { add } from '../../reducers/paisReducer';
import { RootState } from '../../store/store';
import Search from '../components/form/search';
import PaisTable from './table/table';

export default function Page() {
  const crudState = useSelector((state: RootState) => state.pais);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Pais</Title>
      <Search crudState={crudState} fetchAction={fetchAction} add={add} />
      <Card className="mt-6">
        <PaisTable data={crudState.data} />
      </Card>
    </main>
  );
}
