
import { Gamepad2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const games = [
  { name: "PUBG Mobile", category: "Battle Royale", emoji: "🎯" },
  { name: "Free Fire", category: "Battle Royale", emoji: "🔥" },
  { name: "Call of Duty", category: "FPS Shooter", emoji: "🔫" },
  { name: "Valorant", category: "Tactical Shooter", emoji: "⚡" },
  { name: "FIFA / EA FC", category: "Sports", emoji: "⚽" },
  { name: "Clash Royale", category: "Strategy", emoji: "👑" },
];

function GamesSection() {
  return (
    <section id="games" className="bg-[#090d18] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-purple-400 font-semibold mb-3">
              GAME COLLECTION
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Choose Your Game
            </h2>
            <p className="text-gray-400 mt-3">
              Explore different games and compete with other players.
            </p>
          </div>

          <Gamepad2
            className="text-purple-400 hidden md:block"
            size={45}
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <Link
              key={game.name}
              to={`/tournaments?game=${encodeURIComponent(game.name)}`}
              className="group block bg-[#111827] border border-white/10 hover:border-purple-500/60 rounded-2xl p-7 transition duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-6">{game.emoji}</div>

              <h3 className="text-xl text-white font-bold">
                {game.name}
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                {game.category}
              </p>

              <div className="flex items-center justify-between mt-7">
                <span className="text-purple-400 text-sm font-semibold">
                  Explore Game
                </span>

                <ArrowRight
                  className="text-purple-400 group-hover:translate-x-2 transition"
                  size={20}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GamesSection;
