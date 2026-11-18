
import { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { Search, Users, Ban, Trash2 } from "lucide-react";

const initialUsers = [
  { id: 1, name: "Ali Ahmed", email: "ali@gmail.com", role: "Player", status: "Active" },
  { id: 2, name: "Usman Khan", email: "usman@gmail.com", role: "Player", status: "Active" },
  { id: 3, name: "Hamza Rauf", email: "hamza@gmail.com", role: "Player", status: "Blocked" },
  { id: 4, name: "Bilal Malik", email: "bilal@gmail.com", role: "Player", status: "Active" },
];

function AdminUsers() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const toggleBlock = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? { ...user, status: user.status === "Active" ? "Blocked" : "Active" }
          : user
      )
    );
  };

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers((prev) => prev.filter((user) => user.id !== id));
    }
  };

  const filtered = users.filter((user) => {
    const matchesSearch = `${user.name} ${user.email}`.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || user.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#0b1120] md:flex text-white">
      <AdminSidebar />

      <main className="flex-1 p-5 md:p-8">
        <h1 className="text-3xl font-bold">User Management</h1>
        <p className="text-gray-400 mt-2 mb-8">Manage registered platform users.</p>

        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          <div className="bg-[#151e30] border border-gray-800 p-5 rounded-2xl">
            <p className="text-gray-400">Total Users</p>
            <h2 className="text-3xl font-bold mt-3">{users.length}</h2>
          </div>
          <div className="bg-[#151e30] border border-gray-800 p-5 rounded-2xl">
            <p className="text-gray-400">Blocked Users</p>
            <h2 className="text-3xl font-bold mt-3">{users.filter((u) => u.status === "Blocked").length}</h2>
          </div>
        </div>

        <div className="bg-[#151e30] border border-gray-800 rounded-2xl p-5">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 text-gray-500" size={19} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search users..."
                className="w-full bg-[#0b1120] border border-gray-700 rounded-xl pl-10 pr-4 py-3 outline-none"
              />
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-[#0b1120] border border-gray-700 rounded-xl px-4 py-3"
            >
              <option>All</option>
              <option>Active</option>
              <option>Blocked</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-left">
              <thead>
                <tr className="text-gray-400 text-sm border-b border-gray-800">
                  <th className="pb-4">User</th>
                  <th className="pb-4">Role</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((user) => (
                  <tr key={user.id} className="border-b border-gray-800 last:border-0">
                    <td className="py-5">
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-gray-500 text-sm">{user.email}</p>
                    </td>
                    <td className="py-5 text-gray-300">{user.role}</td>
                    <td className="py-5">
                      <span className={user.status === "Active" ? "text-green-400" : "text-red-400"}>
                        {user.status}
                      </span>
                    </td>
                    <td className="py-5">
                      <div className="flex gap-2">
                        <button
                          onClick={() => toggleBlock(user.id)}
                          title={user.status === "Active" ? "Block user" : "Unblock user"}
                          className="p-2 rounded-lg bg-yellow-500/10 text-yellow-400"
                        >
                          <Ban size={17} />
                        </button>
                        <button
                          onClick={() => deleteUser(user.id)}
                          title="Delete user"
                          className="p-2 rounded-lg bg-red-500/10 text-red-400"
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && <p className="text-center text-gray-400 py-8">No users found.</p>}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminUsers;
