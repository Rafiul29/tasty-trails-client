import { Link } from "react-router-dom";
import menuImage from "../../assets/login.png";

const Menucard = ({ menu }) => {
  const {id,name,description,image,price,}=menu||{}

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg h-56 w-full" src={image} alt="" />
      </a>
      <div className="p-5 ">
        <a href="#">
          <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
            {name.slice(0,20)}  ...
          </h5>
        </a>
        <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
          {description.slice(0,60)} ....
        </p>
        <div className="flex justify-between items-center">
          <Link to={`/menu/${id}`}  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-500 dark:focus:ring-orange-600">
          Read more
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
    
        <p>{price}</p>
        </div>
      
      </div>
    </div>
  );
};

export default Menucard;
