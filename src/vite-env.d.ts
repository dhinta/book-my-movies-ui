/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLERK_PUBLISHABLE_KEY: string;
  readonly CLERK_SIGN_IN_FORCE_REDIRECT_URL: string;
  readonly CLERK_SIGN_IN_URL: string;
  readonly CLERK_SIGN_UP_URL: string;

  readonly API_BASE_URL: string;
  readonly API_PREFIX: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
