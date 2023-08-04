'use client';

import { Button } from '@tremor/react';
import { useRouter } from 'next/navigation';

interface EditButtonProps {
  id: number;
  name: string;
}

export default function EditButton(props: EditButtonProps) {
  const { push } = useRouter();
  //const dispatch = useDispatch();

  function handle(id: number) {
    //dispatch(edit(id));
    push(`${props.name}/form?id=${id}`);
  }

  return (
    <Button variant="secondary" onClick={() => handle(props.id)}>
      Editar
    </Button>
  );
}
