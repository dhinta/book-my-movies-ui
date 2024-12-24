import { Header } from '@shared/app-shell';
import { Outlet } from 'react-router-dom';

export function FixedLayout() {
  return (
    <div className="text-theme-dark">
      <Header />
      <Outlet />
    </div>
  );
}
