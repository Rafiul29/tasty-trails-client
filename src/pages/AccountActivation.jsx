import { Link } from "react-router-dom";

const AccountActivation = () => {

  const userEmail=localStorage.getItem('userEmail')

  return (
    <main className="main-padding">
      <div className="wrapper md:w-2/4  xl:w-1/4 text-center space-y-5 mt-10 md:mt-0">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-800 tracking-wider">
          Almost there ...
        </h2>
        <p className="text-gray-700">
          Please check email(
          <span className="font-medium text-orange-600">{userEmail&& userEmail}</span>) <br />{" "}
          to confirm your account
        </p>
        <hr />
        <p className="text-gray-700">
          if <span className="font-medium text-orange-600">{userEmail &&userEmail}</span> is
          not your email <br />
          address. Please{" "}
          <Link to='/register' className=" underline text-orange-600">
            Go back
          </Link>{" "}
          and enter the correct <br />
          one{" "}
        </p>
        <p className=" text-gray-700">
          Still can't find it? Try searchcing email for <br /> "in: all subject:
          (confirm your account on <br /> <span className="text-orange-600">
            Tasty Trails</span>)"
        </p>
      </div>
    </main>
  );
};

export default AccountActivation;
