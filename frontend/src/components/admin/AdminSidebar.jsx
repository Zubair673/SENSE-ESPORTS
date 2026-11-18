
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Trophy,
  Users,
  UserCog,
  Home,
  LogOut,
  Gamepad2,
  Medal,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { name: "Tournaments", path: "/admin/tournaments", icon: Trophy },
  { name: "Registrations", path: "/admin/registrations", icon: Users },
  { name: "Users", path: "/admin/users", icon: Users },
  { name: "Gate Staff", path: "/admin/staff", icon: UserCog },
  { name: "Results", path: "/admin/results", icon: Medal },
];

function AdminSidebar() {
  const location = useLocation();

  return (
    <aside className="w-full md:w-64 md:min-h-screen bg-[#111827] text-white p-5 md:p-6">
      <Link to="/" className="flex items-center gap-2 text-2xl font-black mb-8">
        <Gamepad2 className="text-orange-500" size={30} />
        ESPORTS<span className="text-orange-500">.</span>
      </Link>

      <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Admin Panel</p>

      <nav className="flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`shrink-0 flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                active ? "bg-orange-500 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <Icon size={19} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-6 md:mt-12 border-t border-gray-800 pt-5 flex md:flex-col gap-4">
        <Link to="/" className="flex items-center gap-3 text-gray-400 hover:text-white">
          <Home size={19} /> Visit Website
        </Link>
        <Link to="/login" className="flex items-center gap-3 text-gray-400 hover:text-red-400">
          <LogOut size={19} /> Logout
        </Link>
      </div>
    </aside>
  );
}

export default AdminSidebar;
