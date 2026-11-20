
import { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { Trophy, Save, Medal } from "lucide-react";

const initialResults = [
  { id: 1, tournament: "PUBG Championship", first: "Team Alpha", second: "Team Bravo", third: "Team X", status: "Published" },
  { id: 2, tournament: "Free Fire Battle", first: "", second: "", third: "", status: "Pending" },
  { id: 3, tournament: "Valorant Masters", first: "", second: "", third: "", status: "Pending" },
];

function AdminResults() {
  const [results, setResults] = useState(initialResults);

  const updateResult = (id, field, value) => {
    setResults((prev) =>
      prev.map((item) => item.id === id ? { ...item, [field]: value } : item)
    );
  };

  const publishResult = (id) => {
    const result = results.find((item) => item.id === id);
    if (!result.first.trim() || !result.second.trim() || !result.third.trim()) {
      alert("Please enter all three positions before publishing.");
      return;
    }
    updateResult(id, "status", "Published");
    alert("Result published successfully!");
  };

  return (
    <div className="min-h-screen bg-[#0b1120] md:flex text-white">
      <AdminSidebar />

      <main className="flex-1 p-5 md:p-8">
        <h1 className="text-3xl font-bold">Tournament Results</h1>
        <p className="text-gray-400 mt-2 mb-8">Add winners and publish tournament rankings.</p>

        <div className="space-y-5">
          {results.map((item) => (
            <div key={item.id} className="bg-[#151e30] border border-gray-800 rounded-2xl p-5 md:p-6">
              <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Trophy className="text-orange-500" /> {item.tournament}
                </h2>
                <span className={item.status === "Published" ? "text-green-400 text-sm" : "text-yellow-400 text-sm"}>
                  {item.status}
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { field: "first", label: "1st Place", icon: "🥇" },
                  { field: "second", label: "2nd Place", icon: "🥈" },
                  { field: "third", label: "3rd Place", icon: "🥉" },
                ].map((position) => (
                  <div key={position.field}>
                    <label className="block text-gray-300 text-sm mb-2">
                      {position.icon} {position.label}
                    </label>
                    <input
                      value={item[position.field]}
                      onChange={(e) => updateResult(item.id, position.field, e.target.value)}
                      placeholder="Enter player or team name"
                      className="w-full bg-[#0b1120] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={() => publishResult(item.id)}
                className="mt-5 bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-xl font-semibold flex items-center gap-2"
              >
                <Save size={18} /> Publish Result
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#151e30] border border-gray-800 rounded-2xl p-5">
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Medal className="text-orange-500" /> Published Winners
          </h2>
          {results.filter((r) => r.status === "Published").map((r) => (
            <div key={r.id} className="border-b border-gray-800 last:border-0 py-3">
              <p className="font-semibold">{r.tournament}</p>
              <p className="text-gray-400 text-sm mt-1">
                🥇 {r.first} · 🥈 {r.second} · 🥉 {r.third}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default AdminResults;
