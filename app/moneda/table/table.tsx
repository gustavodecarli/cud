'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text
} from '@tremor/react';
import React from 'react';
import { Moneda } from '../../../entity/Moneda';

import { removeAction } from '../../../actions/moneda';
import { edit } from '../../../reducers/monedaReducer';
import DeleteButton from '../../components/form/buttonDelete';
import EditButton from '../../components/form/buttonEdit';

export default function MonedaTable({ data }: { data: Moneda[] }) {
  return (
    <React.Fragment>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Código</TableHeaderCell>
            <TableHeaderCell>Descripción</TableHeaderCell>
            <TableHeaderCell>Acciones</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((entidad) => (
            <TableRow key={entidad.id}>
              <TableCell width={300}>
                <Text>{entidad.codigo}</Text>
              </TableCell>
              <TableCell width={600}>
                <Text>{entidad.descripcion}</Text>
              </TableCell>
              <TableCell width={30} className="p-4">
                <EditButton id={entidad.id} edit={edit}></EditButton>
                <DeleteButton
                  id={entidad.id}
                  removeAction={removeAction}
                ></DeleteButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
