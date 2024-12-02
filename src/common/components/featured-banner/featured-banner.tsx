import { Link } from 'react-router-dom';

export function FeaturedBanner() {
  return (
    <Link to="/movies/disney">
      <div className="w-full bg-gray-200 my-8 relative">
        <img src="/images/disney.png" alt="Featured Banner" />
        <div className="absolute w-full bottom-0 left-0 right-0 transform text-center text-white before:content-[''] before:block before:w-full before:h-[60px] before:p-4 before:opacity-50 before:bg-black">
          <p className="text-lg absolute w-full bottom-3 left-0 right-0 ">
            Discover the magic of Disney & Pixar
          </p>
        </div>
      </div>
    </Link>
  );
}
