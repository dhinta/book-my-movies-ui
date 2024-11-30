import { Home } from '@/pages/home';
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
    ],
  },
]);
