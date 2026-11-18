
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";

function PlayerLayout() {
  return (
    <div className="min-h-screen bg-[#080d19] text-white">

      {/* Fixed Sidebar */}
      <div className="hidden md:block fixed top-0 left-0 bottom-0 w-64 z-50">
        <DashboardSidebar />
      </div>

      {/* Page Content */}
      <main className="min-h-screen md:ml-64 min-w-0 overflow-x-hidden">
        <Outlet />
      </main>

    </div>
  );
}

export default PlayerLayout;
