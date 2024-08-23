import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAddFavouriteMutation } from "../../features/favourite/favouriteApi";
import { useAddToCartItemMutation } from "../../features/carts/cartsApi";

const MenuItem = ({ menuitem }) => {
  const { id, name, description, ingredients, image, price } = menuitem || {};

  //
  const { user } = useSelector((state) => state.auth);
  const { user_id } = user || {};

  const navigate = useNavigate();

  const [
    addFavourite,
    { data: favouriteData, isLoading: addFavouriteLoading },
  ] = useAddFavouriteMutation();

  // save menu item
  const handleSaveAsFavourite = (id) => {
    if (!user_id) {
      navigate("/login", { state: { from: `/menu/${id}` } });
    } else {
      addFavourite({
        user: user_id,
        menu_item: id,
      });
      navigate("/favourite");
    }
  };

  const [addToCartItem, { data: addToCartData }] = useAddToCartItemMutation();

  console.log(addToCartData);

  const handleAddToCart = (id) => {
    if (!user_id) {
      navigate("/login", { state: { from: `/menu/${id}` } });
    } else {
      addToCartItem({
        user: user_id,
        menu_item: id,
      });
      navigate("/carts");
    }
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 h-100">
        {/* left  */}
        <div className="img overflow-hidden rounded-xl ">
          <img
            className="w-full  block rounded-xl h-96 hover:scale-105 duration-300"
            src={image}
            alt={name}
          />
        </div>
        {/* right */}
        <div className="space-y-4 place-content-center">
          <h3
            className="text-2xl md:text-3xl tracking-wider 
            font-medium text-orange-400"
          >
            {name}
          </h3>
          <p className="text-lg tracking-wide text-gray-800">{description}</p>
          <p className="space-x-3 text-xl">
            <span className="text-gray-900 font-medium">Price:</span>{" "}
            <span className="text-orange-500 font-semibold">{price} ৳</span>
          </p>
          <div className="">
            <button
              onClick={() => handleAddToCart(id)}
              type="button"
              className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center me-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            >
              <svg
                className="w-5 h-5 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 21"
              >
                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
              </svg>
              Add To Cart
            </button>
            <button
              disabled={addFavouriteLoading}
              onClick={() => handleSaveAsFavourite(id)}
              type="button"
              className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center me-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            >
              <svg
                className="w-5 h-5 me-2 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
              </svg>
              Save as Favorite
            </button>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <h4 className="capitalize text-2xl font-medium text-gray-900">ingredients:</h4>
        <div className="space-y-1 text-lg tracking-wider text-gray-700">
          {ingredients.split(",").map((item, i) => (
            <p className="flex gap-2 items-center" key={i}>
              {" "}
              <svg
                className="rtl:rotate-180 w-3.5 h-4 ms-2 text-orange-400"
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
              <span>{item}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
