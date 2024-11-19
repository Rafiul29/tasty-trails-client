import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../assets/login.png";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../features/auth/authApi";
import ButtonLoading from "../components/ui/ButtonLoading";
import Error from "../components/ui/Error";
import LoginCredentialsModal from "../components/Login/LoginCredentialsModal";


const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [login, { data, isLoading, error: responseError }] = useLoginMutation();

  const handleLogin = (e) => {
    e.preventDefault();
    login({
      username,
      password,
    });
  };
  const navigate = useNavigate();
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
    <main className="pt-24">
      <section className=" h-[calc(100vh-16rem)] flex items-center">
        <div className="wrapper lg:w-3/5  ">
        {isModalOpen &&  (
          <LoginCredentialsModal  onClose={() => setIsModalOpen(false)} />
        )}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 gap-0  items-center">
            {/* col-1  login form*/}
            <div>
              <h2 className="text-center text-2xl  md:text-3xl font-extrabold text-gray-900 mb-3">
                Sign in to your account
              </h2>
              <div className="max-w-md mx-auto">
                {error !== "" && <Error message={error} />}
              </div>
              <form className="max-w-md mx-auto" onSubmit={handleLogin}>
                <div className="relative z-0 w-full mb-3 group">
                  <label
                    htmlFor="username"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    User Name
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light"
                    placeholder="Enter your user name"
                    required
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>

                <div className="relative z-0 w-full mb-3 group">
                  <label
                    htmlFor="password"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light"
                    placeholder="Enter your password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                  >
                    {!isLoading ? "Submit" : <ButtonLoading />}
                  </button>
                  <p className="">
                    <span>Don't have an account? </span>
                    <Link
                      to="/register"
                      className="font-medium text-orange-500 ml-2 underline"
                    >
                      Register Now
                    </Link>
                  </p>
                  <p onClick={()=>setIsModalOpen(!isModalOpen)} className="cursor-pointer underline text-orange-500">Login Credentials</p>
                </div>
              </form>

            </div>

            {/* col-2 */}
            <div className="overflow-hidden md:block hidden">
              <img
                className="h-full w-full object-cover"
                src={LoginImage}
                alt="Login image"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
