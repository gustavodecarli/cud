import { Card, Title } from '@tremor/react';

import { Province } from '../entity/Province';
import Search from './search';

import { getDataSource } from '../data-source';

export const dynamic = 'force-dynamic';

export default async function indexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';

  const AppDataSource = await getDataSource();
  const data = await AppDataSource.getRepository(Province).find();

  const provinces: Array<Province> = data;

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Provincias22</Title>
      <Search />
      <Card className="mt-6"></Card>
    </main>
  );
}
