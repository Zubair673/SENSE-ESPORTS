
import { useState } from "react";
import DashboardSidebar from "../../components/dashboard/DashboardSidebar";
import { Bell, Shield, Lock, Save } from "lucide-react";

function UserSettings() {
  const [settings, setSettings] = useState({
    notifications: true,
    tournamentUpdates: true,
    emailAlerts: false,
    publicProfile: true,
  });

  const toggleSetting = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const saveSettings = () => {
    alert("Settings saved successfully!");
  };

  const options = [
    {
      title: "Notifications",
      description: "Receive general platform notifications.",
      key: "notifications",
      icon: Bell,
    },
    {
      title: "Tournament Updates",
      description: "Get updates about your registered tournaments.",
      key: "tournamentUpdates",
      icon: Shield,
    },
    {
      title: "Email Alerts",
      description: "Receive important updates through email.",
      key: "emailAlerts",
      icon: Bell,
    },
    {
      title: "Public Profile",
      description: "Allow other players to view your profile.",
      key: "publicProfile",
      icon: Lock,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b1120] md:flex text-white">
      
      <main className="flex-1 p-5 md:p-8">
        <h1 className="text-3xl font-bold">Account Settings</h1>
        <p className="text-gray-400 mt-2 mb-8">
          Manage your account preferences.
        </p>

        <div className="max-w-3xl bg-[#151e30] border border-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-6">Preferences</h2>

          <div className="space-y-6">
            {options.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.key} className="flex items-center justify-between gap-4 border-b border-gray-800 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-500/10 p-3 rounded-xl">
                      <Icon className="text-orange-500" size={21} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleSetting(item.key)}
                    aria-label={`Toggle ${item.title}`}
                    aria-pressed={settings[item.key]}
                    className={`w-12 h-6 rounded-full p-1 transition ${
                      settings[item.key] ? "bg-orange-500" : "bg-gray-600"
                    }`}
                  >
                    <span className={`block w-4 h-4 bg-white rounded-full transition ${
                      settings[item.key] ? "translate-x-6" : "translate-x-0"
                    }`} />
                  </button>
                </div>
              );
            })}
          </div>

          <button
            onClick={saveSettings}
            className="mt-7 bg-orange-500 hover:bg-orange-600 rounded-xl px-6 py-3 font-semibold flex items-center gap-2"
          >
            <Save size={18} /> Save Settings
          </button>
        </div>
      </main>
    </div>
  );
}

export default UserSettings;
