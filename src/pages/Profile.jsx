import { useSelector } from "react-redux";
import userProfileImage from "../assets/user.png";
import { useGetUserProfileQuery } from "../features/users/userApi";
import Error from "../components/ui/Error";
const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const { user_id } = user || {};
  console.log(user_id);

  const {
    data: userProfile,
    isLoading,
    isError,
    error,
  } = useGetUserProfileQuery(user_id);

  // what do render
  let content = null;
  if (isLoading) {
    content = (
      <div
        role="status"
        className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
      >
        <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <div className="flex items-center mt-4">
          <svg
            className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  } else if (!isLoading && isError) {
    content = <Error message={error} />;
  } else if (!isLoading && !isError && !userProfile?.id) {
    content = <Error message="user not found" />;
  } else if (!isLoading && !isError && userProfile?.id) {
    content = (
      <div className="w-full max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  overflow-hidden">
      <div className="p-10 flex flex-col space-y-5">
        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={userProfileImage}
            alt="user image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {userProfile.first_name} {userProfile.last_name}
          </h5>
          <span>{userProfile.role}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <p>User Name</p>
          <p>{userProfile.username}</p>
        </div>
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <p>Email</p>
          <p>{userProfile.email}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <p>Phone Number</p>
          <p>{userProfile.phone_no}</p>
        </div>
      </div>
    </div>
    )
  }

  return (
    <main className="main-padding">
      <div className="wrapper flex justify-center items-center">
       {content}
      </div>
    </main>
  );
};

export default Profile;
