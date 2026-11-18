
import { Link, useLocation } from "react-router-dom";
import {
  Bell,
  Trophy,
  ArrowRight,
  Gamepad2,
} from "lucide-react";

import DashboardStats from "../../components/dashboard/DashboardStats";

const tournaments = [
  {
    name: "PUBG Mobile Championship",
    game: "PUBG Mobile",
    date: "Coming Soon",
    status: "Confirmed",
    checkin: "Not Started",
  },
  {
    name: "Free Fire Battle Arena",
    game: "Free Fire",
    date: "Coming Soon",
    status: "Pending",
    checkin: "Not Started",
  },
  {
    name: "Valorant Masters",
    game: "Valorant",
    date: "Coming Soon",
    status: "Confirmed",
    checkin: "Checked In",
  },
];

function UserDashboard() {
  const location = useLocation();

  const currentPage = {
    "/dashboard": "Dashboard Overview",
    "/dashboard/tournaments": "My Tournaments",
    "/dashboard/profile": "My Profile",
    "/dashboard/settings": "Account Settings",
    "/dashboard/notifications": "Notifications",
  }[location.pathname] || "Dashboard Overview";

  return (
    <div className="min-h-screen bg-[#090d18] text-white">

      {/* Topbar */}
      <header className="h-20 border-b border-white/10 flex items-center justify-between px-5 md:px-8 bg-[#0d1220]">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">
            {currentPage}
          </h1>
          <p className="text-gray-500 text-xs mt-1">
            Welcome to your gaming dashboard
          </p>
        </div>

        <button className="relative p-3 bg-[#111827] rounded-xl text-gray-300">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-purple-500 rounded-full" />
        </button>
      </header>

      <div className="p-5 md:p-8 space-y-8 max-w-7xl">

        {/* Welcome */}
        <section className="bg-gradient-to-r from-purple-900/60 to-[#111827] border border-purple-500/20 rounded-2xl p-7 md:p-9">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-purple-300 text-sm font-semibold">
                PLAYER DASHBOARD
              </p>

              <h2 className="text-3xl font-extrabold mt-3">
                Welcome Back, Player!
              </h2>

              <p className="text-gray-300 mt-3">
                Track your tournaments and get ready for your next match.
              </p>
            </div>

            <Link
              to="/tournaments"
              className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold"
            >
              Explore Tournaments
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* Statistics */}
        <section>
          <div className="mb-5">
            <h2 className="text-xl font-bold">Your Statistics</h2>
            <p className="text-gray-500 text-sm mt-1">
              Your tournament participation overview
            </p>
          </div>

          <DashboardStats />
        </section>

        {/* Tournament List */}
        <section className="bg-[#111827] border border-white/10 rounded-2xl overflow-hidden">

          <div className="p-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold">My Tournaments</h2>
              <p className="text-gray-500 text-sm mt-1">
                Your registered gaming competitions
              </p>
            </div>

            <Link
              to="/dashboard/tournaments"
              className="text-purple-400 text-sm font-semibold hover:text-purple-300"
            >
              View All
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[650px]">
              <thead className="bg-[#0d1220] text-gray-400 text-sm">
                <tr>
                  <th className="px-6 py-4 font-medium">Tournament</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Registration</th>
                  <th className="px-6 py-4 font-medium">Check-in</th>
                </tr>
              </thead>

              <tbody>
                {tournaments.map((item) => (
                  <tr key={item.name} className="border-t border-white/5">
                    <td className="px-6 py-5">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-gray-500 text-xs mt-1">
                        {item.game}
                      </p>
                    </td>

                    <td className="px-6 py-5 text-gray-400 text-sm">
                      {item.date}
                    </td>

                    <td className="px-6 py-5">
                      <span className={`text-xs font-semibold px-3 py-2 rounded-full ${
                        item.status === "Confirmed"
                          ? "bg-green-500/10 text-green-400"
                          : "bg-yellow-500/10 text-yellow-400"
                      }`}>
                        {item.status}
                      </span>
                    </td>

                    <td className="px-6 py-5 text-sm">
                      <span className={
                        item.checkin === "Checked In"
                          ? "text-green-400"
                          : "text-gray-400"
                      }>
                        {item.checkin}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="grid sm:grid-cols-2 gap-5">

          <Link
            to="/tournaments"
            className="bg-[#111827] border border-white/10 hover:border-purple-500/40 rounded-2xl p-6 flex items-center gap-4"
          >
            <Trophy className="text-purple-400" size={32} />
            <div>
              <h3 className="font-bold">Find Tournaments</h3>
              <p className="text-gray-500 text-sm mt-1">
                Discover new competitions
              </p>
            </div>
          </Link>

          <Link
            to="/games"
            className="bg-[#111827] border border-white/10 hover:border-purple-500/40 rounded-2xl p-6 flex items-center gap-4"
          >
            <Gamepad2 className="text-purple-400" size={32} />
            <div>
              <h3 className="font-bold">Explore Games</h3>
              <p className="text-gray-500 text-sm mt-1">
                Explore available games
              </p>
            </div>
          </Link>

        </section>

        <p className="text-center text-gray-600 text-xs pb-5">
          © 2026 Esports Arena. All rights reserved.
        </p>

      </div>
    </div>
  );
}

export default UserDashboard;
