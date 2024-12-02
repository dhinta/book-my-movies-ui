import { MovieCard } from '@common/components';
import { useSlider } from '@common/hooks';
import { Movie, NavigationDirection } from '@common/models';
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react';
import React, { useRef } from 'react';

const movie = {
  id: 1,
  title: 'Moana 2',
  overview:
    'After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she`s ever faced.',
  languages: ['English', 'Spanish'],
  casts: [
    "Auli'i Cravalho",
    'Dwayne Johnson',
    'Alan Tudyk',
    'Nicole Scherzinger',
    'Temuera Morrison',
    'Jemaine Clement',
    'Debasish Chowdhury',
  ],
  genres: 'Action, Adventure, Fantasy',
  posterPath: '/images/moana.jpg',
  thumbnailPath: '/images/moana-thumb.jpg',
  releaseDate: '2022-12-14',
  likeCount: 10,
  rating: 6.9,
  ratedBy: '5.4k+',
  runtime: 123,
  budget: 0,
  revenue: 0,
};

const movies = Array.from({ length: 14 }, (_, index) => ({
  ...movie,
  id: index + 1,
  title: `${movie.title} ${index + 1}`,
}));

export function SimilarMovies() {
  const ref = useRef<HTMLDivElement>(null);
  const { left, currentIndex, visibleCardsNum, onNavigate } = useSlider<Movie>(
    movies,
    ref,
    '.similar-movie-card',
  );

  return (
    <div className="my-8 relative">
      <h2 className="text-2xl font-semibold">You might also like</h2>

      <CircleChevronLeft
        size={48}
        className={`absolute -left-12 top-[40%] p-0 cursor-pointer ${
          currentIndex === 0 ? 'opacity-50 pointer-events-none' : ''
        }`}
        tabIndex={0}
        onClick={() => onNavigate(NavigationDirection.LEFT)}
      />

      <CircleChevronRight
        size={48}
        className={`absolute -right-12 top-[40%] p-0 cursor-pointer ${
          currentIndex >= movies.length - visibleCardsNum
            ? 'opacity-50 pointer-events-none'
            : ''
        }`}
        tabIndex={0}
        onClick={() => onNavigate(NavigationDirection.RIGHT)}
      />

      <div className="overflow-hidden relative h-[450px] my-8" ref={ref}>
        <div
          className="flex flex-nowrap absolute transition-[left] duration-1000"
          style={{ left }}
        >
          {movies.map(movie => (
            <React.Fragment key={movie.id}>
              <MovieCard
                movie={movie}
                className="mx-2 w-60 similar-movie-card"
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
