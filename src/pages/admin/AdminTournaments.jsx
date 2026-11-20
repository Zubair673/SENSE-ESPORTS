
import { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { Plus, Pencil, Trash2, X, Trophy } from "lucide-react";

const initialTournaments = [
  {
    id: 1,
    name: "PUBG Mobile Championship",
    game: "PUBG Mobile",
    date: "2026-12-10",
    prize: "Rs. 50,000",
    status: "Upcoming",
  },
  {
    id: 2,
    name: "Free Fire Battle Arena",
    game: "Free Fire",
    date: "2026-12-15",
    prize: "Rs. 30,000",
    status: "Upcoming",
  },
  {
    id: 3,
    name: "Valorant Masters",
    game: "Valorant",
    date: "2026-11-25",
    prize: "Rs. 40,000",
    status: "Ongoing",
  },
];

const emptyForm = {
  name: "",
  game: "PUBG Mobile",
  date: "",
  prize: "",
  status: "Upcoming",
};

function AdminTournaments() {
  const [tournaments, setTournaments] = useState(initialTournaments);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      setTournaments((prev) =>
        prev.map((item) =>
          item.id === editingId ? { ...form, id: editingId } : item
        )
      );
    } else {
      setTournaments((prev) => [
        ...prev,
        { ...form, id: Date.now() },
      ]);
    }

    setForm(emptyForm);
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (item) => {
    setForm({
      name: item.name,
      game: item.game,
      date: item.date,
      prize: item.prize,
      status: item.status,
    });
    setEditingId(item.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this tournament?")) {
      setTournaments((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1120] md:flex text-white">
      <AdminSidebar />

      <main className="flex-1 p-5 md:p-8">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Manage Tournaments</h1>
            <p className="text-gray-400 mt-2">
              Create and manage your gaming tournaments.
            </p>
          </div>

          <button
            onClick={() => {
              setForm(emptyForm);
              setEditingId(null);
              setShowForm(true);
            }}
            className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-xl font-semibold flex items-center gap-2"
          >
            <Plus size={20} /> Add Tournament
          </button>
        </div>

        <div className="bg-[#151e30] border border-gray-800 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="text-orange-500" />
            <h2 className="text-xl font-bold">
              All Tournaments ({tournaments.length})
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[750px] text-left">
              <thead>
                <tr className="text-gray-400 text-sm border-b border-gray-800">
                  <th className="pb-4">Tournament</th>
                  <th className="pb-4">Game</th>
                  <th className="pb-4">Date</th>
                  <th className="pb-4">Prize</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {tournaments.map((item) => (
                  <tr key={item.id} className="border-b border-gray-800 last:border-0">
                    <td className="py-5 font-medium">{item.name}</td>
                    <td className="py-5 text-gray-300">{item.game}</td>
                    <td className="py-5 text-gray-300">{item.date}</td>
                    <td className="py-5 text-gray-300">{item.prize}</td>
                    <td className="py-5">
                      <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs">
                        {item.status}
                      </span>
                    </td>
                    <td className="py-5">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(item)}
                          className="p-2 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20"
                          title="Edit"
                        >
                          <Pencil size={17} />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20"
                          title="Delete"
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {tournaments.length === 0 && (
              <p className="text-center text-gray-400 py-10">
                No tournaments found. Add your first tournament.
              </p>
            )}
          </div>
        </div>

        {showForm && (
          <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
            <form
              onSubmit={handleSubmit}
              className="bg-[#151e30] border border-gray-700 rounded-2xl p-6 w-full max-w-lg"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">
                  {editingId ? "Edit Tournament" : "Add Tournament"}
                </h2>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X />
                </button>
              </div>

              <div className="space-y-4">
                <input
                  required
                  placeholder="Tournament Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#0b1120] border border-gray-700 rounded-lg p-3 outline-none focus:border-orange-500"
                />

                <select
                  value={form.game}
                  onChange={(e) => setForm({ ...form, game: e.target.value })}
                  className="w-full bg-[#0b1120] border border-gray-700 rounded-lg p-3"
                >
                  <option>PUBG Mobile</option>
                  <option>Free Fire</option>
                  <option>Valorant</option>
                  <option>Call of Duty</option>
                  <option>EA FC</option>
                  <option>Clash Royale</option>
                </select>

                <input
                  required
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full bg-[#0b1120] border border-gray-700 rounded-lg p-3"
                />

                <input
                  required
                  placeholder="Prize Pool (e.g. Rs. 50,000)"
                  value={form.prize}
                  onChange={(e) => setForm({ ...form, prize: e.target.value })}
                  className="w-full bg-[#0b1120] border border-gray-700 rounded-lg p-3 outline-none"
                />

                <select
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                  className="w-full bg-[#0b1120] border border-gray-700 rounded-lg p-3"
                >
                  <option>Upcoming</option>
                  <option>Ongoing</option>
                  <option>Completed</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 rounded-lg py-3 font-bold mt-6"
              >
                {editingId ? "Update Tournament" : "Create Tournament"}
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}

export default AdminTournaments;
