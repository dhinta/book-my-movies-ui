import { useCallback, useState } from 'react';

export enum LoadingType {
  INIT = 'init',
  LOADING = 'loading',
  LOADED = 'loaded',
}

export interface ErrorState {
  message?: string;
}

export type LoadingState = LoadingType | ErrorState;

export function useLoading(loading = LoadingType.INIT) {
  const [loadingStatus, setLoadingStatus] = useState<LoadingState>(loading);

  function setLoading(loading: LoadingState) {
    setLoadingStatus(loading);
  }

  return {
    setLoading: useCallback(setLoading, []),
    isLoading: () => loadingStatus === LoadingType.LOADING,
    isLoaded: () => loadingStatus !== LoadingType.LOADING,
    errorState: () =>
      getErrorState(loadingStatus) ? (loadingStatus as ErrorState) : null,
    setErrorState(error: Error) {
      if (getErrorState(error)) {
        setLoadingStatus(error);
      }
    },
  };
}

function getErrorState(error: LoadingState): error is ErrorState {
  return (error as ErrorState).message !== undefined;
}
