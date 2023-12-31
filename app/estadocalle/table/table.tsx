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
import { EstadoCalle } from '../../../entity/EstadoCalle';

import { removeAction } from '../../../actions/estadocalle';
import { edit } from '../../../reducers/estadoCalleReducer';
import ButtonCRUD from '../../components/form/buttonCRUD';

export default function EstadoCalleTable({ data }: { data: EstadoCalle[] }) {
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
                <ButtonCRUD
                  id={entidad.id}
                  editAction={edit}
                  removeAction={removeAction}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
