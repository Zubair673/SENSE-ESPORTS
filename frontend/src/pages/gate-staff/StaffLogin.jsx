
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Gamepad2, Mail, Lock, LogIn } from "lucide-react";

function StaffLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Demo login successful. Real staff authentication will be connected with backend.");
    navigate("/staff");
  };

  return (
    <div className="min-h-screen bg-[#0b1120] text-white flex items-center justify-center p-5">
      <div className="w-full max-w-md bg-[#151e30] border border-gray-800 rounded-2xl p-7">
        <Link to="/" className="flex justify-center items-center gap-2 text-2xl font-black mb-8">
          <Gamepad2 className="text-orange-500" size={30} />
          ESPORTS<span className="text-orange-500">.</span>
        </Link>

        <h1 className="text-2xl font-bold text-center">Gate Staff Login</h1>
        <p className="text-gray-400 text-center mt-2 mb-8">Sign in to manage participant check-ins.</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-300 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-gray-500" size={18} />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="staff@example.com"
                className="w-full bg-[#0b1120] border border-gray-700 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-orange-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-gray-500" size={18} />
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-[#0b1120] border border-gray-700 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-orange-500"
              />
            </div>
          </div>

          <button className="w-full bg-orange-500 hover:bg-orange-600 rounded-xl py-3 font-bold flex items-center justify-center gap-2">
            <LogIn size={19} /> Login
          </button>
        </form>

        <Link to="/" className="block text-center text-gray-400 hover:text-orange-500 text-sm mt-6">
          Back to Website
        </Link>
      </div>
    </div>
  );
}

export default StaffLogin;
