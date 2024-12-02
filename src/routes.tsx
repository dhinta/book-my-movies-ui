import { Home } from '@pages/home';
import { MovieDetails, MovieList } from '@pages/movies';
import { AppContainer } from '@shared/app-container';
import { createBrowserRouter } from 'react-router-dom';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppContainer />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/movies/:type?',
        element: <MovieList />,
      },
      {
        path: '/movies/:title/:id',
        element: <MovieDetails />,
      },
    ],
  },
]);
