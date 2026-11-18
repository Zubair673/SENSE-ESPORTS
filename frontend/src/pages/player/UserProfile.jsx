
import { useState } from "react";
import DashboardSidebar from "../../components/dashboard/DashboardSidebar";
import { User, Mail, Phone, Gamepad2, Save } from "lucide-react";

function UserProfile() {
  const [profile, setProfile] = useState({
    name: "Player Account",
    email: "player@gmail.com",
    phone: "03001234567",
    gameId: "PLAYER123",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#0b1120] md:flex text-white">

      <main className="flex-1 p-5 md:p-8">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="text-gray-400 mt-2 mb-8">
          Manage your personal information.
        </p>

        <div className="max-w-2xl bg-[#151e30] border border-gray-800 rounded-2xl p-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center">
              <User size={32} className="text-orange-500" />
            </div>
            <div>
              <h2 className="text-xl font-bold">{profile.name}</h2>
              <p className="text-gray-400 text-sm">Player Account</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { label: "Full Name", name: "name", icon: User, type: "text" },
              { label: "Email Address", name: "email", icon: Mail, type: "email" },
              { label: "Phone Number", name: "phone", icon: Phone, type: "tel" },
              { label: "Game ID", name: "gameId", icon: Gamepad2, type: "text" },
            ].map((field) => {
              const Icon = field.icon;

              return (
                <div key={field.name}>
                  <label className="block text-gray-300 text-sm mb-2">
                    {field.label}
                  </label>
                  <div className="relative">
                    <Icon size={18} className="absolute left-3 top-3.5 text-gray-500" />
                    <input
                      required
                      type={field.type}
                      name={field.name}
                      value={profile[field.name]}
                      onChange={handleChange}
                      className="w-full bg-[#0b1120] border border-gray-700 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-orange-500"
                    />
                  </div>
                </div>
              );
            })}

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 rounded-xl px-6 py-3 font-semibold flex items-center gap-2"
            >
              <Save size={18} /> Save Changes
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default UserProfile;
