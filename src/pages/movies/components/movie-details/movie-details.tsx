import { Button } from '@/vendors/ui/button';
import { Star } from 'lucide-react';
import { SimilarMovies } from '../similar-movies/similar-movies';

const movie = {
  _id: '1',
  title: 'Moana 2',
  overview:
    'After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she`s ever faced.',
  languages: [
    [
      {
        _id: '676aadc192b22bb6e9b1ea3f',
        code: 'en_US',
        name: 'English',
      },
      {
        _id: '676aadc192b22bb6e9b1ea3f',
        code: 'es_SP',
        name: 'Spanish',
      },
    ],
  ],
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

export function MovieDetails() {
  const { runtime, releaseDate } = movie;
  const formattedRuntime = `${Math.floor(runtime / 60)}h ${runtime % 60}m`;

  const formattedDate = new Date(releaseDate).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <div className="w-full bg-theme-dark">
        <div
          className="bg-cover bg-center w-[1280px] h-[480px] mx-auto flex items-center"
          style={{
            backgroundImage: `linear-gradient(90deg, rgb(66, 62, 58) 24.97%, rgb(66, 62, 58, 0.8) 26.3%, rgba(66, 62, 58, 0.04) 97.47%, rgb(66, 62, 58) 100%), url(${movie.posterPath})`,
          }}
        >
          <div className="flex text-white">
            <img src={movie.thumbnailPath} alt={movie.title} />
            <div className="w-3/4 p-4 font-medium">
              <h2 className="text-3xl font-semibold">{movie.title}</h2>
              <div className="p-6 my-4 bg-theme-dark-grey rounded-2xl flex items-center">
                <Star fill="#e50b0b" stroke="#e50b0b" />
                <div className="text-xl ml-3">{`${movie.rating}/10`}</div>
                <div className="text-lg ml-3">Rated by {movie.ratedBy}</div>
                <div className="ml-3 text-theme-dark">
                  <Button variant="outline">Rate now</Button>
                </div>
              </div>
              <p className="text-lg">{movie.genres}</p>
              <p>{movie.languages.join(', ')}</p>
              <p className="text-lg">{formattedRuntime}</p>
              <p className="text-lg">{formattedDate.toString()}</p>
              <p className="mt-8">
                <Button variant="destructive" className="w-[240px] py-8">
                  Book Now
                </Button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto">
        <div className="my-8">
          <h2 className="text-2xl font-semibold">About The movie</h2>
          <p className="mt-4 w-2/3 text-lg">{movie.overview}</p>
        </div>
        <div className="my-8">
          <h2 className="text-2xl font-semibold">Cast</h2>
          <div className="mt-4 w-2/3">
            <div className="flex flex-wrap">
              {movie.casts.map(cast => (
                <div key={cast} className="mr-8 mt-4">
                  <div className="w-24 h-24 rounded-full bg-theme-dark-grey"></div>
                  <div className="text-center w-24 mt-4">{cast}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <SimilarMovies />
      </div>
    </>
  );
}
