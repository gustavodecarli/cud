import { BaseEntity } from 'typeorm';
import { header } from '../helpers/api';

export const fecth = async (page: number, search: string) => {
  const response = await fetch(
    `/api/tiporesidencia?page=${page}&search=${search}`,
    {
      headers: header(),
      method: 'GET'
    }
  );

  return await response.json();
};

export const save = async (data: BaseEntity) => {
  const response = await fetch('/api/tiporesidencia', {
    headers: header(),
    method: 'POST',
    body: JSON.stringify({ data })
  });

  return await response.json();
};

export const remove = async (data: number) => {
  const response = await fetch('/api/tiporesidencia', {
    headers: header(),
    method: 'DELETE',
    body: JSON.stringify(data)
  });

  const id = await response.json();

  return { id };
};

export const getOne = async (id: string) => {
  const response = await fetch(`/api/tiporesidencia/${id}`, {
    headers: header(),
    method: 'GET'
  });

  return await response.json();
};
