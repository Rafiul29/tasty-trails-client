import { Link } from "react-router-dom";

const OrderMenuItemCard = ({ orderdMenuItem }) => {
  const { price, menu_item: { id, name, image } = {} } = orderdMenuItem || {};

  return (
    <Link to={`/menu/${id}`}>
      <div className="p-2  rounded-md flex lg:gap-5 gap-3 hover:bg-orange-200/50 duration-500">
        <div className="lg:h-20 lg:w-20  md:h-16 md:w-16 h-14 w-14  overflow-hidden">
          <img
            className="h-full w-full  object-cover rounded-lg"
            src={image}
            alt={name}
          />
        </div>
        <div className="content-center">
          {/* show small and medium device */}
          <h3 className="text-sm block  lg:hidden">{name.slice(0, 15)}..</h3>
          {/* show only large device */}

          <h3 className="text-sm hidden lg:block">{name.slice(0, 25)}..</h3>

          <p className="text-xl text-orange-500 font-medium">৳ {price}</p>
        </div>
      </div>
    </Link>
  );
};

export default OrderMenuItemCard;
