import { Carousel, FeaturedBanner } from '@common/components';
import { RecommendedList } from '../recommended-list/recommended-list';
import { UpcomingList } from '../upcoming-list/upcoming-list';

export function Home() {
  const images = ['card.jpg', 'food.jpg', 'joker.jpg', 'offer.jpg'];
  return (
    <>
      <Carousel images={images} />
      <div className="max-w-[1280px] mx-auto">
        <RecommendedList />
        <FeaturedBanner />
        <UpcomingList />
      </div>
    </>
  );
}
