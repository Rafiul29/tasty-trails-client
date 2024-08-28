import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAddMenuItemMutation } from "../features/menus/menusApi";
import { useGetCategoriesQuery } from "../features/category/categoryApi";
import ButtonLoading from "../components/ui/ButtonLoading";
import Error from "../components/ui/Error";
import Success from "../components/ui/Success";

const AddMenu = () => {
  const { user } = useSelector((state) => state.auth);
  const { user_id } = user || {};

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState("");
  const [discount, setDiscount] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const [error, setError] = useState("");

  const {
    data: menuCategory,
    isLoading,
    isError: categoryError,
  } = useGetCategoriesQuery();

  const [
    addMenuItem,
    { data, isLoading: menuAddLoading, error: responseError, isError },
  ] = useAddMenuItemMutation();

  const handleAddMenu = (e) => {
    e.preventDefault();
    setError("");
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("ingredients", ingredients);
    if (image) {
      formData.append("image", image);
    }
    formData.append("category", category);
    formData.append("discount", discount);
    formData.append("price", price);
    formData.append("slug", name.split(" ").join("-"));
    formData.append("user", user_id);

    addMenuItem(formData);
  };

  useEffect(() => {
    if (data?.id) {
      setName("");
      setDescription("");
      setIngredients("");
      setImage("");
      setCategory("");
      setPrice("");
    } else if (responseError?.data && responseError?.data?.name) {
      setError(responseError?.data?.name[0] || responseError);
    } else if (responseError?.data && responseError?.data?.slug) {
      setError(responseError?.data?.slug[0] || responseError);
    }
  }, [data, responseError]);

  return (
    <main className="main-padding ">
      <div className="md:container lg:max-w-5xl mx-auto px-5 md:pt-10 pt-5">
        <h2 className="text-3xl md:text-4xl text-center mb-4">Add New Menu</h2>
        <div>
          {data?.id && <Success message="Menu added Successfully" />}
          {error && isError && <Error message={error} />}
        </div>
        <form onSubmit={(e) => handleAddMenu(e)} encType="multipart/form-data">
          <div className="mb-3">
            <label
              htmlFor="name"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              placeholder="Title"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="description"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="3"
              name="description"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              placeholder="Write menu  decription here ....."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label
              htmlFor="ingredients"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ingredients
            </label>
            <textarea
              id="ingredients"
              name="ingredients"
              rows="2"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              placeholder="Write ingredients here comma separated value ......."
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            ></textarea>
          </div>

          <div className="grid gap-3 mb-3 grid-cols-1 md:grid-cols-2 place-content-center ">
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="image"
              >
                Upload file
              </label>
              <div>
                <input
                  className="block w-full   text-orange-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="image"
                  name="image"
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <p
                  className=" text-sm text-gray-500 dark:text-gray-300"
                  id="file_input_help"
                >
                  PNG, JPG, JPEG.
                </p>
              </div>
            </div>
            <div>
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Discount %
              </label>
              <input
                type="number"
                id="price"
                name="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                required
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Category
              </label>
              <select
                id="category"
                name="category"
                value={category}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" disabled>
                  Select Category
                </option>{" "}
                {/* Placeholder */}
                {!isLoading &&
                  !categoryError &&
                  menuCategory?.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
          >
            {!menuAddLoading ? "Submit" : <ButtonLoading />}
          </button>
        </form>
      </div>
    </main>
  );
};

export default AddMenu;
