
import { Trophy, Users, CalendarDays, ArrowRight } from "lucide-react";

const tournaments = [
  {
    name: "PUBG Mobile Championship",
    game: "PUBG Mobile",
    date: "Coming Soon",
    players: "100 Players",
    status: "Registration Open",
    color: "text-green-400",
  },
  {
    name: "Free Fire Battle Arena",
    game: "Free Fire",
    date: "Coming Soon",
    players: "50 Players",
    status: "Registration Open",
    color: "text-green-400",
  },
  {
    name: "Valorant Masters",
    game: "Valorant",
    date: "Coming Soon",
    players: "32 Players",
    status: "Upcoming",
    color: "text-yellow-400",
  },
];

function TournamentSection() {
  return (
    <section id="tournaments" className="bg-[#0d1220] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-12">
          <p className="text-purple-400 font-semibold mb-3">COMPETE & WIN</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Featured Tournaments
          </h2>
          <p className="text-gray-400 mt-3">
            Find your next challenge and register for free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((tournament) => (
            <div
              key={tournament.name}
              className="bg-[#111827] border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition"
            >
              <div className="h-40 bg-gradient-to-br from-purple-900 via-indigo-900 to-[#111827] flex items-center justify-center">
                <Trophy size={65} className="text-purple-300" />
              </div>

              <div className="p-6">
                <span className={`text-xs font-semibold ${tournament.color}`}>
                  ● {tournament.status}
                </span>

                <h3 className="text-xl font-bold text-white mt-4">
                  {tournament.name}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  {tournament.game}
                </p>

                <div className="border-t border-white/10 mt-6 pt-5 space-y-3">
                  <div className="flex items-center gap-3 text-gray-400 text-sm">
                    <CalendarDays size={17} />
                    {tournament.date}
                  </div>

                  <div className="flex items-center gap-3 text-gray-400 text-sm">
                    <Users size={17} />
                    {tournament.players}
                  </div>
                </div>

                <button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2">
                  View Tournament <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TournamentSection;
