'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Card, Flex, Grid, Title } from '@tremor/react';
import Link from 'next/link';
import { useState } from 'react';

const data = [
  {
    name: 'Provincias',
    route: 'province'
  },
  {
    name: 'Nacionalidad.',
    route: 'nacionalidad'
  },
  {
    name: 'Tipo Nacionlidad',
    route: 'tiponacionalidad'
  },
  {
    name: 'Moneda',
    route: 'moneda'
  },
  {
    name: 'Tipo Documento',
    route: 'tipodocumento'
  },
  {
    name: 'TipoResidencia',
    route: 'tiporesidencia'
  },
  {
    name: 'Localidad',
    route: 'localidad'
  },
  {
    name: 'EstadoCivil',
    route: 'estadocivil'
  },
  {
    name: 'Genero',
    route: 'genero'
  },
  {
    name: 'TipoTelefono',
    route: 'tipotelefono'
  },
  ,
  {
    name: 'TipoEquipamiento',
    route: 'tipoequipamiento'
  },
  ,
  {
    name: 'TipoDeficiencia',
    route: 'tipodeficiencia'
  },
  ,
  {
    name: 'TipoOrientacionProfesional',
    route: 'tipoorientacionprofesional'
  },
  ,
  {
    name: 'TipoVivienda',
    route: 'tipovivienda'
  },
  ,
  {
    name: 'EstadoCalle',
    route: 'estadocalle'
  },
  ,
  {
    name: 'Vinculos',
    route: 'vinculos'
  },
  ,
  {
    name: 'GradoAlfabetizacion',
    route: 'gradoalfabetizacion'
  },
  ,
  {
    name: 'CondicionActividad',
    route: 'condicionactividad'
  },
  ,
  {
    name: 'CategoriaActividad',
    route: 'categoriaactividad'
  }
  /*MENUS*/
];

export default function PlaygroundPage() {
  const [search, setSearch] = useState(data);

  function handleSearch(value: string): void {
    setSearch(
      data.filter((e) => e?.name.toLowerCase().includes(value.toLowerCase()))
    );
  }

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <div className="flex flex-row">
        <div className="relative my-5 justify-stretch">
          <label htmlFor="search" className="sr-only">
            Buscar
          </label>
          <div className="rounded shadow-sm w-64">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
              aria-hidden="true"
            >
              <MagnifyingGlassIcon
                className="mr-3 h-4 w-4 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              type="text"
              name="search"
              id="search"
              className="h-10 block w-full rounded-md border border-gray-200 pl-9 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Buscar menu"
              spellCheck={false}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
        {search &&
          search.map((item) => (
            <Link key={item?.name} href={item ? item.route : ''}>
              <Card key={item?.name} decoration="top" decorationColor="indigo">
                <Flex
                  justifyContent="center"
                  alignItems="baseline"
                  className="space-x-2"
                >
                  <Title>{item?.name}</Title>
                </Flex>
              </Card>
            </Link>
          ))}
      </Grid>
    </main>
  );
}
