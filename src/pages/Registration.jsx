import { Link, useNavigate } from "react-router-dom";
import RegistrationImage from "../assets/registration.png";
import { useEffect, useState } from "react";
import { useRegisterMutation } from "../features/auth/authApi";
import ButtonLoading from "../components/ui/ButtonLoading";
import Error from "../components/ui/Error";
import Success from "../components/ui/Success";

import AuthLayout from "../components/common/AuthLayout";

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

  const [register, { data, isLoading, error: responseError }] = useRegisterMutation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (password !== confirm_password) {
      setError("Passwords do not match");
    } else {
      register({
        first_name, last_name, username, email, phone_no, password, confirm_password, role: "customer",
      });
    }
  };

  useEffect(() => {
    if (responseError?.data || data?.username) {
      setError(responseError?.data?.error || data?.username[0]);
    } else if (data?.success) {
      setSuccess(data?.success);
      localStorage.setItem("userEmail", data?.email);
      navigate("/account-activation");
    }
  }, [data, responseError, navigate]);

  return (
    <AuthLayout
      title="Join Tasty Trails"
      subtitle="Create an account and start exploring flavors"
      image={RegistrationImage}
      imageAlt="Registration"
      reverse={true}
    >
      <div className="space-y-4">
        {error !== "" && <Error message={error} />}
        {success !== "" && <Success message={success} />}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-gray-700 dark:text-zinc-300">First Name</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 focus:ring-2 focus:ring-orange-500/50 outline-none transition-all dark:text-white text-sm"
                required
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-gray-700 dark:text-zinc-300">Last Name</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 focus:ring-2 focus:ring-orange-500/50 outline-none transition-all dark:text-white text-sm"
                required
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-semibold text-gray-700 dark:text-zinc-300">User Name</label>
            <input
              type="text"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 focus:ring-2 focus:ring-orange-500/50 outline-none transition-all dark:text-white text-sm"
              required
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-semibold text-gray-700 dark:text-zinc-300">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 focus:ring-2 focus:ring-orange-500/50 outline-none transition-all dark:text-white text-sm"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-semibold text-gray-700 dark:text-zinc-300">Phone No</label>
            <input
              type="tel"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 focus:ring-2 focus:ring-orange-500/50 outline-none transition-all dark:text-white text-sm"
              required
              value={phone_no}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-gray-700 dark:text-zinc-300">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 focus:ring-2 focus:ring-orange-500/50 outline-none transition-all dark:text-white text-sm"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-gray-700 dark:text-zinc-300">Confirm</label>
              <input
                type="password"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 focus:ring-2 focus:ring-orange-500/50 outline-none transition-all dark:text-white text-sm"
                required
                value={confirm_password}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 transition-all active:scale-[0.98] disabled:opacity-70"
          >
            {!isLoading ? "Create Account" : <ButtonLoading />}
          </button>

          <p className="text-center text-sm text-gray-600 dark:text-zinc-400 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-500 hover:text-orange-600 font-bold underline-offset-4 hover:underline transition-all">
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Registration;
