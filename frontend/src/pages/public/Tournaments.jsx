
import { Link, useSearchParams } from "react-router-dom";
import { Trophy, Users, CalendarDays, ArrowRight } from "lucide-react";
import Navbar from "../../components/public/Navbar";
import Footer from "../../components/public/Footer";

const tournaments = [
  {
    id: 1,
    name: "PUBG Mobile Championship",
    game: "PUBG Mobile",
    type: "Squad",
    players: "100 Players",
    date: "Coming Soon",
    status: "Registration Open",
    color: "text-green-400",
  },
  {
    id: 2,
    name: "Free Fire Battle Arena",
    game: "Free Fire",
    type: "Squad",
    players: "50 Players",
    date: "Coming Soon",
    status: "Registration Open",
    color: "text-green-400",
  },
  {
    id: 3,
    name: "Valorant Masters",
    game: "Valorant",
    type: "Team",
    players: "32 Players",
    date: "Coming Soon",
    status: "Upcoming",
    color: "text-yellow-400",
  },
  {
    id: 4,
    name: "EA FC Championship",
    game: "FIFA / EA FC",
    type: "Individual",
    players: "32 Players",
    date: "Coming Soon",
    status: "Registration Open",
    color: "text-green-400",
  },
];

function Tournaments() {
  const [searchParams] = useSearchParams();

  const selectedGame = searchParams.get("game");

  const filteredTournaments = selectedGame
    ? tournaments.filter(
        (tournament) =>
          tournament.game.toLowerCase() === selectedGame.toLowerCase()
      )
    : tournaments;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#090d18] text-white">
        <section className="max-w-7xl mx-auto px-6 py-20">

          {/* Heading */}
          <div className="text-center mb-14">
            <Trophy size={48} className="text-purple-500 mx-auto mb-5" />

            <p className="text-purple-400 font-semibold mb-3">
              COMPETE AND WIN
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold">
              Gaming <span className="text-purple-500">Tournaments</span>
            </h1>

            <p className="text-gray-400 mt-5 max-w-xl mx-auto">
              Explore upcoming competitions, check participation
              details and get ready to compete.
            </p>

            {/* Selected Game */}
            {selectedGame && (
              <div className="mt-7 flex flex-wrap justify-center items-center gap-3">
                <span className="text-gray-400">
                  Showing tournaments for:
                </span>

                <span className="bg-purple-600/20 border border-purple-500/30 text-purple-400 px-4 py-2 rounded-full font-semibold">
                  {selectedGame}
                </span>

                <Link
                  to="/tournaments"
                  className="text-orange-400 hover:text-orange-300 underline text-sm"
                >
                  All Games
                </Link>
              </div>
            )}
          </div>

          {/* Tournament Cards */}
          {filteredTournaments.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredTournaments.map((tournament) => (
                <div
                  key={tournament.id}
                  className="bg-[#111827] border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition"
                >
                  <div className="h-40 bg-gradient-to-br from-purple-900 to-[#111827] flex items-center justify-center">
                    <Trophy size={65} className="text-purple-300" />
                  </div>

                  <div className="p-6">
                    <p className={`text-sm font-semibold ${tournament.color}`}>
                      ● {tournament.status}
                    </p>

                    <h2 className="text-xl font-bold mt-4">
                      {tournament.name}
                    </h2>

                    <p className="text-gray-400 text-sm mt-2">
                      {tournament.game}
                    </p>

                    <div className="border-t border-white/10 mt-6 pt-5 space-y-4">
                      <div className="flex items-center gap-3 text-gray-400 text-sm">
                        <Users size={18} />
                        {tournament.players} · {tournament.type}
                      </div>

                      <div className="flex items-center gap-3 text-gray-400 text-sm">
                        <CalendarDays size={18} />
                        {tournament.date}
                      </div>
                    </div>

                    <Link
                      to={`/tournaments/${tournament.id}`}
                      className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2 transition"
                    >
                      View Details
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Trophy size={55} className="text-gray-600 mx-auto mb-5" />

              <h2 className="text-2xl font-bold">
                No Tournaments Found
              </h2>

              <p className="text-gray-400 mt-3">
                No tournaments are currently available for {selectedGame}.
              </p>

              <Link
                to="/tournaments"
                className="inline-block mt-6 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold"
              >
                View All Tournaments
              </Link>
            </div>
          )}

        </section>
      </main>

      <Footer />
    </>
  );
}

export default Tournaments;
