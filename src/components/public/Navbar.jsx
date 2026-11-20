
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Gamepad2, Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Games", path: "/games" },
    { name: "Tournaments", path: "/tournaments" },
    { name: "About", path: "/about" },
  ];

  const linkStyle = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-orange-500"
        : "text-gray-300 hover:text-orange-500"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-[#0d1220]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold text-white">
            <Gamepad2 size={30} className="text-orange-500" />
            ESPORTS<span className="text-orange-500">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={linkStyle}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="text-gray-300 hover:text-white transition px-4 py-2"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-lg font-semibold transition"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={27} /> : <Menu size={27} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 py-5 space-y-4">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-2 ${
                    isActive
                      ? "text-orange-500"
                      : "text-gray-300 hover:text-orange-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="flex gap-3 pt-3">
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="flex-1 text-center border border-white/20 rounded-lg py-2 text-white"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="flex-1 text-center bg-orange-600 rounded-lg py-2 text-white font-semibold"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
