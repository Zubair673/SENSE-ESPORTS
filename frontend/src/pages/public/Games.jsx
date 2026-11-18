
import { Link } from "react-router-dom";
import { Gamepad2, ArrowRight } from "lucide-react";
import Navbar from "../../components/public/Navbar";
import Footer from "../../components/public/Footer";

const games = [
  { name: "PUBG Mobile", category: "Battle Royale", emoji: "🎯", players: "Solo / Squad" },
  { name: "Free Fire", category: "Battle Royale", emoji: "🔥", players: "Solo / Squad" },
  { name: "Call of Duty", category: "FPS Shooter", emoji: "🔫", players: "Solo / Team" },
  { name: "Valorant", category: "Tactical Shooter", emoji: "⚡", players: "Team" },
  { name: "FIFA / EA FC", category: "Sports", emoji: "⚽", players: "1 vs 1" },
  { name: "Clash Royale", category: "Strategy", emoji: "👑", players: "1 vs 1" },
];

function Games() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#090d18] text-white">
        <section className="max-w-7xl mx-auto px-6 py-20">

          <div className="text-center mb-14">
            <Gamepad2 size={48} className="text-purple-500 mx-auto mb-5" />

            <p className="text-purple-400 font-semibold mb-3">
              EXPLORE OUR COLLECTION
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold">
              All <span className="text-purple-500">Games</span>
            </h1>

            <p className="text-gray-400 mt-5 max-w-xl mx-auto">
              Discover your favourite games and find tournaments
              where you can compete with other players.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {games.map((game) => (
              <Link
                key={game.name}
                to={`/tournaments?game=${encodeURIComponent(game.name)}`}
                className="group block bg-[#111827] border border-white/10 rounded-2xl p-7 hover:border-purple-500 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                  {game.emoji}
                </div>

                <p className="text-purple-400 text-sm mb-2">
                  {game.category}
                </p>

                <h2 className="text-2xl font-bold">
                  {game.name}
                </h2>

                <p className="text-gray-400 mt-3 text-sm">
                  Participation: {game.players}
                </p>

                <div className="mt-7 flex items-center justify-between bg-purple-600 group-hover:bg-purple-700 rounded-xl px-5 py-3 font-semibold transition">
                  View Tournaments
                  <ArrowRight size={19} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}

export default Games;
