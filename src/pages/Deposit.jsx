import Footer from "../components/common/Footer";

const Deposit = () => {
  return (
    <main className="pt-24 space-y-10">
      <section className=" ">
        <div className="container md:max-w-xl mx-auto px-5  h-[calc(100vh-18rem)] flex flex-col justify-center">
          {/*  */}

          {/* left */}
          <div className="border p-10 rounded-lg ">
            <h2 className="text-3xl font-semibold md:text-4xl  mb-4 border-b pb-4">
              Deposit
            </h2>
            <form className="max-w-xl mx-auto">
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Amount
                </label>
                <input
                  type="text"
                  id="amount"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:orange-blue-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer "
                  placeholder="20.00"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="amount"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:orange-blue-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer "
                  placeholder="1111 2222 3333 4444"
                  required
                />
              </div>

              <div className="mb-5 grid md:grid-cols-2 gap-10">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Expires
                  </label>
                  <input
                    type="text"
                    id="amount"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:orange-blue-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer "
                    placeholder="04/17"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    cvv
                  </label>
                  <input
                    type="text"
                    id="amount"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:orange-blue-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer "
                    placeholder="123"
                    required
                  />
                </div>
              </div>
              <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Promo Code
                  </label>
                  <input
                    type="text"
                    id="amount"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:orange-blue-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer "
                    placeholder="Enter promo code"
                    required
                  />
                </div>
              <button
                type="submit"
                className="text-white bg-orange-500 hover:bg-orange-600 w-full focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800 block"
              >
               Deposit
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Deposit;
