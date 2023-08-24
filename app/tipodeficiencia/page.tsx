'use client';

import { Card, Title } from '@tremor/react';

import { useSelector } from 'react-redux';
import { fetchAction } from '../../actions/tipodeficiencia';
import { add } from '../../reducers/tipoDeficienciaReducer';
import { RootState } from '../../store/store';
import Search from '../components/form/search';
import TipoDeficienciaTable from './table/table';

export default function Page() {
  const crudState = useSelector((state: RootState) => state.tipodeficiencia);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>TipoDeficiencia</Title>
      <Search crudState={crudState} fetchAction={fetchAction} add={add} />
      <Card className="mt-6">
        <TipoDeficienciaTable data={crudState.data} />
      </Card>
    </main>
  );
}
