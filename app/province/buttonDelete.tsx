'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@tremor/react';
import { useRouter } from 'next/navigation';
import { remove } from '../../repository/provinceRespository';

interface DeleteButtonProps {
  id: number;
  name: string;
  page: number;
}

export default function DeleteButton(props: DeleteButtonProps) {
  const { push } = useRouter();
  //const dispatch = useDispatch();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: [`${props.name}-remove`],
    mutationFn: remove,
    onSuccess: (data, variables, context) => {
      queryClient.setQueryData(['province', props.page], (oldData: any) => {
        console.log(oldData, data, context, variables);
        const { result, total } = oldData;
        const newResult = result?.filter((item: any) => item.id !== data.id);
        const newData = { ...oldData, result: newResult, total: total - 1 };

        return newData;
      });
    }
  });

  function handle(id: number) {
    // dispatch(remove(id));

    mutation.mutate(id);
    push(`/${props.name}`);
  }

  return (
    <Button variant="primary" onClick={() => handle(props.id)}>
      Eliminar
    </Button>
  );
}
