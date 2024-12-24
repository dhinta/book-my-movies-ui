import { hasPermission } from '@/common/utils';
import { useUser } from '@clerk/clerk-react';
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

  const { user } = useUser();

  useEffect(() => {
    async function getOrg() {
      if (user) {
        const { data } = await user.getOrganizationMemberships();
        const permissionList = data[0].permissions as string[];
        setPermissions(permissionList);
      }
    }
    getOrg();
  }, [user]);

  const fallbackElem = (
    <p className="flex justify-center h-screen text-3xl">
      You do not have the permissions to perform this action. Click
      <Link className="text-blue-500 mx-2" to={link}>
        here
      </Link>
      to go back.
    </p>
  );

  return hasPermission(permissions, permission) ? (
    <>{children}</>
  ) : (
    fallbackElem
  );
}
