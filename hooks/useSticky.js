import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref, and a stateful value bound to the ref
 * @returns [Any, Boolean]
 */

export function useSticky() {
  const stickyRef = useRef(null);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const eventsToBind = [
      [document, 'scroll'],
      [window, 'resize'],
      [window, 'orientationchange'],
    ];
    function observe() {
      const refPageOffset = stickyRef.current?.getBoundingClientRect().top;
      const stickyOffset = stickyRef.current
        ? parseInt(getComputedStyle(stickyRef.current).top)
        : 0;
      const stickyActive = refPageOffset <= stickyOffset;
      if (stickyActive && !sticky) setSticky(true);
      else if (!stickyActive && sticky) setSticky(false);
    }
    observe();
    // Bind events
    eventsToBind.forEach((eventPair) => {
      eventPair[0].addEventListener(eventPair[1], observe);
    });
    return () => {
      eventsToBind.forEach((eventPair) => {
        eventPair[0].removeEventListener(eventPair[1], observe);
      });
    };
  }, [stickyRef, sticky]);

  return [stickyRef, sticky];
}
