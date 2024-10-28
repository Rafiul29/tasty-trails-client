import { Link } from "react-router-dom";

const Cancle = () => {
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
            d="M6 18 17.94 6M18 18 6.06 6"
          />
        </svg>

        <p className="font-medium text-xl tracking-wider">Cancle</p>
        <Link
          to="/carts"
          className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"
        >
          go back to carts
        </Link>
      </div>
    </main>
  );
};

export default Cancle;
