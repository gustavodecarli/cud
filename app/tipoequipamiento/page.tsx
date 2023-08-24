'use client';

import { Card, Title } from '@tremor/react';

import { useSelector } from 'react-redux';
import { fetchAction } from '../../actions/tipoequipamiento';
import { add } from '../../reducers/tipoEquipamientoReducer';
import { RootState } from '../../store/store';
import Search from '../components/form/search';
import TipoEquipamientoTable from './table/table';

export default function Page() {
  const crudState = useSelector((state: RootState) => state.tipoequipamiento);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>TipoEquipamiento</Title>
      <Search crudState={crudState} fetchAction={fetchAction} add={add} />
      <Card className="mt-6">
        <TipoEquipamientoTable data={crudState.data} />
      </Card>
    </main>
  );
}
