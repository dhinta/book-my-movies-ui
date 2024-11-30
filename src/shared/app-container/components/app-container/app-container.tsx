import { Header } from '@shared/header';
import { Outlet } from 'react-router-dom';
export function AppContainer() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
