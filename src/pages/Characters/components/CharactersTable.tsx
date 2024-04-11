import {
  useEffect,
  useState,
} from 'react';

import { getCharacters } from '@/api/characters';
import useGetCharacters from '@/hooks/useGetCharacters';
import usePrefetchPage from '@/hooks/usePrefetchPage';
import { Character } from '@/types/character';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

const CharactersTable = () => {
  const [page, setPage] = useState(1);
  const [jumpPage, setJumpPage] = useState("");
  const { data, isLoading, error } = useGetCharacters(page);
  const characters = data?.data.results;
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const hasNextPage = data?.data.info.next;
  const hasPrevPage = data?.data.info.prev;

  usePrefetchPage(page + 1, hasNextPage);
  usePrefetchPage(page - 1, hasPrevPage);

  useEffect(() => {
    const validPageNumber = parseInt(jumpPage, 10);
    if (
      validPageNumber !== page &&
      validPageNumber >= 1 &&
      validPageNumber <= data?.data.info.pages
    ) {
      const queryKey = ["characters", validPageNumber];
      const isDataAlreadyCached = queryClient.getQueryData(queryKey);

      if (!isDataAlreadyCached) {
        queryClient.prefetchQuery({
          queryKey,
          queryFn: () => getCharacters(validPageNumber),
        });
      }
    }
  }, [jumpPage, page, queryClient, data?.data.info.pages]);

  const handlePrevPage = () => {
    if (hasPrevPage) {
      setPage((old) => old - 1);
    }
  };

  const handleNextPage = () => {
    if (hasNextPage) {
      setPage((old) => old + 1);
    }
  };

  const handleJumpPage = () => {
    const pageNumber = parseInt(jumpPage, 10);
    if (pageNumber && pageNumber >= 1 && pageNumber <= data?.data.info.pages) {
      setPage(pageNumber);
      setJumpPage("");
    }
  };

  const handleReload = () => {
    queryClient.invalidateQueries({
      queryKey: ["characters", page],
      exact: true,
    });
  };

  const handleRowClick = (characterId: number) => {
    const url = `/characters/${characterId}`;
    navigate({
      to: url,
      replace: false,
    });
  };

  return (
    <div className="table-responsive">
      <table
        className="table table-bordered"
        id="dataTable"
        width="100%"
        cellSpacing={0}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Gender</th>
            <th>Last known location</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td colSpan={4}>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </td>
            </tr>
          )}
          {error && (
            <tr>
              <td colSpan={4}>
                <div className="alert alert-danger d-flex flex-column align-items-center justify-content-center">
                  <h1 className="h3">An error occurred</h1>
                  <pre>{error.message}</pre>
                  <button
                    type="button"
                    onClick={handleReload}
                    className="btn btn-warning"
                  >
                    Reload Data
                  </button>
                </div>
              </td>
            </tr>
          )}
          {!isLoading &&
            !error &&
            characters.map((character: Character) => (
              <tr
                key={character.id}
                onClick={() => handleRowClick(character.id)}
              >
                <td>{character.name}</td>
                <td>{character.status}</td>
                <td>{character.species}</td>
                <td>{character.location.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="d-flex align-items-center w-25 mx-auto gap-xxl-5">
        <div className="d-flex align-items-center justify-content-between w-50">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handlePrevPage}
            disabled={!hasPrevPage}
          >
            Previous
          </button>
          <span>
            Page <strong>{page}</strong> of{" "}
            <strong>{data?.data.info.pages || 1}</strong>
          </span>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleNextPage}
            disabled={!hasNextPage}
          >
            Next
          </button>
        </div>
        <div className="input-group w-25">
          <input
            id="jumpPage"
            type="number"
            className="form-control"
            placeholder="Pg. #"
            value={jumpPage}
            onChange={(e) => setJumpPage(e.target.value)}
            min="1"
            max={data?.data.info.pages || 1}
            disabled={!data}
            aria-label="Page number input"
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleJumpPage}
            disabled={!data}
          >
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharactersTable;
