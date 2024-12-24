import { Footer, Header } from '@/shared/app-shell';
import { Outlet } from 'react-router-dom';

export function PublicLayout() {
  return (
    <div className="text-theme-dark">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
