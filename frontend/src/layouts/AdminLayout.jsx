
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";

function AdminLayout() {
  return (
    <div className="min-h-screen bg-[#080d19] text-white flex flex-col md:flex-row">

      <main className="flex-1 min-w-0 min-h-screen overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
