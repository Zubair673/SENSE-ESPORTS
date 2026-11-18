
import AdminSidebar from "../../components/admin/AdminSidebar";
import {
  Trophy,
  Users,
  ClipboardList,
  UserCheck,
  TrendingUp,
  CalendarDays,
} from "lucide-react";

const stats = [
  {
    title: "Total Tournaments",
    value: "12",
    change: "+2 this month",
    icon: Trophy,
  },
  {
    title: "Total Users",
    value: "248",
    change: "+18 this month",
    icon: Users,
  },
  {
    title: "Registrations",
    value: "186",
    change: "+24 this week",
    icon: ClipboardList,
  },
  {
    title: "Checked In",
    value: "124",
    change: "66% of registrations",
    icon: UserCheck,
  },
];

const registrations = [
  {
    name: "Ali Ahmed",
    game: "PUBG Mobile",
    tournament: "PUBG Championship",
    status: "Approved",
  },
  {
    name: "Usman Khan",
    game: "Free Fire",
    tournament: "Free Fire Battle",
    status: "Pending",
  },
  {
    name: "Hamza Rauf",
    game: "Valorant",
    tournament: "Valorant Masters",
    status: "Approved",
  },
  {
    name: "Bilal Malik",
    game: "EA FC",
    tournament: "EA FC Championship",
    status: "Pending",
  },
];

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#0b1120] md:flex text-white">
      <AdminSidebar />

      <main className="flex-1 p-5 md:p-8 overflow-hidden">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <p className="text-gray-400 text-sm mb-1">
              Welcome back, Admin
            </p>
            <h1 className="text-3xl font-bold">
              Admin Dashboard
            </h1>
            <p className="text-gray-400 mt-2">
              Manage your esports platform from one place.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#151e30] px-4 py-3 rounded-xl text-gray-300">
            <CalendarDays size={18} className="text-orange-500" />
            November 2026
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-[#151e30] border border-gray-800 rounded-2xl p-5"
              >
                <div className="flex justify-between items-center mb-5">
                  <p className="text-gray-400 text-sm">
                    {item.title}
                  </p>
                  <div className="bg-orange-500/10 p-3 rounded-xl">
                    <Icon className="text-orange-500" size={22} />
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-2">
                  {item.value}
                </h2>

                <p className="text-green-400 text-sm flex items-center gap-1">
                  <TrendingUp size={15} />
                  {item.change}
                </p>
              </div>
            );
          })}
        </div>

        {/* Recent Registrations */}
        <div className="bg-[#151e30] border border-gray-800 rounded-2xl p-5">
          <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
            <div>
              <h2 className="text-xl font-bold">
                Recent Registrations
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Latest tournament participants
              </p>
            </div>

            <span className="text-orange-500 text-sm font-semibold">
              Latest Activity
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[650px]">
              <thead>
                <tr className="text-gray-400 text-sm border-b border-gray-800">
                  <th className="pb-4 font-medium">Player</th>
                  <th className="pb-4 font-medium">Game</th>
                  <th className="pb-4 font-medium">Tournament</th>
                  <th className="pb-4 font-medium">Status</th>
                </tr>
              </thead>

              <tbody>
                {registrations.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-800 last:border-0"
                  >
                    <td className="py-5 font-medium">{item.name}</td>
                    <td className="py-5 text-gray-300">{item.game}</td>
                    <td className="py-5 text-gray-300">{item.tournament}</td>
                    <td className="py-5">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          item.status === "Approved"
                            ? "bg-green-500/10 text-green-400"
                            : "bg-yellow-500/10 text-yellow-400"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-gray-500 text-sm mt-8 text-center">
          ESPORTS Admin Panel © 2026
        </p>
      </main>
    </div>
  );
}

export default AdminDashboard;
