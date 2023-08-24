'use client';

import { Card, Title } from '@tremor/react';

import { useSelector } from 'react-redux';
import { fetchAction } from '../../actions/localidad';
import { add } from '../../reducers/localidadReducer';
import { RootState } from '../../store/store';
import Search from '../components/form/search';
import LocalidadTable from './table/table';

export default function Page() {
  const crudState = useSelector((state: RootState) => state.localidad);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Localidad</Title>
      <Search crudState={crudState} fetchAction={fetchAction} add={add} />
      <Card className="mt-6">
        <LocalidadTable data={crudState.data} />
      </Card>
    </main>
  );
}
