import { Link } from "react-router-dom";

const MostFavoruriteMenuCard = ({ mostfavmenu }) => {
  const { menu_item: { id: menuId, name, image, discount, price } = {} } =
    mostfavmenu;

  return (
    <Link to={`/menu/${menuId}`}>
      <div className="rounded-md flex lg:flex-col lg:gap-1 gap-3 bg-orange-100/50 hover:bg-orange-200/50  overflow-hidden duration-500 p-2 lg:p-0">
        <div className="lg:h-24 lg:w-full  md:h-16 md:w-16 h-14 w-14  overflow-hidden md:rounded-md">
          <img
            className="h-full w-full  object-cover "
            src={image}
            alt={name}
          />
        </div>
        <div className="content-center lg:p-2">
          {/* show small and medium device */}
          <h3 className="text-sm block  lg:hidden">{name}</h3>
          {/* show only large device */}

          <h3 className="text-sm h-5 hidden lg:block overflow-hidden">
            {name.slice(0, 20)}..
          </h3>

          <p className="text-md text-orange-500 font-medium">৳ {price}</p>
        </div>
      </div>
    </Link>
  );
};

export default MostFavoruriteMenuCard;
