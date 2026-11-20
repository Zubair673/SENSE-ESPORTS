
import { Link, useNavigate } from "react-router-dom";
import { Gamepad2, Mail, Lock, ArrowRight } from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login will be connected with Firebase later!");
  };

  return (
    <div className="min-h-screen bg-[#090d18] flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-md bg-[#111827] border border-white/10 rounded-3xl p-8 md:p-10">

        <button onClick={() => navigate("/")} className="text-purple-400 text-sm mb-8">
          ← Back to Home
        </button>

        <div className="text-center mb-8">
          <Gamepad2 size={48} className="text-purple-500 mx-auto mb-4" />
          <h1 className="text-3xl font-extrabold text-white">Welcome Back!</h1>
          <p className="text-gray-400 mt-2">Login to your gaming account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-gray-300 text-sm block mb-2">Email Address</label>
            <div className="flex items-center gap-3 bg-[#090d18] border border-white/10 rounded-xl px-4">
              <Mail size={19} className="text-gray-500" />
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full bg-transparent py-4 text-white outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-gray-300 text-sm block mb-2">Password</label>
            <div className="flex items-center gap-3 bg-[#090d18] border border-white/10 rounded-xl px-4">
              <Lock size={19} className="text-gray-500" />
              <input
                type="password"
                required
                placeholder="Enter your password"
                className="w-full bg-transparent py-4 text-white outline-none"
              />
            </div>
          </div>

          <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2">
            Login <ArrowRight size={19} />
          </button>
        </form>

        <p className="text-center text-gray-400 mt-7 text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-purple-400 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
