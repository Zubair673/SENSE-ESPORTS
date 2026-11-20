
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Trophy,
  Users,
  CalendarDays,
  ArrowLeft,
  User,
  Mail,
  Shield,
  Gamepad2,
  CheckCircle,
} from "lucide-react";

const tournamentData = [
  {
    id: "1",
    name: "PUBG Mobile Championship",
    game: "PUBG Mobile",
    type: "Solo / Squad",
    players: "100 Players",
    date: "Coming Soon",
    status: "Registration Open",
    description: "Join the PUBG Mobile Championship and compete against other players in an exciting battle royale tournament.",
    emoji: "🎯",
  },
  {
    id: "2",
    name: "Free Fire Battle Arena",
    game: "Free Fire",
    type: "Solo / Squad",
    players: "50 Players",
    date: "Coming Soon",
    status: "Registration Open",
    description: "Show your survival skills and compete with other Free Fire players in this exciting competition.",
    emoji: "🔥",
  },
  {
    id: "3",
    name: "Valorant Masters",
    game: "Valorant",
    type: "Team",
    players: "32 Players",
    date: "Coming Soon",
    status: "Upcoming",
    description: "Build your squad, prepare your strategy and compete in the Valorant Masters tournament.",
    emoji: "⚡",
  },
  {
    id: "4",
    name: "EA FC Championship",
    game: "FIFA / EA FC",
    type: "Individual",
    players: "32 Players",
    date: "Coming Soon",
    status: "Registration Open",
    description: "Challenge other players and prove your football gaming skills in the EA FC Championship.",
    emoji: "⚽",
  },
];

function TournamentDetails() {
  const { id } = useParams();

  const tournament = tournamentData.find((item) => item.id === id);

  const [mode, setMode] = useState("Individual");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gameId, setGameId] = useState("");
  const [teamName, setTeamName] = useState("");
  const [memberCount, setMemberCount] = useState("3");
  const [members, setMembers] = useState(["", ""]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  if (!tournament) {
    return (
      <div className="min-h-screen bg-[#090d18] text-white flex flex-col items-center justify-center">
        <Trophy size={55} className="text-purple-500 mb-5" />
        <h1 className="text-3xl font-bold">Tournament Not Found</h1>
        <Link to="/tournaments" className="text-purple-400 mt-5">
          Back to Tournaments
        </Link>
      </div>
    );
  }

  const isTeamAllowed =
    tournament.type.toLowerCase().includes("squad") ||
    tournament.type.toLowerCase().includes("team");

  const isRegistrationOpen = tournament.status === "Registration Open";

  const handleMemberCount = (value) => {
    setMemberCount(value);
    setMembers(Array.from({ length: Number(value) - 1 }, () => ""));
  };

  const handleMemberChange = (index, value) => {
    const updated = [...members];
    updated[index] = value;
    setMembers(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!isRegistrationOpen) {
      setError("Registration is not open for this tournament.");
      return;
    }

    if (mode === "Team") {
      if (!teamName.trim()) {
        setError("Please enter your team name.");
        return;
      }

      if (members.some((member) => !member.trim())) {
        setError("Please enter all team members' names.");
        return;
      }
    }

    const registration = {
      id: Date.now(),
      tournamentId: tournament.id,
      tournamentName: tournament.name,
      game: tournament.game,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      gameId: gameId.trim(),
      participationType: mode,
      teamName: mode === "Team" ? teamName.trim() : "",
      members: mode === "Team" ? members : [],
      status: "Pending",
      registeredAt: new Date().toISOString(),
      checkedIn: false,
    };

    try {
      const existingRegistrations = JSON.parse(
        localStorage.getItem("tournamentRegistrations") || "[]"
      );

      const duplicate = existingRegistrations.some(
        (item) =>
          item.tournamentId === tournament.id &&
          item.email === registration.email
      );

      if (duplicate) {
        setError("You have already registered for this tournament.");
        return;
      }

      localStorage.setItem(
        "tournamentRegistrations",
        JSON.stringify([...existingRegistrations, registration])
      );

      setSuccess(true);
    } catch {
      setError("Unable to save registration. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#090d18] text-white">
      <main className="max-w-7xl mx-auto px-6 py-12">

        <Link
          to="/tournaments"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 mb-9"
        >
          <ArrowLeft size={19} />
          Back to Tournaments
        </Link>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Tournament Information */}
          <div>
            <div className="bg-gradient-to-br from-purple-900 via-indigo-950 to-[#111827] border border-purple-500/20 rounded-3xl min-h-72 flex items-center justify-center">
              <span className="text-9xl">{tournament.emoji}</span>
            </div>

            <div className="mt-7">
              <span className={`text-sm font-semibold ${
                isRegistrationOpen ? "text-green-400" : "text-yellow-400"
              }`}>
                ● {tournament.status}
              </span>

              <p className="text-purple-400 text-sm mt-4">
                {tournament.game}
              </p>

              <h1 className="text-3xl md:text-4xl font-extrabold mt-2">
                {tournament.name}
              </h1>

              <p className="text-gray-400 leading-8 mt-5">
                {tournament.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <InfoCard icon={Users} label="Player Capacity" value={tournament.players} />
              <InfoCard icon={CalendarDays} label="Tournament Date" value={tournament.date} />
              <InfoCard icon={Gamepad2} label="Game" value={tournament.game} />
              <InfoCard icon={Trophy} label="Entry Fee" value="FREE" />
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-[#111827] border border-white/10 rounded-3xl p-6 md:p-8 h-fit">

            <div className="mb-7">
              <p className="text-purple-400 font-semibold text-sm">
                JOIN THE COMPETITION
              </p>

              <h2 className="text-2xl font-bold mt-2">
                Tournament Registration
              </h2>

              <p className="text-gray-400 text-sm mt-2">
                Fill in your details to participate.
              </p>
            </div>

            {!isRegistrationOpen ? (
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-5 text-center">
                <CalendarDays className="text-yellow-400 mx-auto mb-3" size={35} />
                <h3 className="font-bold text-lg">Registration Not Open</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Registration for this tournament will open soon.
                </p>
              </div>
            ) : success ? (
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-7 text-center">
                <CheckCircle className="text-green-400 mx-auto mb-4" size={55} />

                <h3 className="text-2xl font-bold text-green-400">
                  Registration Successful!
                </h3>

                <p className="text-gray-300 mt-3 leading-7">
                  Your registration has been submitted successfully.
                  Your application is currently pending approval.
                </p>

                <Link
                  to="/tournaments"
                  className="inline-block mt-6 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold"
                >
                  Explore More Tournaments
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {isTeamAllowed && (
                  <div>
                    <label className="block text-gray-300 text-sm mb-3">
                      Participation Type
                    </label>

                    <div className="grid grid-cols-2 gap-3">
                      {["Individual", "Team"].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setMode(item)}
                          className={`py-3 rounded-xl border font-semibold transition ${
                            mode === item
                              ? "bg-purple-600 border-purple-500 text-white"
                              : "bg-[#090d18] border-white/10 text-gray-400"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <FormInput
                  label="Full Name"
                  icon={User}
                  value={name}
                  onChange={setName}
                  placeholder="Enter your full name"
                />

                <FormInput
                  label="Email Address"
                  icon={Mail}
                  type="email"
                  value={email}
                  onChange={setEmail}
                  placeholder="Enter your email"
                />

                <FormInput
                  label="In-game ID"
                  icon={Gamepad2}
                  value={gameId}
                  onChange={setGameId}
                  placeholder="Enter your game ID"
                />

                {mode === "Team" && (
                  <>
                    <FormInput
                      label="Team Name"
                      icon={Shield}
                      value={teamName}
                      onChange={setTeamName}
                      placeholder="Enter team name"
                    />

                    <div>
                      <label className="block text-gray-300 text-sm mb-2">
                        Total Team Members (Including You)
                      </label>

                      <select
                        value={memberCount}
                        onChange={(e) => handleMemberCount(e.target.value)}
                        className="w-full bg-[#090d18] border border-white/10 rounded-xl p-4 text-white outline-none"
                      >
                        {[2, 3, 4, 5].map((count) => (
                          <option key={count} value={count}>
                            {count} Members
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label className="block text-gray-300 text-sm">
                        Other Team Members
                      </label>

                      {members.map((member, index) => (
                        <input
                          key={index}
                          required
                          value={member}
                          onChange={(e) =>
                            handleMemberChange(index, e.target.value)
                          }
                          placeholder={`Team Member ${index + 2} Name`}
                          className="w-full bg-[#090d18] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-purple-500"
                        />
                      ))}
                    </div>
                  </>
                )}

                {error && (
                  <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                    {error}
                  </p>
                )}

                <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 flex gap-3">
                  <CheckCircle className="text-purple-400 shrink-0" size={21} />
                  <p className="text-gray-300 text-sm leading-6">
                    Participation is completely free. Please provide correct
                    information before submitting.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl font-bold text-white transition"
                >
                  Submit Registration
                </button>

              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function InfoCard({ icon: Icon, label, value }) {
  return (
    <div className="bg-[#111827] border border-white/10 rounded-xl p-5">
      <Icon className="text-purple-400 mb-3" size={25} />
      <p className="text-gray-400 text-sm">{label}</p>
      <h3 className="font-bold text-xl mt-1">{value}</h3>
    </div>
  );
}

function FormInput({ label, icon: Icon, value, onChange, placeholder, type = "text" }) {
  return (
    <div>
      <label className="block text-gray-300 text-sm mb-2">{label}</label>
      <div className="flex items-center gap-3 bg-[#090d18] border border-white/10 rounded-xl px-4">
        <Icon size={19} className="text-gray-500" />
        <input
          required
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent py-4 text-white outline-none"
        />
      </div>
    </div>
  );
}

export default TournamentDetails;
