'use client';

import { AsyncThunk } from '@reduxjs/toolkit';
import { Button } from '@tremor/react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../../store/store';

interface DeleteButtonProps {
  id: number;
  removeAction: AsyncThunk<any, number, any>;
}

export default function DeleteButton(props: DeleteButtonProps) {
  const { push } = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = window.location;

  function handler(id: number) {
    dispatch(props.removeAction(id));
    push(`${pathname}`);
  }

  return (
    <Button variant="primary" onClick={() => handler(props.id)}>
      Eliminar
    </Button>
  );
}
