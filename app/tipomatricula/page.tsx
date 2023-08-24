'use client';

import { Card, Title } from '@tremor/react';

import { useSelector } from 'react-redux';
import { fetchAction } from '../../actions/tipomatricula';
import { add } from '../../reducers/tipoMatriculaReducer';
import { RootState } from '../../store/store';
import Search from '../components/form/search';
import TipoMatriculaTable from './table/table';

export default function Page() {
  const crudState = useSelector((state: RootState) => state.tipomatricula);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>TipoMatricula</Title>
      <Search crudState={crudState} fetchAction={fetchAction} add={add} />
      <Card className="mt-6">
        <TipoMatriculaTable data={crudState.data} />
      </Card>
    </main>
  );
}
