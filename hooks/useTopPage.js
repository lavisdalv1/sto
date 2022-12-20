import { useState, useEffect } from 'react';

export const useTopPage = () => {
  const [border, setBorder] = useState(false);

  useEffect(() => {
    const PagesXscroll = () => {
      if (window.pageYOffset > 0) {
        setBorder(true);
      } else if (window.pageYOffset === 0) {
        setBorder(false);
      }
    };

    const pageScroll = () => {
      window.addEventListener('scroll', PagesXscroll);
    };
    pageScroll();

    return () => {
      window.removeEventListener('scroll', PagesXscroll);
    };
  }, []);

  return border;
};
