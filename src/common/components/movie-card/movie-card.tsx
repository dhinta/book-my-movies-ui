import { Link } from 'react-router-dom';

interface Movie {
  id: number;
  title: string;
  overview: string;
  genres: string;
  posterPath: string;
  thumbnailPath: string;
  releaseDate: string;
  likeCount: number;
  rating: number;
  ratedBy: number;
  runtime: number;
  budget: number;
  revenue: number;
}

interface Props {
  movie: Movie;
  className?: string;
}

export function MovieCard({ movie, className = '' }: Props) {
  return (
    <Link to={`/movies/${movie.id}`}>
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
