'use client';

import { Card, Flex, Grid, Title } from '@tremor/react';
import Link from 'next/link';

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
  }
  , {  name: 'TipoTelefono',  route: 'tipotelefono' }, , {  name: 'TipoEquipamiento',  route: 'tipoequipamiento' }, , {  name: 'TipoDeficiencia',  route: 'tipodeficiencia' }, , {  name: 'TipoOrientacionProfesional',  route: 'tipoorientacionprofesional' }, , {  name: 'TipoVivienda',  route: 'tipovivienda' }, , {  name: 'EstadoCalle',  route: 'estadocalle' }, , {  name: 'Vinculos',  route: 'vinculos' }, , {  name: 'GradoAlfabetizacion',  route: 'gradoalfabetizacion' }, , {  name: 'CondicionActividad',  route: 'condicionactividad' }, , {  name: 'CategoriaActividad',  route: 'categoriaactividad' }, /*MENUS*/
];

export default function PlaygroundPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
        {data.map((item) => (
          <Link key={item.name} href={item.route}>
            <Card key={item.name} decoration="top" decorationColor="indigo">
              <Flex
                justifyContent="center"
                alignItems="baseline"
                className="space-x-2"
              >
                <Title>{item.name}</Title>
              </Flex>
            </Card>
          </Link>
        ))}
      </Grid>
    </main>
  );
}
