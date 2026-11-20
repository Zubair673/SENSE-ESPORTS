
import { Link } from "react-router-dom";
import {
  Gamepad2,
  Trophy,
  Users,
  Target,
  CalendarDays,
  ArrowRight,
} from "lucide-react";
import Navbar from "../../components/public/Navbar";
import Footer from "../../components/public/Footer";

function About() {
  const features = [
    {
      icon: Gamepad2,
      title: "Multiple Games",
      description:
        "Explore different esports games and participate in your favorite competitions.",
    },
    {
      icon: Users,
      title: "Team Participation",
      description:
        "Compete individually or represent your team in exciting tournaments.",
    },
    {
      icon: Trophy,
      title: "Fair Competition",
      description:
        "Give players an opportunity to showcase their gaming skills and compete for victory.",
    },
    {
      icon: Target,
      title: "Tournament Management",
      description:
        "Manage registrations, track participation, and view tournament results in one place.",
    },
  ];

  return (
    <>


      <div className="bg-[#080d19] text-white min-h-screen">

        {/* Hero */}
        <section className="py-24 px-5 text-center bg-gradient-to-b from-orange-600/15 to-transparent">
          <p className="text-orange-500 font-bold tracking-widest uppercase mb-4">
            About Our Event
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            About <span className="text-orange-500">ESPORTS.</span>
          </h1>

          <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-8">
            An exciting esports event organized by SENSE IIUI Society,
            bringing gaming enthusiasts together to compete, connect,
            and showcase their skills.
          </p>
        </section>

        {/* About Society */}
        <section className="max-w-6xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-orange-500 font-bold uppercase tracking-widest mb-3">
              Organized by SENSE IIUI
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bringing Gamers Together
            </h2>

            <p className="text-gray-400 leading-8 mb-5">
              This esports event is organized by SENSE IIUI Society to bring
              students and gaming enthusiasts together through competitive
              gaming activities.
            </p>

            <p className="text-gray-400 leading-8">
              Our platform provides a central place where participants
              can explore games, register for tournaments, manage their
              participation, and check published results.
            </p>

            <Link
              to="/tournaments"
              className="inline-flex items-center gap-2 mt-8 bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              Explore Tournaments <ArrowRight size={19} />
            </Link>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-2xl p-10 text-center">
            <Gamepad2 size={75} className="text-orange-500 mx-auto mb-6" />

            <h3 className="text-2xl font-extrabold mb-3">
              SENSE ESPORTS EVENT
            </h3>

            <p className="text-gray-400">
              Play. Compete. Connect. Win.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="bg-[#0d1220] py-20 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-orange-500 font-bold uppercase tracking-widest mb-3">
                What We Offer
              </p>

              <h2 className="text-3xl md:text-4xl font-bold">
                Event Highlights
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="bg-[#080d19] border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition"
                  >
                    <Icon size={35} className="text-orange-500 mb-5" />

                    <h3 className="text-xl font-bold mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-7">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto px-5 py-20 text-center">
          <CalendarDays size={45} className="text-orange-500 mx-auto mb-5" />

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Ready to Join the Competition?
          </h2>

          <p className="text-gray-400 mb-8">
            Explore upcoming tournaments and become part of the esports event.
          </p>

          <Link
            to="/register"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 px-7 py-3 rounded-lg font-bold transition"
          >
            Join the Event <ArrowRight size={19} />
          </Link>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default About;
