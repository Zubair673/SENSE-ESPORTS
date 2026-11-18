
import { Gamepad2 } from "lucide-react";

function Footer() {
  return (
    <footer id="about" className="bg-[#070a12] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-2 text-white text-2xl font-bold">
              <Gamepad2 className="text-purple-500" size={30} />
              ESPORTS
            </div>

            <p className="text-gray-400 mt-5 leading-7 max-w-sm">
              A gaming tournament platform where players compete,
              connect and showcase their gaming skills.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-5">Quick Links</h3>
            <div className="flex flex-col gap-3 text-gray-400">
              <a href="/">Home</a>
              <a href="#games">Games</a>
              <a href="#tournaments">Tournaments</a>
              <a href="#about">About Us</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-7 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Developed by SENSE Web Team. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
