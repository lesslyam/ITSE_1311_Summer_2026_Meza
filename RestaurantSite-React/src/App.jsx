import { Routes, Route } from "react-router-dom";
import SiteNavbar from "./components/SiteNavBar";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ReservationsPage from "./pages/ReservationsPage";

function App() {
  return (
    <>
      <SiteNavbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
      </Routes>
    </>
  );
}

export default App;