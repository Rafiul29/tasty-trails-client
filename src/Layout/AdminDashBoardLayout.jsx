import { Outlet } from "react-router-dom";
import Sidebar from "../Dashboard/common/Sidebar";
import Header from "../Dashboard/common/Header";

function AdminDashBoardLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-6 overflow-y-auto">
        <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminDashBoardLayout;
