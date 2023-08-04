'use client';

import { Card, Title } from '@tremor/react';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Search from '../search';
import ProvincesTable from './provinces';

//export const dynamic = 'force-dynamic';

export default function Page() {
  /*const AppDataSource = await getDataSource();

  const provinces = await AppDataSource.getRepository(Province).find(); */

  const provinces = useSelector((state: RootState) => state.province.provinces);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Provincias</Title>
      <Search />
      <Card className="mt-6">
        <ProvincesTable provinces={provinces} />
      </Card>
    </main>
  );
}
