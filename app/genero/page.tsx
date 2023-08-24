'use client';

import { Card, Title } from '@tremor/react';

import { useSelector } from 'react-redux';
import { fetchAction } from '../../actions/genero';
import { add } from '../../reducers/generoReducer';
import { RootState } from '../../store/store';
import Search from '../components/form/search';
import GeneroTable from './table/table';

export default function Page() {
  const crudState = useSelector((state: RootState) => state.genero);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Genero</Title>
      <Search crudState={crudState} fetchAction={fetchAction} add={add} />
      <Card className="mt-6">
        <GeneroTable data={crudState.data} />
      </Card>
    </main>
  );
}
