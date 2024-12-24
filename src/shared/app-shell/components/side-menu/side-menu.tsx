import { Badge } from '@/vendors/ui/badge';
import { Button } from '@/vendors/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/vendors/ui/sheet';
import { useClerk, useUser } from '@clerk/clerk-react';
import { Permissions } from '@common/models';
import { hasPermission } from '@common/utils';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function SideMenu() {
  const [permissions, setPermissions] = useState<string[]>([]);
  const { user, isLoaded } = useUser();
  const { signOut, session } = useClerk();

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

  const onSignOut = async () => {
    await signOut();
    await session?.remove();
  };

  return (
    isLoaded && (
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Welcome {user?.firstName}!</SheetTitle>
            <Badge className="max-w-24">Administrator</Badge>
          </SheetHeader>

          <SheetDescription className="mt-4">
            Hi There! You can do more here
          </SheetDescription>

          <aside aria-label="Sidebar">
            <div className="h-full py-4 overflow-y-auto">
              <ul className="space-y-2 font-medium">
                <li>
                  <SheetClose asChild>
                    <Link
                      to="/dashboard"
                      className="flex items-center py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <svg
                        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 21"
                      >
                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                      </svg>
                      <span className="ms-3">Dashboard</span>
                    </Link>
                  </SheetClose>
                </li>

                <li>
                  <SheetClose asChild>
                    <Link
                      to="/profile"
                      className="flex items-center py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                      </svg>
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        Profile
                      </span>
                    </Link>
                  </SheetClose>
                </li>

                {hasPermission(permissions, Permissions.MANAGE_MOVIES) && (
                  <li>
                    <SheetClose asChild>
                      <Link
                        to="/manage/movies"
                        className="flex items-center py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-file-video-2"
                        >
                          <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                          <rect width="8" height="6" x="2" y="12" rx="1" />
                          <path d="m10 15.5 4 2.5v-6l-4 2.5" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">
                          Manage Movies
                        </span>
                      </Link>
                    </SheetClose>
                  </li>
                )}

                <li className="flex items-center py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    />
                  </svg>
                  <span className="flex-1 whitespace-nowrap">
                    <Button variant="ghost" onClick={onSignOut}>
                      Logout
                    </Button>
                  </span>
                </li>
              </ul>
            </div>
          </aside>
        </SheetContent>
      </Sheet>
    )
  );
}
