const Success = ({message}) => {
  return (
    <>
      <div
        className="p-3 mb-2 text-sm text-green-900 rounded-lg bg-green-100 dark:bg-gray-800 dark:text-green-400"
        role="alert"
      >
        <span className="block text-sm font-medium">{message}</span>
      </div>
    </>
  );
};

export default Success;
