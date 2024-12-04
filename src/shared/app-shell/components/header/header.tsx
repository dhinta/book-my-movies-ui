import logo from '@/assets/images/logo.png';
import { Button } from '@/vendors/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/vendors/ui/select';

import { SignedIn, SignedOut, useClerk } from '@clerk/clerk-react';
import { Menu, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  const { openSignIn } = useClerk();

  return (
    <header className="flex items-center py-3 max-w-[1280px] mx-auto">
      <Link to={'/'} className="w-28">
        <img src={logo} alt="logo" />
      </Link>

      <div className="relative ml-8 w-2/3">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="search"
          name="q"
          placeholder="Search..."
          className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          aria-label="Search"
          autoComplete="off"
        />
      </div>

      <SignedOut>
        <Button
          className="bg-red-600 ml-8 text-white h-10"
          onClick={() => openSignIn()}
        >
          Signin
        </Button>
      </SignedOut>

      <Select>
        <SelectTrigger className="w-[150px] h-10 ml-8">
          <SelectValue placeholder="City" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Hyderabad</SelectItem>
          <SelectItem value="dark">Kolkata</SelectItem>
          <SelectItem value="system">Bengaluru</SelectItem>
        </SelectContent>
      </Select>

      <SignedIn>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
      </SignedIn>
    </header>
  );
}
