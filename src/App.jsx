import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import ServiceDetails from "./pages/ServiceDetails.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/signup.jsx";
import Profile from "./pages/Profile.jsx";
import Services from "./pages/Services.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (

    <>
    <ScrollToTop />
    <Routes>
      {/* Layout Route */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="profile" element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        } />
        <Route
          path="service/:id"
          element={
            <PrivateRoute>
              <ServiceDetails />
            </PrivateRoute>
          }
        />
      </Route>

      {/* Auth Routes */}
      <Route path="/login" element={<Login  />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="*" element={<NotFound />} />
      {/* 404 */}
    </Routes>
    </>
  );
}

export default App;
