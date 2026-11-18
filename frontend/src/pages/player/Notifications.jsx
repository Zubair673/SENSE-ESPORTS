
import { useState } from "react";
import { Bell, CheckCheck, Trophy, UserCheck, Megaphone } from "lucide-react";
import DashboardSidebar from "../../components/dashboard/DashboardSidebar";

const initialNotifications = [
  { id: 1, title: "Registration Approved", message: "Your PUBG Championship registration has been approved.", time: "2 hours ago", type: "success", read: false },
  { id: 2, title: "Tournament Reminder", message: "Free Fire Battle Arena is coming soon.", time: "Yesterday", type: "tournament", read: false },
  { id: 3, title: "Platform Announcement", message: "Welcome to the ESPORTS gaming platform.", time: "2 days ago", type: "announcement", read: true },
];

function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAllRead = () => {
    setNotifications((prev) => prev.map((item) => ({ ...item, read: true })));
  };

  const markRead = (id) => {
    setNotifications((prev) =>
      prev.map((item) => item.id === id ? { ...item, read: true } : item)
    );
  };

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((item) => item.id !== id));
  };

  const getIcon = (type) => {
    if (type === "success") return UserCheck;
    if (type === "tournament") return Trophy;
    return Megaphone;
  };

  return (
    <div className="min-h-screen bg-[#0b1120] md:flex text-white">

      <main className="flex-1 p-5 md:p-8">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Notifications</h1>
            <p className="text-gray-400 mt-2">Stay updated with your gaming activity.</p>
          </div>
          <button
            onClick={markAllRead}
            className="flex items-center gap-2 text-orange-400 hover:text-orange-300"
          >
            <CheckCheck size={18} /> Mark all as read
          </button>
        </div>

        <div className="bg-[#151e30] border border-gray-800 rounded-2xl overflow-hidden">
          {notifications.map((item) => {
            const Icon = getIcon(item.type);

            return (
              <div key={item.id} className={`p-5 border-b border-gray-800 last:border-0 flex gap-4 ${!item.read ? "bg-orange-500/5" : ""}`}>
                <div className="bg-orange-500/10 p-3 rounded-xl h-fit">
                  <Icon className="text-orange-500" size={22} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap justify-between gap-2">
                    <h3 className="font-bold">{item.title}</h3>
                    {!item.read && <span className="text-xs text-orange-400">New</span>}
                  </div>
                  <p className="text-gray-400 text-sm mt-2">{item.message}</p>
                  <p className="text-gray-500 text-xs mt-3">{item.time}</p>
                  <div className="flex gap-4 mt-3 text-sm">
                    {!item.read && (
                      <button onClick={() => markRead(item.id)} className="text-orange-400 hover:text-orange-300">
                        Mark as read
                      </button>
                    )}
                    <button onClick={() => removeNotification(item.id)} className="text-red-400 hover:text-red-300">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {notifications.length === 0 && (
            <p className="text-center text-gray-400 py-12">You have no notifications.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default Notifications;
