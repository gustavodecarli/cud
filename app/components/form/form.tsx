'use client';

import { Button, Card, Title } from '@tremor/react';
import { useRouter, useSearchParams } from 'next/navigation';

import { useForm } from 'react-hook-form';

import { AsyncThunk } from '@reduxjs/toolkit';
import { ReactElement, cloneElement } from 'react';
import { useDispatch } from 'react-redux';
import { BaseEntity } from 'typeorm';
import { AppDispatch } from '../../../store/store';

import { v4 as uuidv4 } from 'uuid';

export default function FormBase({
  title,
  children,
  element,
  saveAction
}: {
  title: string;
  children: ReactElement[];
  element: BaseEntity;
  saveAction: AsyncThunk<any, BaseEntity, any>;
}) {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  const { pathname } = window.location;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: element
  });

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = async (data: BaseEntity) => {
    dispatch(saveAction(data));
    push(`${pathname}`);
  };

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>{title}</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="mt-6 space-y-4 ">
          {children?.map((e: ReactElement) =>
            cloneElement(e, { ...register(e.props.name), key: uuidv4() })
          )}

          <Button type="submit">Guadar</Button>
        </Card>
      </form>
    </main>
  );
}
