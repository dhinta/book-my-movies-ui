import logo from '@/assets/images/logo.png';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="flex container items-center py-3">
      <Link to={'/'} className="w-28">
        <img src={logo} alt="logo" />
      </Link>
    </header>
  );
}
