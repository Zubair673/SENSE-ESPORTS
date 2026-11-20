
import { useState } from "react";
import DashboardSidebar from "../../components/dashboard/DashboardSidebar";
import { Trophy, CalendarDays, Search } from "lucide-react";

const initialTournaments = [
  {
    id: 1,
    name: "PUBG Mobile Championship",
    game: "PUBG Mobile",
    date: "2026-12-10",
    prize: "Rs. 50,000",
    status: "Approved",
  },
  {
    id: 2,
    name: "Free Fire Battle Arena",
    game: "Free Fire",
    date: "2026-12-15",
    prize: "Rs. 30,000",
    status: "Pending",
  },
  {
    id: 3,
    name: "Valorant Masters",
    game: "Valorant",
    date: "2026-11-25",
    prize: "Rs. 40,000",
    status: "Completed",
  },
];

function MyTournaments() {
  const [tournaments] = useState(initialTournaments);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = tournaments.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filter === "All" || item.status === filter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="min-h-screen bg-[#0b1120] md:flex text-white">

      <main className="flex-1 p-5 md:p-8">
        <h1 className="text-3xl font-bold">My Tournaments</h1>
        <p className="text-gray-400 mt-2 mb-8">
          View all your tournament registrations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 text-gray-500" size={19} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tournaments..."
              className="w-full bg-[#151e30] border border-gray-700 rounded-xl pl-10 pr-4 py-3 outline-none"
            />
          </div>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-[#151e30] border border-gray-700 rounded-xl px-4 py-3"
          >
            <option>All</option>
            <option>Approved</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <div key={item.id} className="bg-[#151e30] border border-gray-800 rounded-2xl p-5">
              <div className="flex justify-between items-center mb-5">
                <div className="bg-orange-500/10 p-3 rounded-xl">
                  <Trophy className="text-orange-500" size={24} />
                </div>
                <span className={`text-xs px-3 py-1 rounded-full ${
                  item.status === "Approved"
                    ? "bg-green-500/10 text-green-400"
                    : item.status === "Pending"
                    ? "bg-yellow-500/10 text-yellow-400"
                    : "bg-blue-500/10 text-blue-400"
                }`}>
                  {item.status}
                </span>
              </div>

              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-gray-400 text-sm mt-2">{item.game}</p>

              <div className="border-t border-gray-800 mt-5 pt-4 space-y-3 text-sm">
                <p className="flex items-center gap-2 text-gray-300">
                  <CalendarDays size={17} className="text-orange-500" />
                  {item.date}
                </p>
                <p className="text-gray-300">
                  Prize Pool: <span className="text-orange-400">{item.prize}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-gray-400 text-center py-12">No tournaments found.</p>
        )}
      </main>
    </div>
  );
}

export default MyTournaments;
