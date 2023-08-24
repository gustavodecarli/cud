import { ActionCreatorWithPayload, AsyncThunk } from '@reduxjs/toolkit';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text
} from '@tremor/react';
import CodigoDescripcion from '../../../../entity/interfaces/CodigoDescripcion';
import ButtonCRUD from '../buttonCRUD';

interface CodigoDescripcionTableProps {
  data: CodigoDescripcion[];
  editAction: ActionCreatorWithPayload<number>;
  removeAction: AsyncThunk<any, number, any>;
}

export default function CodigoDescripcionTable({
  data,
  editAction,
  removeAction
}: CodigoDescripcionTableProps) {
  return (
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
                editAction={editAction}
                removeAction={removeAction}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
