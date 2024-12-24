import { Movie } from '@/common/models';
import { useApi } from '@common/hooks';
import { AxiosResponse } from 'axios';
import { useCallback } from 'react';

// const getMovies = () => api.get('/api/movies');

// export default { getMovies };

export function useMovies() {
  const api = useApi();

  const listMovies = (): Promise<AxiosResponse<Movie[]>> => api.get('/movies');
  return {
    listMovies: useCallback(listMovies, [api]),
  };
}
