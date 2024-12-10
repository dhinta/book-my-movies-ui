import { Loader } from '@/common/components';
import { Alert, AlertDescription } from '@/vendors/ui/alert';
import { useUser } from '@clerk/clerk-react';
import { UserResource } from '@clerk/types';
import { LoadingType, useLoading } from '@common/hooks/loading';
import { AlertCircle } from 'lucide-react';
import { GeneralInfoModel } from '../../models/profile.model';
import { ChangePassword } from '../change-password/change-password';
import { GeneralInfo } from '../general-info/general-info';

export function Profile() {
  const { setLoading, isLoading, errorState, setErrorState } = useLoading();
  const { user } = useUser();
  const passwordError = errorState()?.message;

  console.log(passwordError);

  const onGeneralInfoUpdate = async (data: GeneralInfoModel) => {
    if (user) {
      setLoading(LoadingType.LOADING);
      await user
        .update({
          firstName: data.firstName!,
          lastName: data.lastName!,
        })
        .catch(error => setErrorState(error));
      setLoading(LoadingType.LOADED);
    }
  };

  const onPasswordUpdate = async (
    currentPassword: string,
    newPassword: string,
  ) => {
    if (user) {
      setLoading(LoadingType.LOADING);
      try {
        await user.updatePassword({
          currentPassword,
          newPassword,
          signOutOfOtherSessions: true,
        });
        setLoading(LoadingType.LOADED);
      } catch (error) {
        setErrorState(error as unknown as Error);
      }
    }
  };

  const overlayElement = (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <Loader />
    </div>
  );

  return (
    user && (
      <>
        {isLoading() ? overlayElement : null}
        <div className="flex flex-col mb-8">
          <h1 className="text-2xl font-semibold my-8">Update Profile</h1>
          {errorState() ? (
            <Alert variant="destructive" className="my-4 flex items-center">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Error Processing Request - {errorState()?.message}
              </AlertDescription>
            </Alert>
          ) : null}
          <div className="flex justify-between">
            <div className="flex flex-col w-1/2">
              <GeneralInfo
                user={user as UserResource}
                onUpdate={onGeneralInfoUpdate}
              />
              <ChangePassword onUpdate={onPasswordUpdate} />
            </div>
          </div>
        </div>
      </>
    )
  );
}
