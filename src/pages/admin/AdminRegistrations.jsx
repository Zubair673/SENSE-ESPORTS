
import { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { Check, X, Search, Users, UserCheck, Clock } from "lucide-react";

const initialRegistrations = [
  { id: 1, name: "Ali Ahmed", email: "ali@gmail.com", game: "PUBG Mobile", tournament: "PUBG Championship", type: "Squad", status: "Pending", checkedIn: false },
  { id: 2, name: "Usman Khan", email: "usman@gmail.com", game: "Free Fire", tournament: "Free Fire Battle", type: "Squad", status: "Approved", checkedIn: false },
  { id: 3, name: "Hamza Rauf", email: "hamza@gmail.com", game: "Valorant", tournament: "Valorant Masters", type: "Team", status: "Approved", checkedIn: true },
  { id: 4, name: "Bilal Malik", email: "bilal@gmail.com", game: "EA FC", tournament: "EA FC Championship", type: "Individual", status: "Rejected", checkedIn: false },
  { id: 5, name: "Ahmed Raza", email: "ahmed@gmail.com", game: "PUBG Mobile", tournament: "PUBG Championship", type: "Squad", status: "Pending", checkedIn: false },
];

function AdminRegistrations() {
  const [registrations, setRegistrations] = useState(initialRegistrations);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const updateStatus = (id, status) => {
    setRegistrations((prev) =>
      prev.map((item) => item.id === id ? { ...item, status } : item)
    );
  };

  const toggleCheckIn = (id) => {
    setRegistrations((prev) =>
      prev.map((item) =>
        item.id === id && item.status === "Approved"
          ? { ...item, checkedIn: !item.checkedIn }
          : item
      )
    );
  };

  const filtered = registrations.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.tournament.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || item.status === filter;

    return matchesSearch && matchesFilter;
  });

  const pending = registrations.filter((r) => r.status === "Pending").length;
  const approved = registrations.filter((r) => r.status === "Approved").length;
  const checkedIn = registrations.filter((r) => r.checkedIn).length;

  return (
    <div className="min-h-screen bg-[#0b1120] md:flex text-white">
      <AdminSidebar />

      <main className="flex-1 p-5 md:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Registrations</h1>
          <p className="text-gray-400 mt-2">
            Review participants and manage tournament check-ins.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">
          {[
            { title: "Total Registrations", value: registrations.length, icon: Users },
            { title: "Pending Approval", value: pending, icon: Clock },
            { title: "Checked In", value: checkedIn, icon: UserCheck },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-[#151e30] border border-gray-800 p-5 rounded-2xl">
                <div className="flex justify-between items-center">
                  <p className="text-gray-400">{item.title}</p>
                  <Icon className="text-orange-500" />
                </div>
                <h2 className="text-3xl font-bold mt-4">{item.value}</h2>
              </div>
            );
          })}
        </div>

        <div className="bg-[#151e30] border border-gray-800 rounded-2xl p-5">
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 text-gray-500" size={19} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search player or tournament..."
                className="w-full bg-[#0b1120] border border-gray-700 rounded-lg pl-10 pr-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-[#0b1120] border border-gray-700 rounded-lg px-4 py-3"
            >
              <option>All</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[950px] text-left">
              <thead>
                <tr className="text-gray-400 text-sm border-b border-gray-800">
                  <th className="pb-4">Player</th>
                  <th className="pb-4">Game</th>
                  <th className="pb-4">Tournament</th>
                  <th className="pb-4">Type</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Check-in</th>
                  <th className="pb-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item) => (
                  <tr key={item.id} className="border-b border-gray-800 last:border-0">
                    <td className="py-5">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-gray-500 text-xs">{item.email}</p>
                    </td>
                    <td className="py-5 text-gray-300">{item.game}</td>
                    <td className="py-5 text-gray-300">{item.tournament}</td>
                    <td className="py-5 text-gray-300">{item.type}</td>
                    <td className="py-5">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        item.status === "Approved"
                          ? "bg-green-500/10 text-green-400"
                          : item.status === "Rejected"
                          ? "bg-red-500/10 text-red-400"
                          : "bg-yellow-500/10 text-yellow-400"
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-5">
                      {item.status === "Approved" ? (
                        <button
                          onClick={() => toggleCheckIn(item.id)}
                          className={`px-3 py-2 rounded-lg text-xs font-semibold ${
                            item.checkedIn
                              ? "bg-green-500/10 text-green-400"
                              : "bg-orange-500/10 text-orange-400"
                          }`}
                        >
                          {item.checkedIn ? "Checked In" : "Check In"}
                        </button>
                      ) : (
                        <span className="text-gray-600 text-xs">Unavailable</span>
                      )}
                    </td>
                    <td className="py-5">
                      {item.status === "Pending" ? (
                        <div className="flex gap-2">
                          <button onClick={() => updateStatus(item.id, "Approved")} title="Approve" className="p-2 rounded-lg bg-green-500/10 text-green-400">
                            <Check size={18} />
                          </button>
                          <button onClick={() => updateStatus(item.id, "Rejected")} title="Reject" className="p-2 rounded-lg bg-red-500/10 text-red-400">
                            <X size={18} />
                          </button>
                        </div>
                      ) : (
                        <span className="text-gray-500 text-xs">No action</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filtered.length === 0 && (
              <p className="text-center text-gray-400 py-10">No registrations found.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminRegistrations;
