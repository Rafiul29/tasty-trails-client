import { Link } from "react-router-dom";
import notFound from '../assets/notfound.png'
const NotFound = () => {
  return (
    <main className="main-padding">
      <div className="flex justify-center items-center">
        <div className="flex ">
          <div className=" flex flex-col justify-center gap-2">
            <h2 className="text-5xl text-orange-500 font-medium tracking-wider drop-shadow-md">
              404 <br /> ERROR
            </h2>
            <p className="text-xl text-gray-700">Opps, it seems something went wrong </p>
            <Link
              to="/"
              className="self-start text-white inline-block bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-orange-600  text-center dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"
            >
              GO Back to Home
            </Link>
          </div>
          <div className="h-64 w-80 overflow-hidden">
            <img className="w-full h-full object-cover" src={notFound} alt="not foun routes" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
