
import { useState } from "react";
import { Search, UserCheck, LogOut, Gamepad2, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const initialPlayers = [
  { id: 1, name: "Ali Ahmed", game: "PUBG Mobile", tournament: "PUBG Championship", status: "Approved", checkedIn: false },
  { id: 2, name: "Usman Khan", game: "Free Fire", tournament: "Free Fire Battle", status: "Approved", checkedIn: true },
  { id: 3, name: "Hamza Rauf", game: "Valorant", tournament: "Valorant Masters", status: "Approved", checkedIn: false },
  { id: 4, name: "Bilal Malik", game: "EA FC", tournament: "EA FC Championship", status: "Pending", checkedIn: false },
];

function GateStaffDashboard() {
  const [players, setPlayers] = useState(initialPlayers);
  const [search, setSearch] = useState("");

  const checkIn = (id) => {
    setPlayers((prev) =>
      prev.map((player) =>
        player.id === id ? { ...player, checkedIn: true } : player
      )
    );
  };

  const filtered = players.filter((player) =>
    `${player.name} ${player.game} ${player.tournament}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0b1120] text-white">
      <header className="border-b border-gray-800 bg-[#111827] px-5 md:px-8 py-5 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black flex items-center gap-2">
          <Gamepad2 className="text-orange-500" />
          ESPORTS<span className="text-orange-500">.</span>
        </Link>
        <Link to="/staff/login" className="text-gray-400 hover:text-red-400 flex items-center gap-2">
          <LogOut size={18} /> Logout
        </Link>
      </header>

      <main className="max-w-7xl mx-auto p-5 md:p-8">
        <div className="mb-8">
          <p className="text-orange-500 font-semibold text-sm">GATE STAFF PANEL</p>
          <h1 className="text-3xl font-bold mt-2">Participant Check-in</h1>
          <p className="text-gray-400 mt-2">Verify approved players at the tournament entrance.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {[
            ["Total Participants", players.length],
            ["Checked In", players.filter((p) => p.checkedIn).length],
            ["Remaining", players.filter((p) => p.status === "Approved" && !p.checkedIn).length],
          ].map(([title, value]) => (
            <div key={title} className="bg-[#151e30] border border-gray-800 rounded-2xl p-5">
              <p className="text-gray-400">{title}</p>
              <h2 className="text-3xl font-bold mt-3">{value}</h2>
            </div>
          ))}
        </div>

        <div className="bg-[#151e30] border border-gray-800 rounded-2xl p-5">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 text-gray-500" size={19} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search player, game or tournament..."
              className="w-full bg-[#0b1120] border border-gray-700 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left">
              <thead>
                <tr className="text-gray-400 text-sm border-b border-gray-800">
                  <th className="pb-4">Participant</th>
                  <th className="pb-4">Game</th>
                  <th className="pb-4">Tournament</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Check-in</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((player) => (
                  <tr key={player.id} className="border-b border-gray-800 last:border-0">
                    <td className="py-5 font-semibold">{player.name}</td>
                    <td className="py-5 text-gray-300">{player.game}</td>
                    <td className="py-5 text-gray-300">{player.tournament}</td>
                    <td className="py-5">
                      <span className={player.status === "Approved" ? "text-green-400" : "text-yellow-400"}>
                        {player.status}
                      </span>
                    </td>
                    <td className="py-5">
                      {player.status !== "Approved" ? (
                        <span className="text-gray-500 text-sm">Not approved</span>
                      ) : player.checkedIn ? (
                        <span className="text-green-400 flex items-center gap-2 text-sm">
                          <CheckCircle size={17} /> Checked In
                        </span>
                      ) : (
                        <button
                          onClick={() => checkIn(player.id)}
                          className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-sm font-semibold"
                        >
                          Check In
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && <p className="text-center text-gray-400 py-8">No participants found.</p>}
          </div>
        </div>
      </main>
    </div>
  );
}

export default GateStaffDashboard;
