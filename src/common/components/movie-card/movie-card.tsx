import { Movie } from '@common/models';
import { slugify } from '@common/utils';
import { Link } from 'react-router-dom';

interface Props {
  movie: Movie;
  className?: string;
}

export function MovieCard({ movie, className = '' }: Props) {
  const url = `/movies/${slugify(movie.title)}/${movie._id}`;
  return (
    <Link to={url}>
      <div className={`flex flex-col rounded-lg shadow-lg ${className}`}>
        <img
          src={movie.thumbnailPath}
          alt={movie.title}
          className="w-full object-cover rounded-lg mb-2"
        />
        <div className="p-2">
          <h2 className="text-base font-semibold">{movie.title}</h2>
          <p className="text-gray-600">{movie.genres}</p>
        </div>
      </div>
    </Link>
  );
}
