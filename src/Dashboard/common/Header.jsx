const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Admin Dashboard</h1>
      <div className="flex items-center">
        <span className="mr-4">Welcome, Admin</span>
        <button className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
