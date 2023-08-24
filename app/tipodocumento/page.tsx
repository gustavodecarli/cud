'use client';

import { Card, Title } from '@tremor/react';

import { useSelector } from 'react-redux';
import { fetchAction } from '../../actions/tipodocumento';
import { add } from '../../reducers/tipoDocumentoReducer';
import { RootState } from '../../store/store';
import Search from '../components/form/search';
import TipoDocumentoTable from './table/table';

export default function Page() {
  const crudState = useSelector((state: RootState) => state.tipodocumento);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>TipoDocumento</Title>
      <Search crudState={crudState} fetchAction={fetchAction} add={add} />
      <Card className="mt-6">
        <TipoDocumentoTable data={crudState.data} />
      </Card>
    </main>
  );
}
