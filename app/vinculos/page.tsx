'use client';

import { Card, Title } from '@tremor/react';

import { useSelector } from 'react-redux';
import { fetchAction } from '../../actions/vinculos';
import { add } from '../../reducers/vinculosReducer';
import { RootState } from '../../store/store';
import Search from '../components/form/search';
import VinculosTable from './table/table';

export default function Page() {
  const crudState = useSelector((state: RootState) => state.vinculos);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Vinculos</Title>
      <Search crudState={crudState} fetchAction={fetchAction} add={add} />
      <Card className="mt-6">
        <VinculosTable data={crudState.data} />
      </Card>
    </main>
  );
}
