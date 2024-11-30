import { Carousel } from '@/common/components';

export function Home() {
  const images = ['card.jpg', 'food.jpg', 'joker.jpg', 'offer.jpg'];
  return (
    <>
      <Carousel images={images} />
    </>
  );
}
