'use client';

import { Card, Title } from '@tremor/react';

import { useSelector } from 'react-redux';
import { fetchAction } from '../../actions/estadocivil';
import { add } from '../../reducers/estadocivilReducer';
import { RootState } from '../../store/store';
import Search from '../components/form/search';
import EstadoCivilTable from './table/table';

export default function Page() {
  const crudState = useSelector((state: RootState) => state.estadocivil);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>EstadoCivil</Title>
      <Search crudState={crudState} fetchAction={fetchAction} add={add} />
      <Card className="mt-6">
        <EstadoCivilTable data={crudState.data} />
      </Card>
    </main>
  );
}
