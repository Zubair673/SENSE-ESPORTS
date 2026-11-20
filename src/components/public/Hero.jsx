
import { Trophy, Gamepad2, ArrowRight, Users } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#090d18]">
      <div className="absolute w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full -top-20 -left-20" />
      <div className="absolute w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full bottom-0 right-0" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <span className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 text-purple-400 px-4 py-2 rounded-full text-sm mb-7">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            The Ultimate Gaming Arena
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white">
            PLAY.
            <span className="text-purple-500"> COMPETE.</span>
            <br />
            WIN.
          </h1>

          <p className="text-gray-400 text-lg mt-6 leading-8 max-w-lg">
            Join exciting gaming tournaments, challenge other players,
            build your team and prove that you are the best.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <a href="#tournaments" className="bg-purple-600 hover:bg-purple-700 text-white px-7 py-4 rounded-xl font-semibold flex items-center gap-2">
              Explore Tournaments <ArrowRight size={19} />
            </a>

            <a href="#games" className="border border-white/20 hover:bg-white/10 text-white px-7 py-4 rounded-xl font-semibold flex items-center gap-2">
              <Gamepad2 size={19} /> Explore Games
            </a>
          </div>

          <div className="flex gap-8 mt-12">
            <div>
              <h3 className="text-2xl font-bold text-white">100%</h3>
              <p className="text-gray-500 text-sm">Free Entry</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Multiple</h3>
              <p className="text-gray-500 text-sm">Game Categories</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Fair</h3>
              <p className="text-gray-500 text-sm">Competition</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full" />

          <div className="relative bg-gradient-to-br from-[#211344] to-[#10182d] border border-purple-500/30 rounded-3xl p-10 md:p-14 text-center">
            <div className="text-8xl md:text-9xl mb-8">🎮</div>

            <h2 className="text-3xl font-extrabold text-white">
              YOUR GAME.
            </h2>
            <h2 className="text-3xl font-extrabold text-purple-400">
              YOUR GLORY.
            </h2>

            <div className="mt-9 bg-black/30 rounded-2xl p-5 flex items-center justify-between">
              <div className="flex items-center gap-3 text-left">
                <Trophy className="text-yellow-400" size={32} />
                <div>
                  <p className="text-white font-semibold">Next Level Starts Here</p>
                  <p className="text-gray-400 text-sm">Join the competition</p>
                </div>
              </div>
              <Users className="text-purple-400" size={28} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
