import { SignIn } from '@clerk/clerk-react';

export function SignInPage() {
  return (
    <div className="w-full h-[740px] flex mt-12 justify-center">
      <SignIn></SignIn>
    </div>
  );
}
