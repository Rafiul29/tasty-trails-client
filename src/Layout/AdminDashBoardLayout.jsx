
import Sidebar from "../Dashboard/common/Sidebar"; // Adjust the import paths as necessary
import Header from "../Dashboard/common//Header";
import { Outlet } from "react-router-dom";

function AdminDashBoardLayout() {

  return (
    <div className="flex  h-screen bg-gray-100 overflow-hidden">
      <Sidebar  />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-5 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminDashBoardLayout;
