'use client';

import { useQuery } from '@tanstack/react-query';
import {
  Button,
  Flex,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text
} from '@tremor/react';
import React from 'react';
import { getAll } from '../../repository/provinceRespository';
import DeleteButton from './buttonDelete';
import EditButton from './buttonEdit';

interface Province {
  id: number;
  code: string;
  name: string;
}

interface Pagination<T> {
  result: Array<T>;
  total: number;
  hasMore: boolean;
}

export default function ProvincesTable({
  provinces
}: {
  provinces: Province[];
}) {
  const [page, setPage] = React.useState(0);

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery<Pagination<Province>>({
      queryKey: ['province', page],
      queryFn: () => getAll(page)
    });

  return (
    <React.Fragment>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Code</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Acciones</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.result.map((province) => (
            <TableRow key={province.id}>
              <TableCell width={300}>
                <Text>{province.code}</Text>
              </TableCell>
              <TableCell width={600}>
                <Text>{province.name}</Text>
              </TableCell>
              <TableCell width={30} className="p-4">
                <EditButton id={province.id} name={'province'}></EditButton>
                <DeleteButton
                  id={province.id}
                  name={'province'}
                  page={page}
                ></DeleteButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Flex justifyContent="end" className="space-x-2 border-t pt-4 mt-8">
        <Button
          variant="secondary"
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 0}
        >
          Anterior
        </Button>{' '}
        <Button
          variant="secondary"
          onClick={() => {
            if (data?.hasMore) {
              setPage((old) => old + 1);
            }
          }}
          disabled={!data?.hasMore}
        >
          Siguiente
        </Button>
      </Flex>
    </React.Fragment>
  );
}
