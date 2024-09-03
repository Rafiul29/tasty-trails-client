import { Link} from "react-router-dom";

const Verified = () => {
  
  return (
    <main className="main-padding">
      <div className="md:mt-10 flex flex-col justify-center items-center gap-3">
        <svg
          className="w-28 h-28 text-orange-500 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <p className="font-medium text-xl tracking-wider">Email Verified successfully</p>
        <Link
          to="/login"
          class="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"
        >
          Login
        </Link>
      </div>
    </main>
  );
};

export default Verified;
