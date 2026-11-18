
import { Outlet, NavLink, Link } from "react-router-dom";
import { Gamepad2, LayoutDashboard, LogOut } from "lucide-react";

function StaffLayout() {
  return (
    <div className="min-h-screen bg-[#080d19] text-white flex flex-col md:flex-row">
      <aside className="w-full md:w-64 md:min-h-screen bg-[#0d1220] border-r border-white/10 flex flex-col">
        <div className="p-6 border-b border-white/10">
          <Link to="/" className="flex items-center gap-2 text-xl font-extrabold">
            <Gamepad2 className="text-purple-500" size={28} />
            <span>
              ESPORTS<span className="text-purple-500">.</span>
            </span>
          </Link>
        </div>

        <div className="p-5">
          <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-4">
            Gate Staff
          </p>

          <NavLink
            to="/staff"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-purple-600 text-white"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`
            }
          >
            <LayoutDashboard size={19} />
            <span className="text-sm font-medium">Dashboard</span>
          </NavLink>
        </div>

        <div className="mt-auto p-5 border-t border-white/10">
          <Link
            to="/"
            className="flex items-center gap-3 text-gray-400 hover:text-red-400 px-3 py-3"
          >
            <LogOut size={19} />
            <span className="text-sm font-medium">Logout</span>
          </Link>
        </div>
      </aside>

      <main className="flex-1 min-w-0 min-h-screen overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}

export default StaffLayout;
