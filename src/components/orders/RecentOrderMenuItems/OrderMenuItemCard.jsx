import { Link } from "react-router-dom";
import moment from "moment";
const OrderMenuItemCard = ({ orderdMenuItem }) => {
  const {
    price,
    created_at,
    menu_item: { id, name, image } = {},
  } = orderdMenuItem || {};

  return (
    <Link to={`/menu/${id}`}>
      <div className="p-2  rounded-md flex items-center gap-3 bg-orange-100/50 hover:bg-orange-200/50 duration-500">
        <div className="lg:h-20 lg:w-20  md:h-16 md:w-16 h-14 w-14  overflow-hidden">
          <img
            className="h-full w-full  object-cover rounded-lg"
            src={image}
            alt={name}
          />
        </div>
        <div className="">
        
            {/* show small device */}
            <h3 className="text-sm block  md:hidden ">{name}</h3>

            {/* show only medium device */}
            <h3 className="text-sm sm:hidden  lg:hidden md:block ">
              {name.slice(0, 12)}..
            </h3>

            {/* show only large device */}
            <h3 className="text-sm hidden lg:block ">
              {name.slice(0, 25)}..
            </h3>
        

          <div className="flex gap-3 mt-1 items-center justify-between">
            <p className="text-s text-orange-500 font-medium">
              ৳ {parseInt(Number(price) + (price * 2) / 100)}
            </p>
            <p className="text-xs text-gray-700">
              {moment(created_at).fromNow()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OrderMenuItemCard;
