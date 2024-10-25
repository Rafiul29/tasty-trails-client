import { Outlet } from "react-router-dom"
import Header from "../Dashboard/common/Header"
import Sidebar from "../Dashboard/common/Sidebar"

const UserDashBoardLayout = () => {
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
  )
}

export default UserDashBoardLayout