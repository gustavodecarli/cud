import { ActionCreatorWithPayload, AsyncThunk } from '@reduxjs/toolkit';
import React from 'react';
import DeleteButton from './buttonDelete';
import EditButton from './buttonEdit';

interface buttonCRUDProps {
  id: number;
  editAction: ActionCreatorWithPayload<number>;
  removeAction: AsyncThunk<any, number, any>;
}

export default function ButtonCRUD({
  id,
  editAction,
  removeAction
}: buttonCRUDProps) {
  return (
    <React.Fragment>
      <EditButton id={id} edit={editAction}></EditButton>
      <DeleteButton id={id} removeAction={removeAction}></DeleteButton>
    </React.Fragment>
  );
}
