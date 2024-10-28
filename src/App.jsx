import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes.jsx';
import useAuthCheck from './hooks/useAuthCheck';
import Loading from './components/ui/Loading';

import useScrollToTop from './hooks/useScrollToTop.js';



function App() {
  const authChecked = useAuthCheck();  
  useScrollToTop()
  return !authChecked ? (
    <div className="min-h-screen flex justify-center items-center">
      <Loading />
    </div>
  ) : (
    <div>
      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
