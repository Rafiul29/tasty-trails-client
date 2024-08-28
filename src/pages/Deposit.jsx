import { useEffect, useState } from "react";
import { useDepositBalanceMutation } from "../features/users/userApi";
import ButtonLoading from "../components/ui/ButtonLoading";
import Error from "../components/ui/Error";
import Success from "../components/ui/Success";

const Deposit = () => {
  const [balance, setBalance] = useState("");
  const [card_number, setCardNumber] = useState("");
  const [expires, setExpires] = useState("");
  const [cvv, setCvv] = useState("");
  const [promocode, setPromocode] = useState("");
  const [error, setError] = useState("");

  const [depositBalance, { data, isLoading, error: responseError }] =
    useDepositBalanceMutation();

  const handelDepositBalance = (e) => {
    setError("");
    e.preventDefault();
    console.log(typeof Number(balance))

    depositBalance({
      balance: Number(balance),
    });
  };

  useEffect(() => {
    if (responseError?.data) {
      setError(responseError.data?.error);
    }
    if (data?.message) {
      setBalance("");
      setCardNumber("");
      setExpires("");
      setCvv("");
      setPromocode("");
    }
  }, [responseError, data]);
  
  return (
    <main className="pt-24 space-y-10">
      <section className="py-12">
        <div className="container md:max-w-xl mx-auto px-5  h-[calc(100vh-18rem)] flex flex-col justify-center">
          <div className="border p-10 rounded-lg ">
            <h2 className="text-3xl font-semibold md:text-4xl  mb-4 border-b pb-4">
              Deposit
            </h2>
            <div className="mb-2">
              {error && <Error message={error} />}
              {data?.message && (
                <Success
                  message={`${data.message} total balance ${data.new_balance}`}
                />
              )}
            </div>
            <form onSubmit={handelDepositBalance} className="max-w-xl mx-auto">
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Amount
                </label>
                <input
                  type="number"
                  id="amount"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:orange-blue-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer "
                  placeholder="20.00"
                  required
                  value={balance}
                  onChange={(e) => setBalance(e.target.value)}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="card_number"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Card Number
                </label>
                <input
                  type="number"
                  id="card_number"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:orange-blue-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer "
                  placeholder="1111 2222 3333 4444"
                  required
                  value={card_number}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>

              <div className="mb-5 grid md:grid-cols-2 gap-10">
                <div>
                  <label
                    htmlFor="expires"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Expires
                  </label>
                  <input
                    type="date"
                    id="expires"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:orange-blue-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer "
                    placeholder="04/17"
                    required
                    value={expires}
                    onChange={(e) => setExpires(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="cvv"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    cvv
                  </label>
                  <input
                    type="number"
                    id="cvv"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:orange-blue-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer "
                    placeholder="123"
                    required
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="promocode"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Promo Code
                </label>
                <input
                  type="text"
                  id="promocode"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:orange-blue-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer "
                  placeholder="Enter promo code"
                  required
                  value={promocode}
                  onChange={(e) => setPromocode(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="text-white bg-orange-500 hover:bg-orange-600 w-full focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800 block"
              >
                {!isLoading ? "Deposit" : <ButtonLoading />}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Deposit;
