import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.jsx";
import useAuthCheck from "./hooks/useAuthCheck";
import Loading from "./components/ui/Loading";

import useScrollToTop from "./hooks/useScrollToTop.js";
import { useLoading } from "./hooks/useLoading.js";
import { LoadingScreen } from "./components/LoadingScreen.jsx";

function App() {
  const authChecked = useAuthCheck();
  const isLoading = useLoading();

  useScrollToTop();


  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
