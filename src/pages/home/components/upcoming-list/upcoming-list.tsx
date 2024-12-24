import { MovieCard } from '@/common/components';
import { useSlider } from '@common/hooks';
import { Movie, NavigationDirection } from '@common/models';
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const movie = {
  _id: '1',
  title: 'Avatar: The Way of Water',
  overview:
    "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together, but they are faced with a new threat from the past that could keep them apart.",
  genres: 'Action, Adventure, Fantasy',
  casts: ["Auli'i Cravalho"],
  languages: [
    {
      code: 'en_US',
      name: 'English',
    },
    {
      code: 'es_SP',
      name: 'Spanish',
    },
  ],
  posterPath: '/avatar.jpg',
  thumbnailPath: '/images/avatar.jpg',
  releaseDate: '2022-12-14',
  likeCount: 0,
  rating: 0,
  ratedBy: '5.5k+',
  runtime: 0,
  budget: 0,
  revenue: 0,
};

const movies = Array.from({ length: 15 }, (_, index) => ({
  ...movie,
  _id: `movie-${index + 1}`,
  title: `${movie.title} ${index + 1}`,
}));

export function UpcomingList() {
  const ref = useRef<HTMLDivElement>(null);
  const { left, currentIndex, visibleCardsNum, onNavigate } = useSlider<Movie>(
    movies,
    ref,
    '.upcoming-movie-card',
  );
  return (
    <div className="w-full py-4 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Upcoming Movies</h2>
        <Link
          to="/movies/upcoming"
          className="text-blue-600 visited:text-purple-600 "
        >
          See All
        </Link>
      </div>

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

      <div className="overflow-hidden relative h-[450px]" ref={ref}>
        <div
          className="flex flex-nowrap absolute transition-[left] duration-1000"
          style={{ left }}
        >
          {movies.map(movie => (
            <React.Fragment key={movie._id}>
              <MovieCard
                movie={movie}
                className="mx-2 w-60 upcoming-movie-card"
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
