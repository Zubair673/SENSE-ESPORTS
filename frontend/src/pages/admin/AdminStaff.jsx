
import { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { Plus, Trash2, Search, UserCog, X } from "lucide-react";

const initialStaff = [
  { id: 1, name: "Ahmed Raza", email: "ahmed.staff@gmail.com", phone: "03001234567", status: "Active" },
  { id: 2, name: "Usman Ali", email: "usman.staff@gmail.com", phone: "03111234567", status: "Active" },
  { id: 3, name: "Bilal Khan", email: "bilal.staff@gmail.com", phone: "03221234567", status: "Inactive" },
];

const emptyForm = {
  name: "",
  email: "",
  phone: "",
};

function AdminStaff() {
  const [staff, setStaff] = useState(initialStaff);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState(emptyForm);

  const addStaff = (e) => {
    e.preventDefault();

    setStaff((prev) => [
      ...prev,
      { ...form, id: Date.now(), status: "Active" },
    ]);

    setForm(emptyForm);
    setShowForm(false);
  };

  const deleteStaff = (id) => {
    if (window.confirm("Remove this staff member?")) {
      setStaff((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const toggleStatus = (id) => {
    setStaff((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: item.status === "Active" ? "Inactive" : "Active" }
          : item
      )
    );
  };

  const filteredStaff = staff.filter((item) =>
    `${item.name} ${item.email}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0b1120] md:flex text-white">
      <AdminSidebar />

      <main className="flex-1 p-5 md:p-8">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Gate Staff</h1>
            <p className="text-gray-400 mt-2">
              Add and manage tournament gate staff members.
            </p>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-xl flex items-center gap-2 font-semibold"
          >
            <Plus size={20} /> Add Staff
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          <div className="bg-[#151e30] border border-gray-800 p-5 rounded-2xl">
            <p className="text-gray-400">Total Staff</p>
            <h2 className="text-3xl font-bold mt-3">{staff.length}</h2>
          </div>
          <div className="bg-[#151e30] border border-gray-800 p-5 rounded-2xl">
            <p className="text-gray-400">Active Staff</p>
            <h2 className="text-3xl font-bold mt-3">
              {staff.filter((item) => item.status === "Active").length}
            </h2>
          </div>
        </div>

        <div className="bg-[#151e30] border border-gray-800 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-5">
            <UserCog className="text-orange-500" />
            <h2 className="text-xl font-bold">Staff Members</h2>
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 text-gray-500" size={19} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search staff..."
              className="w-full bg-[#0b1120] border border-gray-700 rounded-lg pl-10 pr-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-left">
              <thead>
                <tr className="text-gray-400 text-sm border-b border-gray-800">
                  <th className="pb-4">Name</th>
                  <th className="pb-4">Email</th>
                  <th className="pb-4">Phone</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStaff.map((item) => (
                  <tr key={item.id} className="border-b border-gray-800 last:border-0">
                    <td className="py-5 font-semibold">{item.name}</td>
                    <td className="py-5 text-gray-300">{item.email}</td>
                    <td className="py-5 text-gray-300">{item.phone}</td>
                    <td className="py-5">
                      <button
                        onClick={() => toggleStatus(item.id)}
                        className={`px-3 py-1 rounded-full text-xs ${
                          item.status === "Active"
                            ? "bg-green-500/10 text-green-400"
                            : "bg-gray-500/10 text-gray-400"
                        }`}
                      >
                        {item.status}
                      </button>
                    </td>
                    <td className="py-5">
                      <button
                        onClick={() => deleteStaff(item.id)}
                        className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20"
                        title="Remove Staff"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredStaff.length === 0 && (
              <p className="text-center text-gray-400 py-8">No staff found.</p>
            )}
          </div>
        </div>

        {showForm && (
          <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
            <form
              onSubmit={addStaff}
              className="bg-[#151e30] border border-gray-700 rounded-2xl p-6 w-full max-w-md"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Add Gate Staff</h2>
                <button type="button" onClick={() => setShowForm(false)}>
                  <X className="text-gray-400" />
                </button>
              </div>

              <div className="space-y-4">
                <input
                  required
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#0b1120] border border-gray-700 rounded-lg p-3 outline-none"
                />
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#0b1120] border border-gray-700 rounded-lg p-3 outline-none"
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-[#0b1120] border border-gray-700 rounded-lg p-3 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-lg font-bold mt-6"
              >
                Add Staff Member
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}

export default AdminStaff;
