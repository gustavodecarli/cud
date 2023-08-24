'use client';

import { removeAction } from '@/actions/nacionalidad';
import CodigoDescripcionTable from '@/components/form/table/codigoDescripcionTable';
import { Nacionalidad } from '@/entity/Nacionalidad';
import { edit } from '@/reducers/nacionalidadReducer';

export default function NacionalidadTable({ data }: { data: Nacionalidad[] }) {
  return (
    <CodigoDescripcionTable
      data={data}
      editAction={edit}
      removeAction={removeAction}
    />
  );
}
