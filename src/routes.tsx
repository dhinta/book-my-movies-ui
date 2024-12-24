import { Dashboard } from '@pages/dashboard';
import { Home } from '@pages/home';
import { MovieDetails, MovieList } from '@pages/movies';
import { ManageMovies } from '@pages/movies/components/manage-movies/manage-movies';
import { Profile } from '@pages/profile';
import { SignInPage, SignUpPage } from '@shared/auth';
import {
  FixedLayout,
  PrivateLayout,
  Protected,
  PublicLayout,
} from '@shared/layouts';
import { createBrowserRouter, redirect } from 'react-router-dom';
import { Permissions } from './common/models';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
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
  {
    path: '/auth',
    element: <FixedLayout />,
    children: [
      {
        index: true,
        loader: () => redirect('/auth/sign-in'),
      },
      {
        path: 'sign-in/*',
        element: <SignInPage />,
      },
      {
        path: 'sign-up/*',
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateLayout />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '/profile',
    element: <PrivateLayout />,
    children: [
      {
        path: '',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/manage/movies',
    element: <PrivateLayout />,
    children: [
      {
        path: '',
        element: (
          <Protected permission={Permissions.MANAGE_MOVIES} link="/">
            <ManageMovies />
          </Protected>
        ),
      },
    ],
  },
]);
