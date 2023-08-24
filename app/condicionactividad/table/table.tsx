'use client';

import { CondicionActividad } from '../../../entity/CondicionActividad';

import { removeAction } from '../../../actions/condicionactividad';
import { edit } from '../../../reducers/condicionActividadReducer';
import CodigoDescripcionTable from '../../components/form/table/codigoDescripcionTable';

export default function CondicionActividadTable({
  data
}: {
  data: CondicionActividad[];
}) {
  return (
    <CodigoDescripcionTable
      data={data}
      editAction={edit}
      removeAction={removeAction}
    />
  );
}
