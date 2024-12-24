import { MovieCard } from '@/common/components';
import { useParams } from 'react-router-dom';

const movie = {
  id: 1,
  title: 'Moana 2',
  overview:
    'After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she`s ever faced.',
  genres: 'Action, Adventure, Fantasy',
  languages: ['English', 'Spanish'],
  casts: [
    "Auli'i Cravalho",
    'Dwayne Johnson',
    'Alan Tudyk',
    'Nicole Scherzinger',
    'Temuera Morrison',
    'Jemaine Clement',
  ],

  posterPath: '/images/moana.jpg',
  thumbnailPath: '/images/moana-thumb.jpg',
  releaseDate: '2022-12-14',
  likeCount: 10,
  rating: 6.9,
  ratedBy: '24.4K+',
  runtime: 123,
  budget: 0,
  revenue: 0,
};

const movies = Array.from({ length: 30 }, (_, index) => ({
  ...movie,
  id: index + 1,
  title: `${movie.title} ${index + 1}`,
}));

export function MovieList() {
  const { type = 'recommended' } = useParams();

  return (
    <div className="max-w-[1280px] mx-auto">
      <h1 className="text-2xl font-semibold text-center capitalize">
        {type} Movies
      </h1>

      <div className="grid grid-cols-4 gap-4 my-8">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} className="mt-2" />
        ))}
      </div>
    </div>
  );
}
