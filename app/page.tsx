import { Title } from '@tremor/react';

import { Province } from '../entity/Province';

import { getDataSource } from '../data-source';

import Image from 'next/image';

export const dynamic = 'force-dynamic';

import imageCUD from '../images/cud.jpeg';

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
      <Title></Title>
      <Image src={imageCUD} alt="" height={800} width={1600}></Image>
    </main>
  );
}
