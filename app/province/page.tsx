'use client';

import { Card, Title } from '@tremor/react';
import { useSelector } from 'react-redux';
import { fetchAction } from '../../actions/province';
import { add } from '../../reducers/provinceReducer';
import { RootState } from '../../store/store';
import Search from '../components/form/search';
import ProvincesTable from './table/table';

export default function Page() {
  const crudState = useSelector((state: RootState) => state.province);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Provincias</Title>
      <Search crudState={crudState} fetchAction={fetchAction} add={add} />
      <Card className="mt-6">
        <ProvincesTable data={crudState.data} />
      </Card>
    </main>
  );
}
