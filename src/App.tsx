import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './routes';

function App() {
  return (
    <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
      <RouterProvider router={routes} />
    </ErrorBoundary>
  );
}

export default App;
