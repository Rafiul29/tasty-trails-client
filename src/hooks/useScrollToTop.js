import { useEffect } from 'react';
import { Navigate, useLocation } from "react-router-dom";

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);

  return null; 
};

export default useScrollToTop;