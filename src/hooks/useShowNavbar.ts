import { useEffect, useState } from 'react';

const useShowNavbar = () => {
  const [showNavbarBlur, setShowNavbarBlur] = useState(false);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      (e.currentTarget as Window).scrollY > 20
        ? setShowNavbarBlur(true)
        : setShowNavbarBlur(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return showNavbarBlur;
};

export default useShowNavbar;
