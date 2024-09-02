import { Link } from "react-router-dom";

const DiscountedMenuCard = ({ dicountmenu }) => {

  const { id, name, price, image, discount } = dicountmenu || {};

  return (
    <Link to={`/menu/${id}`}>
      <div className="p-2  rounded-md flex justify-between lg:gap-5 gap-3 bg-orange-100/50 hover:bg-orange-200/50 duration-500">
        <div className="flex flex-col justify-center w-full">
          {/* show small and medium device */}
          <h3 className="text-sm block  lg:hidden">{name}</h3>
          {/* show only large device */}

          <h3 className="text-sm hidden lg:block">{name.slice(0, 30)}..</h3>

          <div className="flex items-center justify-between gap-10 mt-1">
            <p className="text-md text-orange-500 font-medium flex gap-3">
              <span className="line-through">৳{Number(price)}</span>
              <span>৳{Number(price-price*discount/100)}</span>
            </p>

            <p className="text-xs font-medium bg-orange-200 text-orange-500 px-[0.2rem] py-[0.1rem] rounded-lg">
              {" "}
              -{discount}%
            </p>
          </div>
        </div>
        <div className="lg:h-20 lg:w-20  md:h-16 md:w-16 h-14 w-14  overflow-hidden">
          <img
            className="h-full w-full  object-cover rounded-lg"
            src={image}
            alt={name}
          />
        </div>
      </div>
    </Link>
  );
};

export default DiscountedMenuCard;
