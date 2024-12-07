import { Dashboard } from '@pages/dashboard';
import { Home } from '@pages/home';
import { MovieDetails, MovieList } from '@pages/movies';
import { Profile } from '@pages/profile';
import { SignInPage, SignUpPage } from '@shared/auth';
import { FixedLayout, PrivateLayout, PublicLayout } from '@shared/layouts';
import { createBrowserRouter, redirect } from 'react-router-dom';

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
]);
