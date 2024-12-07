import { Loader } from '@common/components';
import { useAuthentication } from '@common/hooks/authentication';
import { Footer, Header } from '@shared/app-shell';
import { Outlet } from 'react-router-dom';

export function PrivateLayout() {
  const { isLoaded } = useAuthentication(); // TODO: Can we use it in router action or load function?

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    isLoaded && (
      <>
        <div className="text-theme-dark w-[1280px] mx-auto">
          <Header />
          <Outlet />
        </div>
        <Footer />
      </>
    )
  );
}
