import { Footer, Header } from '@/shared/app-shell';
import { useSignIn } from '@clerk/clerk-react';
import { Outlet, useNavigate } from 'react-router-dom';

export function PrivateLayout() {
  const { isLoaded, signIn } = useSignIn();
  const navigate = useNavigate();

  if (!isLoaded) return;

  if (signIn.status === null) {
    navigate('/auth');
  }

  return (
    <div className="text-theme-dark">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
