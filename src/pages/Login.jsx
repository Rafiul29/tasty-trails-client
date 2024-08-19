import { Link } from "react-router-dom";
import LoginImage from "../assets/login.png";
import { useState } from "react";
import { useLoginMutation } from "../features/auth/authApi";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const[login,{data}]=useLoginMutation()

  const handleLogin = (e) => {
    e.preventDefault();
    login({
      username,
      password
    })
  };
  console.log(data)

  return (
    <section className="h-[calc(100vh-9rem)] flex justify-center items-center ">
      <div className="wrapper lg:w-3/5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 gap-0  items-center">
          {/* col-1  login form*/}
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-3">
            Sign in to your account
            </h2>
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
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
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
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Enter your password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
                <p className="">
                  <span className="text-rose-500">Don't have an account? </span>
                  <Link
                    to="/register"
                    className="font-medium text-violet-700 ml-2 underline"
                  >
                    Register Now
                  </Link>
                </p>
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
  );
};

export default Login;
