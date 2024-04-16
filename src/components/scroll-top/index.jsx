import React from 'react';
import { StyledScrollToTop } from './index.styled';
import { FaArrowUpLong } from 'react-icons/fa6';
import useScroll from '../../hooks/useWindowScroll';

const ScrollToTop = () => {
  const scrollY = useScroll();

  const handleScfollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return scrollY > 100 ? (
    <StyledScrollToTop
      size='large'
      type='primary'
      icon={<FaArrowUpLong />}
      onClick={handleScfollToTop}
    />
  ) : null;
};

export default ScrollToTop;
