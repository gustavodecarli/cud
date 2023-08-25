import { createAsyncThunk } from '@reduxjs/toolkit';

import { BaseEntity } from 'typeorm';
import { PaginationRequest } from '../interfaces/Pagination';
import { fecth, remove, save } from '../repository/paisRepository';

const baseUrl = 'pais';

export const fetchAction = createAsyncThunk(
  `${baseUrl}/getAll`,
  async (paginationRequest: PaginationRequest) => {
    const data = fecth(paginationRequest.page, paginationRequest.search);

    return data;
  }
);

export const saveAction = createAsyncThunk(
  `${baseUrl}/save`,
  async (element: BaseEntity) => {
    return save(element);
  }
);

export const removeAction = createAsyncThunk(
  `${baseUrl}/remove`,
  async (id: number) => {
    return remove(id);
  }
);
