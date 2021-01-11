import React, { useCallback, useRef, useEffect, useState } from 'react';
import { rhythm } from '../../utils/typography';
import './index.scss';
import { Item } from './item';

export const Category = ({ categories, category, selectCategory }) => {
  const containerRef = useRef<HTMLUListElement>(null);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const scrollToCenter = useCallback(
    tabRef => {
      const { offsetWidth: tabWidth } = tabRef.current;
      const { scrollLeft, offsetWidth: containerWidth } = containerRef.current;
      const tabLeft = tabRef.current.getBoundingClientRect().left;
      const containerLeft = containerRef.current.getBoundingClientRect().left;
      const refineLeft = tabLeft - containerLeft;
      const targetScollX = scrollLeft + refineLeft - containerWidth / 2 + tabWidth / 2;

      containerRef.current.scroll({ left: targetScollX, top: 0, behavior: 'smooth' });
    },
    [containerRef],
  );

  const handleMouseDown = (event: React.MouseEvent<HTMLUListElement>) => {
    if (containerRef.current) {
      const { offsetLeft, scrollLeft } = containerRef.current;
      setStartX(event.pageX - offsetLeft);
      setScrollLeft(scrollLeft);
      setIsMouseDown(true);
    }
  };
  const handleMouseLeave = (): void => {
    setIsMouseDown(false);
  };
  const handleMouseUp = (): void => {
    setIsMouseDown(false);
  };
  const handleMouseMove = (event: React.MouseEvent<HTMLUListElement>) => {
    if (!isMouseDown) return;
    event.preventDefault();

    if (containerRef.current) {
      const { offsetLeft } = containerRef.current;
      const currentX = event.pageX - offsetLeft;
      const walk = (currentX - startX) * 1; //scroll-fast
      containerRef.current.scrollTo({
        left: scrollLeft - walk,
        behavior: 'smooth',
      });
    }
  };

  return (
    <ul
      ref={containerRef}
      className="category-container"
      role="tablist"
      id="category"
      style={{
        margin: `0 -${rhythm(3 / 4)}`,
      }}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <Item title={'All'} selectedCategory={category} onClick={selectCategory} scrollToCenter={scrollToCenter} />
      {categories.map((title, idx) => (
        <Item
          key={idx}
          title={title}
          selectedCategory={category}
          onClick={selectCategory}
          scrollToCenter={scrollToCenter}
        />
      ))}
    </ul>
  );
};
