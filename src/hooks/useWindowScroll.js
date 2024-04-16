import { useState, useEffect } from 'react';

const useWindowScroll = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  function handleScroll() {
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollY;
};

export default useWindowScroll;
