
const Error = ({message}) => {
  return (
    <div className="p-3 mt-2 text-sm text-red-600 rounded-lg bg-red-200 dark:bg-gray-800 dark:text-red-400" role="alert">
    <span className="font-medium block text-sm">{message}</span>
  </div>
  )
}

export default Error