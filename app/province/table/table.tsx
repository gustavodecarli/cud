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
import { removeAction } from '../../../actions/province';
import { Province } from '../../../entity/Province';
import { edit } from '../../../reducers/provinceReducer';
import DeleteButton from '../../components/form/buttonDelete';
import EditButton from '../../components/form/buttonEdit';

export default function ProvincesTable({ data }: { data: Province[] }) {
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
          {data?.map((province) => (
            <TableRow key={province.id}>
              <TableCell width={300}>
                <Text>{province.codigo}</Text>
              </TableCell>
              <TableCell width={600}>
                <Text>{province.descripcion}</Text>
              </TableCell>
              <TableCell width={30} className="p-4">
                <EditButton id={province.id} edit={edit}></EditButton>
                <DeleteButton
                  id={province.id}
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
