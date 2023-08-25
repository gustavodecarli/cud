'use client';

import { removeAction } from '@/actions/pais';
import CodigoDescripcionTable from '@/components/form/table/codigoDescripcionTable';
import { Pais } from '@/entity/Pais';
import { edit } from '@/reducers/paisReducer';

export default function PaisTable({ data }: { data: Pais[] }) {
  return (
    <CodigoDescripcionTable
      data={data}
      editAction={edit}
      removeAction={removeAction}
    />
  );
}
