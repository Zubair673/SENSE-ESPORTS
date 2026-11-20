
import { Users, Trophy, Gamepad2, Medal } from "lucide-react";

const stats = [
  { label: "Registered Players", value: "1,200+", icon: Users },
  { label: "Tournaments", value: "50+", icon: Trophy },
  { label: "Games", value: "10+", icon: Gamepad2 },
  { label: "Matches Played", value: "500+", icon: Medal },
];

function Stats() {
  return (
    <section className="bg-[#0d1220] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div key={stat.label} className="text-center">
              <Icon className="text-purple-400 mx-auto mb-3" size={30} />
              <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
              <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Stats;
