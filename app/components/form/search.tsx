'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

import { Button } from '@tremor/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';

import { ActionCreatorWithPayload, AsyncThunk } from '@reduxjs/toolkit';
import { CRUDState } from '../../../interfaces/CRUDState';
import { PaginationRequest } from '../../../interfaces/Pagination';
import { AppDispatch } from '../../../store/store';

export default function Search<T>({
  disabled,
  crudState,
  fetchAction,
  add
}: {
  disabled?: boolean;
  crudState: CRUDState<T>;
  fetchAction: AsyncThunk<any, PaginationRequest, any>;
  add: ActionCreatorWithPayload<T | undefined>;
}) {
  const searchParams = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();

  const { hasMore, isFetching } = crudState.pagination;

  const { push } = useRouter();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  const paginationRequest: PaginationRequest = useMemo(() => {
    return {
      page,
      search,
      size: 0
    };
  }, [page, search]);

  useEffect(() => {
    dispatch(fetchAction(paginationRequest));
  }, [dispatch, paginationRequest]);

  function handleSearch(term: string) {
    setSearch(term);
  }

  function handleClick() {
    dispatch(add(undefined));
    push(`${pathname}/form`);
  }

  function handleRefersh(): void {
    dispatch(fetchAction(paginationRequest));
  }

  return (
    <React.Fragment>
      <div>
        <div className="flex flex-row">
          <div className="relative mt-5 max-w-md">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="rounded-md shadow-sm">
              <div
                className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                aria-hidden="true"
              >
                <MagnifyingGlassIcon
                  className="mr-3 h-4 w-4 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                name="search"
                id="search"
                value={search}
                //  disabled={props.disabled}
                className="h-10 block w-full rounded-md border border-gray-200 pl-9 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Search by name..."
                spellCheck={false}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-5 flex items-center pl-3 ml-2 justify-center">
            <Button size="xs" onClick={() => handleClick()}>
              Nuevo
            </Button>
            <Button size="xs" onClick={() => handleRefersh()}>
              Refresh
            </Button>
            <Button
              variant="secondary"
              onClick={() => setPage((old) => Math.max(old - 1, 0))}
              disabled={page === 0 || isFetching}
            >
              Anterior
            </Button>{' '}
            <Button
              variant="secondary"
              onClick={() => {
                if (hasMore) {
                  setPage((old) => old + 1);
                }
              }}
              disabled={!hasMore || isFetching}
            >
              Siguiente
            </Button>
            {isFetching ? 'si' : 'no'}
            Page {page}
          </div>
        </div>

        {isFetching && (
          <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
