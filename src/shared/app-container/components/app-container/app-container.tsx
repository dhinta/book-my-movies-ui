import { Header } from '@shared/header';
import { Outlet } from 'react-router-dom';
import { Footer } from '../footer/footer';
export function AppContainer() {
  return (
    <div className="text-theme-dark">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
