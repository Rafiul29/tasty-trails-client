import { Link, useNavigate } from "react-router-dom";
import RegistrationImage from "../assets/registration.png";
import { useEffect, useState } from "react";
import { useRegisterMutation } from "../features/auth/authApi";
import ButtonLoading from "../components/ui/ButtonLoading";
import Error from "../components/ui/Error";
import Success from "../components/ui/Success";

const Registration = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [register, { data, isLoading, error: responseError }] =
    useRegisterMutation();

  //submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (password !== confirm_password) {
      setError("Password do not match");
    } else {
      register({
        first_name,
        last_name,
        username,
        email,
        phone_no,
        password,
        confirm_password,
        role: "customer",
      });
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (responseError?.data || data?.username) {
      setError(responseError?.data?.error || data?.username[0]);
    } else if (data?.success) {
      setSuccess(data?.success);
      localStorage.setItem("userEmail", data?.email);
      navigate("/account-activation");
    }
  }, [data, responseError, navigate]);

  useEffect(() => {
    if (data?.success) {
      setFirstName("");
      setLastName("");
      setUserName("");
      setEmail("");
      setPhoneNo("");
      setPassword("");
      setConfirmPassword("");
    }
  }, [data?.success]);

  return (
    <main className="main-padding">
      <section className=" h-[calc(100vh-10rem)] md:h-[calc(100vh-15rem)] flex items-center">
        <div className="wrapper lg:w-3/5">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 gap-0 items-center">
            {/* col-1  registation form*/}
            <div>
              <h2 className="text-center text-2xl  md:text-3xl font-extrabold text-gray-900 mb-3">
                Create your account
              </h2>
              <div>
                {error !== "" && <Error message={error} />}
                {success !== "" && <Success message={success} />}
              </div>

              <form className="" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-2 group">
                    <label
                      htmlFor="first_name"
                      className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light"
                      placeholder="Enter your first name"
                      required
                      value={first_name}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="relative z-0 w-full mb-2 group">
                    <label
                      htmlFor="last_name"
                      className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light"
                      placeholder="Enter your first name"
                      required
                      value={last_name}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="relative z-0 w-full mb-2 group">
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
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="relative z-0 w-full mb-2 group">
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light"
                    placeholder="Enter your email address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="relative z-0 w-full mb-2 group">
                  <label
                    htmlFor="phone_no"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone No
                  </label>
                  <input
                    type="tel"
                    id="phone_no"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light"
                    placeholder="Enter your phone number"
                    required
                    value={phone_no}
                    onChange={(e) => setPhoneNo(e.target.value)}
                  />
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-2 group">
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="relative z-0 w-full mb-2 group">
                    <label
                      htmlFor="confirm_password"
                      className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirm_password"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light"
                      placeholder="Enter your confirm password"
                      required
                      value={confirm_password}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
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
                    <span> Already have an account? </span>
                    <Link
                      to="/login"
                      className="font-medium text-orange-500 ml-2 underline"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
            {/* col-2 */}
            <div className="overflow-hidden md:block hidden">
              <img
                className="h-full w-full object-cover"
                src={RegistrationImage}
                alt="registration image"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Registration;
