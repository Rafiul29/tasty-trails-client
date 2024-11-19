const LoginCredentialsModal = ({ onClose }) => {
  return (
    <>
      <div
        id="default-modal"
        className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-50"
      >
        <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-2 md:p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Login Credentials
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-2  space-y-2">
            <div className="border-b p-2 space-y-1">
              <h2 className=" text-md font-semibold "> Admin Credentials</h2>
              <p className="space-x-2">
                <span>User Name: </span>{" "}
                <span className="text-orange-400">rafi</span>
              </p>
              <p className="space-x-2 ">
                <span>Password: </span>{" "}
                <span className="text-orange-400">123</span>
              </p>
            </div>

            <div className=" p-2 space-y-1">
              <h2 className=" text-md font-semibold "> Customer Credentials</h2>
              <p className="space-x-2">
                <span>User Name: </span>{" "}
                <span className="text-orange-400">rafiul29</span>
              </p>
              <p className="space-x-2 ">
                <span>Password: </span>{" "}
                <span className="text-orange-400">Rafi@#12</span>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default LoginCredentialsModal;
