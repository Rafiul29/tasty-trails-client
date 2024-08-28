import { Link } from "react-router-dom";
import menuImage from "../../assets/login.png";

const Menucard = ({ menu }) => {
  const { id, name, description, image, price, discount } = menu || {};

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/menu/${id}`}>
        <img className="rounded-t-lg h-44 w-full" src={image} alt={name} />
      </Link>

      <div className="p-3">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
          {name.slice(0, 20)} ...
        </h5>
        <p className="mb-3 text-sm  tracking-wider text-gray-700 dark:text-gray-400">
          {description.slice(0, 60)} ....
        </p>
        <div className="flex justify-between items-center gap-4">
          <Link
            to={`/menu/${id}`}
            className="inline-flex uppercase items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-500 dark:focus:ring-orange-600"
          >
            view recipe
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>

          <p className=" flex gap-2">
            <span className="text-xl text-orange-500 font-medium">
              ৳{Number(price - (price * discount) / 100)}
            </span>
            <span className="mt-3 text-gray-800 text-xs font-medium">
              {discount !== 0 && `-${discount}%`}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menucard;
