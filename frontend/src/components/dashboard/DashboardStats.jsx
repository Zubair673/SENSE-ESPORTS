
import { Trophy, CalendarDays, CheckCircle, Clock } from "lucide-react";

const stats = [
  {
    title: "Registered",
    value: "3",
    icon: Trophy,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    title: "Upcoming",
    value: "2",
    icon: CalendarDays,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Checked In",
    value: "1",
    icon: CheckCircle,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    title: "Pending",
    value: "2",
    icon: Clock,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
];

function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="bg-[#111827] border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">{stat.title}</p>
                <h2 className="text-3xl font-extrabold text-white mt-3">
                  {stat.value}
                </h2>
              </div>

              <div className={`${stat.bg} ${stat.color} p-4 rounded-xl`}>
                <Icon size={25} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DashboardStats;
