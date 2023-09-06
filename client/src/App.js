import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ApplyDoctor from "./pages/ApplyDoctor";
import NotificationPage from "./pages/NotificationPage";
import Users from "./pages/admin/Users";
import Doctors from "./pages/admin/Doctors";
import Profile from "./pages/doctor/Profile";
import BookingPage from "./pages/BookingPage";
import Appointments from "./pages/Appointments";
import DoctorAppointments from "./pages/doctor/DoctorAppointments";
function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
              <HomePage/>
          }
        />
        <Route
          path="/login"
          element={
              <Login/>
          }
        />
        <Route
          path="/register"
          element={
              <Register/>
          }
        />
      </Routes>
  </BrowserRouter>
</>
  );
}

export default App;
