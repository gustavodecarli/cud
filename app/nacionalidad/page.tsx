'use client';

import { Card, Title } from '@tremor/react';

import { useSelector } from 'react-redux';
import { fetchAction } from '../../actions/nacionalidad';
import { add } from '../../reducers/nacionalidadReducer';
import { RootState } from '../../store/store';
import Search from '../components/form/search';
import NacionalidadTable from './table/table';

export default function Page() {
  const crudState = useSelector((state: RootState) => state.nacionalidad);

  const appState = useSelector((state: RootState) => state.app);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Nacionalidad {appState.isFetching ? 'si' : 'no'}</Title>
      <Search crudState={crudState} fetchAction={fetchAction} add={add} />
      <Card className="mt-6">
        <NacionalidadTable data={crudState.data} />
      </Card>
    </main>
  );
}
