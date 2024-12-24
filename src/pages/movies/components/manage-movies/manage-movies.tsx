import { Movie } from '@/common/models';
import { Button } from '@/vendors/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/vendors/ui/table';
import { useEffect, useState } from 'react';
import { useMovies } from '../../hooks/movies.api';

export function ManageMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const { listMovies } = useMovies();

  useEffect(() => {
    async function getMovies() {
      const { data } = await listMovies();
      //   setMovies(() => data);
      setMovies(data);
    }
    getMovies();
  }, [listMovies]);

  const createRow = (movie: Movie, index: number) => {
    return (
      <TableRow key={movie._id}>
        <TableCell className="font-medium">{index}</TableCell>
        <TableCell>{movie.title}</TableCell>
        <TableCell>
          {movie.languages.map(({ name }) => name).join(', ')}
        </TableCell>
        <TableCell className="text-right">
          <Button variant="outline">See details</Button>
        </TableCell>
      </TableRow>
    );
  };

  return (
    <div className="my-8">
      <div className="text-2xl font-semibold mb-8">Manage Movies</div>
      {movies.length ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Sl#</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Language</TableHead>
              <TableHead className="text-right">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {movies.map((movie, index) => createRow(movie, index + 1))}
          </TableBody>
        </Table>
      ) : (
        <div>No movies found</div>
      )}
    </div>
  );
}
