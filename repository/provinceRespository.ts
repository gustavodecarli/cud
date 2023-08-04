import { Province } from '../entity/Province';

export const getAll = async (page: number) => {
  const response = await fetch(`/api/province?page=${page}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'GET'
  });

  return await response.json();
};

export const save = async (data: Province) => {
  const response = await fetch('/api/province', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ data })
  });

  return await response.json();
};

export const remove = async (data: number) => {
  const response = await fetch('/api/province', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'DELETE',
    body: JSON.stringify(data)
  });

  const id = await response.json();

  return { id };
};

export const getOne = async (id: string) => {
  const response = await fetch(`/api/province/${id}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'GET'
  });

  return await response.json();
};
