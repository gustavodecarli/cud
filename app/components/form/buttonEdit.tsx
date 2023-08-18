'use client';

import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Button } from '@tremor/react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

interface EditButtonProps {
  id: number;
  edit: ActionCreatorWithPayload<number>;
}

export default function EditButton(props: EditButtonProps) {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const { pathname } = window.location;

  function handle(id: number) {
    dispatch(props.edit(id));
    push(`${pathname}/form`);
  }

  return (
    <Button variant="secondary" onClick={() => handle(props.id)}>
      Editar
    </Button>
  );
}
