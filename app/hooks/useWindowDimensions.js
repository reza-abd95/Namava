import { useState, useEffect, useRef } from 'react';

export default function windowDimensions() {
  const windowWidthRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const handleWindowResize = () => {
      windowWidthRef.current = window.innerWidth;
      setWindowWidth(windowWidthRef.current);
    };

    if (typeof window !== 'undefined') {
      windowWidthRef.current = window.innerWidth;
      setWindowWidth(windowWidthRef.current);
      window.addEventListener('resize', handleWindowResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleWindowResize);
      }
    };
  },[windowWidth]);


  return windowWidth;
}
