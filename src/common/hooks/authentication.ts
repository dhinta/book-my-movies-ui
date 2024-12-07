import { useAuth } from '@clerk/clerk-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface UseAuthentication {
  isLoaded: boolean;
}

export function useAuthentication(): UseAuthentication {
  const { isLoaded, isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate('/auth');
    }
  }, [navigate, isLoaded, isSignedIn]);

  return {
    isLoaded,
  };
}
