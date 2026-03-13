import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../assets/login.png";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../features/auth/authApi";
import ButtonLoading from "../components/ui/ButtonLoading";
import Error from "../components/ui/Error";
import LoginCredentialsModal from "../components/Login/LoginCredentialsModal";


import AuthLayout from "../components/common/AuthLayout";

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [login, { data, isLoading, error: responseError }] = useLoginMutation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  useEffect(() => {
    if (responseError?.data) {
      setError(responseError?.data?.error);
    }
    if (data?.token && data?.user) {
      localStorage.removeItem("userEmail");
      navigate("/");
    }
  }, [data, responseError, navigate]);

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue your tasty journey"
      image={LoginImage}
      imageAlt="Login"
    >
      {isModalOpen && (
        <LoginCredentialsModal onClose={() => setIsModalOpen(false)} />
      )}

      <div className="space-y-6">
        {error !== "" && <Error message={error} />}

        <form className="space-y-5" onSubmit={handleLogin}>
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-gray-700 dark:text-zinc-300">
              User Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition-all dark:text-white"
              placeholder="Enter your user name"
              required
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-semibold text-gray-700 dark:text-zinc-300">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition-all dark:text-white"
              placeholder="Enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 transition-all active:scale-[0.98] disabled:opacity-70"
          >
            {!isLoading ? "Sign In" : <ButtonLoading />}
          </button>

          <div className="text-center space-y-3">
            <p className="text-sm text-gray-600 dark:text-zinc-400">
              Don't have an account?{" "}
              <Link to="/register" className="text-orange-500 hover:text-orange-600 font-bold underline-offset-4 hover:underline transition-all">
                Register Now
              </Link>
            </p>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="text-xs font-medium text-orange-500/80 hover:text-orange-500 underline transition-all"
            >
              View Login Credentials
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
