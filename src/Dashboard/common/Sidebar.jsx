import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="w-64 bg-gray-800 text-white p-6">
      <h2 className="text-xl font-semibold mb-4">Admin Panel</h2>
      <ul>
        <li className="mb-3">
          <Link to="/" className="hover:underline">
            Dashboard
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/users" className="hover:underline">
            Users
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/orders" className="hover:underline">
            Orders
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/menu" className="hover:underline">
            Menu
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
