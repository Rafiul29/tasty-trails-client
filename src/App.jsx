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

  // If auth isn't checked yet, we show the loading state
  if (!authChecked) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-zinc-950">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      {!isLoading && <RouterProvider router={router} />}
    </>
  );
}

export default App;
