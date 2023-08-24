'use client';

import { Card, Title } from '@tremor/react';

import { useSelector } from 'react-redux';
import { fetchAction } from '../../actions/categoriaactividad';
import { add } from '../../reducers/categoriaActividadReducer';
import { RootState } from '../../store/store';
import Search from '../components/form/search';
import CategoriaActividadTable from './table/table';

export default function Page() {
  const crudState = useSelector((state: RootState) => state.categoriaactividad);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>CategoriaActividad</Title>
      <Search crudState={crudState} fetchAction={fetchAction} add={add} />
      <Card className="mt-6">
        <CategoriaActividadTable data={crudState.data} />
      </Card>
    </main>
  );
}
