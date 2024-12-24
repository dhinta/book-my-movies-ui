import { useAuth } from '@clerk/clerk-react';
import axios, { AxiosInstance } from 'axios';
let INSTANCE: AxiosInstance | null = null;

export function useApi() {
  const { getToken } = useAuth();

  if (INSTANCE) return INSTANCE;

  const newInstance = axios.create({
    baseURL: `${import.meta.env.BMM_API_BASE_URL}/${import.meta.env.BMM_API_PREFIX}`,
    timeout: 5000,
    headers: {
      'X-Client-Name': 'bmm',
    },
  });

  newInstance.interceptors.request.use(async function (config) {
    const token = await getToken();
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  });

  INSTANCE = newInstance;

  return INSTANCE;
}
