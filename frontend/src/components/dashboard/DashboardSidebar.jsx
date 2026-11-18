
import { NavLink, Link } from "react-router-dom";

import {
  LayoutDashboard,
  Trophy,
  User,
  Settings,
  LogOut,
  Gamepad2,
  X,
  Bell,
} from "lucide-react";

function DashboardSidebar({ onClose }) {
  const links = [
    { name: "Overview", path: "/dashboard", icon: LayoutDashboard },
    { name: "My Tournaments", path: "/dashboard/tournaments", icon: Trophy },
    { name: "My Profile", path: "/dashboard/profile", icon: User },
    { name: "Notifications", path: "/dashboard/notifications", icon: Bell },
    { name: "Settings", path: "/dashboard/settings", icon: Settings },
  ];

  return (
    <aside className="w-full md:w-64 md:h-screen md:sticky md:top-0 md:self-start bg-[#0d1220] border-r border-white/10 flex flex-col">

      {/* Logo */}
      <div className="p-6 border-b border-white/10 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-extrabold">
          <Gamepad2 className="text-purple-500" size={28} />
          <span>
            ESPORTS<span className="text-purple-500">.</span>
          </span>
        </Link>

        {onClose && (
          <button onClick={onClose} className="md:hidden text-gray-400">
            <X size={23} />
          </button>
        )}
      </div>

      {/* Player Info */}
      <div className="p-5">
        <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-xl font-bold">
            P
          </div>

          <h3 className="text-white font-bold mt-3">Player Account</h3>
          <p className="text-gray-400 text-xs mt-1">
            Tournament Player
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="px-4">
        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest px-3 mb-3">
          Main Menu
        </p>

        <nav className="space-y-2">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/dashboard"}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                    isActive
                      ? "bg-purple-600 text-white"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                <Icon size={19} />
                <span className="font-medium text-sm">
                  {link.name}
                </span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
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
  );
}

export default DashboardSidebar;
