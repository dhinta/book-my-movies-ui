import { useAuth } from '@clerk/clerk-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface UseAuthentication {
  isLoaded: boolean;
}

export function useAuthentication(): UseAuthentication {
  const { isLoaded, isSignedIn, ...rest } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate('/auth');
    }
  }, [navigate, isLoaded, isSignedIn]);

  console.log(rest);

  return {
    isLoaded,
  };
}
