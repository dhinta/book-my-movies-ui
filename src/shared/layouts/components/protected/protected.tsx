import { useUser } from '@clerk/clerk-react';
import { Loader } from '@common/components';
import { LoadingType, useLoading } from '@common/hooks/loading';
import { hasPermission } from '@common/utils';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  permission: string;
  link?: string;
}

export function Protected({
  children,
  permission,
  link = '/',
}: Props): JSX.Element {
  const [permissions, setPermissions] = useState<string[]>([]);
  const { isLoading, setLoading } = useLoading();

  const { user } = useUser();

  useEffect(() => {
    async function getOrg() {
      if (user) {
        setLoading(LoadingType.LOADING);
        const { data } = await user.getOrganizationMemberships();
        const permissionList = data.length
          ? (data[0].permissions as string[])
          : [];
        setPermissions(permissionList);
        setLoading(LoadingType.LOADED);
      }
    }
    getOrg();
  }, [user, setLoading]);

  const fallbackElem = (
    <p className="flex justify-center h-screen text-3xl">
      You do not have the permissions to perform this action. Click
      <Link className="text-blue-500 mx-2" to={link}>
        here
      </Link>
      to go back.
    </p>
  );

  if (isLoading())
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
        <Loader />
      </div>
    );

  return hasPermission(permissions, permission) ? (
    <>{children}</>
  ) : (
    fallbackElem
  );
}
