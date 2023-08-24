'use client';

import { Card, Title } from '@tremor/react';

import { useSelector } from 'react-redux';
import { fetchAction } from '../../actions/tiporesidencia';
import { add } from '../../reducers/tipoResidenciaReducer';
import { RootState } from '../../store/store';
import Search from '../components/form/search';
import TipoResidenciaTable from './table/table';

export default function Page() {
  const crudState = useSelector((state: RootState) => state.tiporesidencia);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>TipoResidencia</Title>
      <Search crudState={crudState} fetchAction={fetchAction} add={add} />
      <Card className="mt-6">
        <TipoResidenciaTable data={crudState.data} />
      </Card>
    </main>
  );
}
