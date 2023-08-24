'use client';

import { Card, Title } from '@tremor/react';

import { useSelector } from 'react-redux';
import { fetchAction } from '../../actions/tipoorientacionprofesional';
import { add } from '../../reducers/tipoorientacionprofesionalReducer';
import { RootState } from '../../store/store';
import Search from '../components/form/search';
import TipoOrientacionProfesionalTable from './table/table';

export default function Page() {
  const crudState = useSelector((state: RootState) => state.tipoorientacionprofesional);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>TipoOrientacionProfesional</Title>
      <Search crudState={crudState} fetchAction={fetchAction} add={add} />
      <Card className="mt-6">
        <TipoOrientacionProfesionalTable data={crudState.data} />
      </Card>
    </main>
  );
}
