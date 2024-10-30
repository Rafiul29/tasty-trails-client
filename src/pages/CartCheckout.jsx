import { useEffect, useState } from "react";
import { useCartCheckoutQuery } from "../features/carts/cartsApi";
import { useAddOrderMutation } from "../features/orders/ordersApi";
import ButtonLoading from "../components/ui/ButtonLoading";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Error from "../components/ui/Error";
import { useCreatePaymentMutation } from "../features/payment/paymentApi";

const CartCheckout = () => {
  const { user } = useSelector((state) => state.auth);
  const { user_id } = user || {};

  const { data } = useCartCheckoutQuery();
  const { total, tax, grand_total } = data?.result || {};

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setPhoneNo] = useState("");
  const [address_line_1, setAddressNo1] = useState("");
  const [address_line_2, setAddressNo2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postal_code, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [payment_type, setPaymentType] = useState("");

  const [error, setError] = useState("");

  const [addOrder, { data: orderData, isLoading, error: orderResponseError }] =
    useAddOrderMutation();

  const [
    createPayment,
    { data: paymentData, isLoading: paymentLoading, error: paymentError },
  ] = useCreatePaymentMutation();
 

  const handlePay = (e) => {
    e.preventDefault();
    setError("");
    if (payment_type === "Cash On Delivary") {
      addOrder({
        user: user_id,
        payment_type: payment_type,
        status: "Pending",
        payment_status: "Pending",
        delivery_address: {
          name,
          email,
          phone_no,
          address_line_1,
          address_line_2,
          city,
          state,
          postal_code,
          country,
          user: user_id,
        },
      });
    }
    if (payment_type === "Online Payment") {
      createPayment({
        user: user_id,
        total_amount: grand_total,
        payment_type: payment_type,
        status: "Pending",
        name,
        email,
        phone_no,
        address_line_1,
        address_line_2,
        city,
        state,
        postal_code,
        country,
      });
    }
  };
  console.log("paymentLoading", isLoading , !data?.result , paymentLoading,orderResponseError,paymentError?.data?.error);
  const navigate = useNavigate();

  useEffect(() => {
    if (orderData?.id) {
      navigate("/success");
    } else {
      setError(orderResponseError?.data?.error || orderResponseError?.data[0]|| paymentError?.data?.error);
  
    }
    if (paymentData?.url) {
      window.location.href = paymentData.url;
    }
  }, [orderData, navigate, orderResponseError, paymentData,paymentError]);

  return (
    <main className="main-padding">
      <div className="md:container lg:max-w-6xl mx-auto px-5 pb-10">
        <form onSubmit={handlePay}>
          <div className="grid grid-cols-1 md:grid-cols-9 gap-5">
            {/* name */}
            <div className="md:col-span-6 border p-5 rounded-lg shadow-md">
              <h3 className="text-3xl font-medium  mb-6">
                Delivery Information
              </h3>
              <div className="mb-2">{error && <Error message={error} />}</div>
              <div className="mb-2">
                <label
                  htmlFor="name"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 md:gap-6 gap-3 mb-3  md:grid-cols-2 ">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone_no"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone_no"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                    placeholder="Phone Number"
                    required
                    value={phone_no}
                    onChange={(e) => setPhoneNo(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:gap-6 gap-3 mb-3 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="address_line_1"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    id="address_line_1"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                    placeholder="Address Line 1"
                    required
                    value={address_line_1}
                    onChange={(e) => setAddressNo1(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="address_line_2"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Address Line 2
                  </label>
                  <input
                    type="text"
                    id="address_line_2"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                    placeholder="Address Line 2"
                    required
                    value={address_line_2}
                    onChange={(e) => setAddressNo2(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3 md:gap-6 mb-3 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="city"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                    placeholder="City"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                    placeholder="State"
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3 md:gap-6 mb-3 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="postal_code"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    id="postal_code"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                    placeholder="Postal Code"
                    required
                    value={postal_code}
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                    placeholder="Country "
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-3   border p-5 rounded-lg shadow-md place-self-start w-full">
              {/* cart checkout information */}
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-medium  mb-6">Order Summery </h3>
                <div className="flex justify-between">
                  <span className="font-semibold">Total price:</span>
                  <span className="font-medium">{total} ৳</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Tax</span>
                  <span className="font-medium">{tax} ৳</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">{grand_total} ৳</span>
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="payment_type"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Payment Type
                  </label>
                  <select
                    id="payment_type"
                    name="payment_type"
                    value={payment_type}
                    className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                    onChange={(e) => setPaymentType(e.target.value)}
                    required
                  >
                    <option value="">selete payment method</option>
                    <option value="Cash On Delivary">Cash On Delivary</option>
                    <option value="Online Payment">Online Payment</option>
                  </select>
                </div>
                <button
                  disabled={isLoading || !data?.result || paymentLoading}
                  type="submit"
                  className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 me-2  dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800 uppercase"
                >
          
                  {
                     (!paymentLoading && !isLoading)? "Pay Now" : <ButtonLoading />
                  }
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default CartCheckout;
