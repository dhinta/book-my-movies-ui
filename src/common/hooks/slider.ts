import { NavigationDirection } from '@common/models';
import { useEffect, useState } from 'react';

export function useSlider<T>(
  data: T[],
  ref: React.RefObject<HTMLElement>,
  cardClassName: string,
) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCardsNum, setVisibleCardsNum] = useState(0);
  const [left, setLeft] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const sliderWidth = ref.current.offsetWidth;
    const cardWidth = (ref.current.querySelector(cardClassName) as HTMLElement)!
      .offsetWidth;
    const visibleCardsNum = Math.floor(sliderWidth / cardWidth);

    setVisibleCardsNum(visibleCardsNum);
  }, [ref, cardClassName]);

  useEffect(() => {
    if (!ref.current) return;
    const card = (ref.current.querySelector(cardClassName) as HTMLElement)!;
    const cardWidth = card.offsetWidth;
    const cardMargin =
      parseInt(window.getComputedStyle(card).marginRight) +
      parseInt(window.getComputedStyle(card).marginLeft);
    const cardTotalWidth = cardWidth + cardMargin;

    const left = currentIndex * cardTotalWidth * -1;
    setLeft(left || 0);
  }, [currentIndex, ref, cardClassName]);

  return {
    currentIndex,
    setCurrentIndex,
    visibleCardsNum,
    left,
    onNavigate: (direction: NavigationDirection) => {
      if (direction === NavigationDirection.LEFT) {
        const remainder = currentIndex % visibleCardsNum;
        const updatedIndex =
          remainder === 0
            ? currentIndex - visibleCardsNum
            : currentIndex - remainder;
        setCurrentIndex(updatedIndex);
      } else if (direction === NavigationDirection.RIGHT) {
        const shouldSliderPartialMove =
          currentIndex + visibleCardsNum * 2 > data.length;
        const updatedIndex = shouldSliderPartialMove
          ? data.length - currentIndex
          : currentIndex + visibleCardsNum;
        setCurrentIndex(updatedIndex);
      }
    },
  };
}
