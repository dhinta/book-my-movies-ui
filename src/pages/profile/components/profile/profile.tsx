import { useUser } from '@clerk/clerk-react';
import { UserResource } from '@clerk/types';
import { GeneralInfoModel } from '../../models/profile.model';
import { ChangePassword } from '../change-password/change-password';
import { GeneralInfo } from '../general-info/general-info';
import { ProfileImage } from '../profile-image/profile-image';

export function Profile() {
  const { user } = useUser();
  const onGeneralInfoUpdate = (data: GeneralInfoModel) => {
    if (user) {
      console.log(data);
      user.update({
        firstName: data.firstName!,
        lastName: data.lastName!,
      });
    }
  };

  return (
    user && (
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold my-8">Update Profile</h1>
        <div className="flex justify-between">
          <div className="flex flex-col w-1/2">
            <GeneralInfo
              user={user as UserResource}
              onUpdate={onGeneralInfoUpdate}
            />
          </div>
          <div className="w-1/2 flex flex-col justify-end">
            <ChangePassword />
            <ProfileImage />
          </div>
        </div>
      </div>
    )
  );
}
