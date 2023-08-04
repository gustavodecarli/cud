'use client';
import { Button, Card, TextInput, Title } from '@tremor/react';
import { useRouter, useSearchParams } from 'next/navigation';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
//import { save } from '../../../reducers/provinceReducer';
import { Province } from '../../../entity/Province';
import { getOne, save } from '../../../repository/provinceRespository';

export default function Form() {
  // const province = useSelector((state: RootState) => state.province.province);
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ['save'],
    mutationFn: save,
    onSuccess: (data) => {
      queryClient.setQueryData(['province'], (oldData: any) => {
        return oldData?.map((item: any) => {
          if (item.id !== data.id) {
            return item;
          } else {
            return data;
          }
        });
      });
    }
  });

  const id = searchParams?.get('id');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const query = useQuery<Province>({
    queryKey: ['province-one', id],
    queryFn: () => getOne(id ? id : ''),
    onSuccess: (data) => {
      reset(data);
    }
  });

  // Metodo por redux-toolkit
  // const dispatch = useDispatch();
  //const provinces = useSelector((state: RootState) => state.province.provinces);

  const onSubmit = async (data: any) => {
    // Metodo por react-query
    mutation.mutate(data);

    // Metodo por redux-toolkit
    // dispatch(save(data));

    router.push('/province');
  };

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Provincias</Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="mt-6 space-y-4 ">
          <TextInput placeholder="Code" {...register('code')} />
          <TextInput placeholder="Name" {...register('name')} />
          <Button type="submit">Guadar</Button>
        </Card>
      </form>
    </main>
  );
}
