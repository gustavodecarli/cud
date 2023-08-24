'use client';

import { Card, Title } from '@tremor/react';

import { useSelector } from 'react-redux';
import { fetchAction } from '../../actions/gradoalfabetizacion';
import { add } from '../../reducers/gradoalfabetizacionReducer';
import { RootState } from '../../store/store';
import Search from '../components/form/search';
import GradoAlfabetizacionTable from './table/table';

export default function Page() {
  const crudState = useSelector((state: RootState) => state.gradoalfabetizacion);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>GradoAlfabetizacion</Title>
      <Search crudState={crudState} fetchAction={fetchAction} add={add} />
      <Card className="mt-6">
        <GradoAlfabetizacionTable data={crudState.data} />
      </Card>
    </main>
  );
}
