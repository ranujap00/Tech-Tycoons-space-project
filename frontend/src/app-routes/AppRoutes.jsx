import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Startup from "../pages/startup/Startup";
import Welcome from "../pages/welcome/Welcome";
import Login from "../pages/login/Login";
import InnerOuter from "../pages/inner-outer/InnerOuter";
import SolarDestination from "../pages/solar-destination/SolarDestination";
import DetailedInformation from "../pages/detailed-information/DetailedInformation";
import TravelMode from "../pages/travel-mode/TravelMode";
import Payment from "../pages/payment/Payment";
import BookingTicket from "../pages/booking-ticket/BookingTicket";
import Booking from "../pages/booking/Booking";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Startup />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/innerouter" element={<InnerOuter />} />
        <Route path="/solar-destination" element={<SolarDestination />} />
        <Route path="/detailed-information" element={<DetailedInformation />} />
        <Route path="/travel-mode" element={<TravelMode />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/booking-ticket" element={<BookingTicket />} />
      </Routes>
    </Router>
  );
}
export default AppRoutes;
