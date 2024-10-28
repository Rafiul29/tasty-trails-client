// import { useEffect } from 'react';
// import { Navigate, useLocation } from "react-router-dom";

// const useScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };

// export default useScrollToTop;

import { useEffect } from "react";
import { router } from "../routes/routes";

const useScrollToTop = () => {
  useEffect(() => {
    const unlisten = router.subscribe(() => {
      // Scroll to top when the route changes
      window.scrollTo(0, 0);
    });

    return () => {
      // Clean up the subscription
      unlisten();
    };
  }, []);
};

export default useScrollToTop;
