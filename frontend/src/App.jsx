
import { Routes, Route } from "react-router-dom";

// Components
import ScrollToTop from "./components/public/ScrollToTop";
import Navbar from "./components/public/Navbar";
import Hero from "./components/public/Hero";
import Stats from "./components/public/Stats";
import GamesSection from "./components/public/GamesSection";
import TournamentSection from "./components/public/TournamentSection";
import Footer from "./components/public/Footer";


// Layouts
import PlayerLayout from "./layouts/PlayerLayout";
import AdminLayout from "./layouts/AdminLayout";
import StaffLayout from "./layouts/StaffLayout";

// Public Pages
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import Games from "./pages/public/Games";
import Tournaments from "./pages/public/Tournaments";
import TournamentDetails from "./pages/public/TournamentDetails";
import NotFound from "./pages/public/NotFound";
import About from "./pages/public/About";
// Player Pages
import UserDashboard from "./pages/player/UserDashboard";
import MyTournaments from "./pages/player/MyTournaments";
import UserProfile from "./pages/player/UserProfile";
import UserSettings from "./pages/player/UserSettings";
import Notifications from "./pages/player/Notifications";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminTournaments from "./pages/admin/AdminTournaments";
import AdminRegistrations from "./pages/admin/AdminRegistrations";
import AdminResults from "./pages/admin/AdminResults";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminStaff from "./pages/admin/AdminStaff";

// Gate Staff Pages
import StaffLogin from "./pages/gate-staff/StaffLogin";
import GateStaffDashboard from "./pages/gate-staff/GateStaffDashboard";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <GamesSection />
      <TournamentSection />
      <Footer />
    </>
  );
}


function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<><Navbar /><Login /></>} />
        <Route path="/register" element={<><Navbar /><Register /></>} />
        <Route path="/games" element={<Games />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route
          path="/tournaments/:id"
          element={<><Navbar /><TournamentDetails /><Footer /></>}
        />
        <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
         <Route path="/about" element={<About />} />
        {/* Player Routes */}
        <Route path="/dashboard" element={<PlayerLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path="tournaments" element={<MyTournaments />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="settings" element={<UserSettings />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="tournaments" element={<AdminTournaments />} />
          <Route path="registrations" element={<AdminRegistrations />} />
          <Route path="results" element={<AdminResults />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="staff" element={<AdminStaff />} />
        </Route>

        {/* Gate Staff Routes */}
        <Route path="/staff/login" element={<StaffLogin />} />

        <Route path="/staff" element={<StaffLayout />}>
          <Route index element={<GateStaffDashboard />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
}

export default App;
