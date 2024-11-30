import { Button } from '@/vendors/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Props {
  images: string[];
}

export function Carousel({ images }: Props): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const [left, setLeft] = useState(0);
  const [assets, setAssets] = useState(images);
  useEffect(() => {
    const mid = Math.floor(assets.length / 2);
    const imagesWidth = ref.current!.querySelector('img')!.width;
    const spaceOnLeft = (window.innerWidth - imagesWidth) / 2;
    const calculatedLeft = imagesWidth * (mid * -1) + spaceOnLeft;
    setLeft(calculatedLeft);
  }, [assets]);

  return (
    <div className="relative h-[288px]" ref={ref}>
      <Button
        variant="secondary"
        className="absolute top-1/2 left-2 z-10 opacity-50"
        onClick={() => {
          const lastElement = assets.pop()!;
          assets.unshift(lastElement);
          setAssets([...assets]);
        }}
      >
        <ChevronLeft size={28} />
      </Button>
      <Button
        variant="secondary"
        className="absolute top-1/2 right-2 z-10 opacity-50"
        onClick={() => {
          const firstElement = assets.shift()!;
          assets.push(firstElement);
          setAssets([...assets]);
        }}
      >
        <ChevronRight size={28} />
      </Button>
      <div className="absolute top-0 left-0 flex" style={{ left }}>
        {assets.map(asset => (
          <img
            src={`/images/${asset}`}
            alt={asset}
            key={asset}
            className="min-w-[1280px] h-[300px] shadow shadow-black-500/40"
          />
        ))}
      </div>
    </div>
  );
}
