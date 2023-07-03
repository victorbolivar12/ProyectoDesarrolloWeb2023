import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Sidebar } from "../components";
const LoginScreen = lazy(() => import("../screens/LoginScreen"));
const AboutUsScreen = lazy(() => import("../screens/AboutUsScreen"));
const ServicesScreen = lazy(() => import("../screens/ServicesScreen"));
const ContactScreen = lazy(() => import("../screens/ContactScreen"));
const LandingScreen = lazy(() => import("../screens/LandingScreen"));
const RegisterScreen = lazy(() => import("../screens/RegisterScreen"));
const DashboardScreen = lazy(() => import("../screens/DashboardScreen"));
const CalendarScreen = lazy(() => import("../screens/CalendarScreen"));
const QuotesScreen = lazy(() => import("../screens/QuotesScreen"));
const TherapiesScreen = lazy(() => import("../screens/TherapiesScreen"));
const UsersScreen = lazy(() => import("../screens/UsersScreen"));

// const Protected = ({ children }) => {
//   const { auth } = useAuth();

//   if (!auth?.isAuthenticated) {
//     return <Navigate to="/" replace />;
//   }
//   return children;
// };

const IsLoggedIn = ({ children }) => {
  //   const { auth } = useAuth();

  //   if (auth?.isAuthenticated) {
  //     return <Navigate to="/inicio/movimientos" replace />;
  //   }
  return children;
};

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <IsLoggedIn>
              <LandingScreen />
            </IsLoggedIn>
          }
        />
        <Route
          path="/about-us"
          element={
            <IsLoggedIn>
              <AboutUsScreen />
            </IsLoggedIn>
          }
        />
        <Route
          path="/services"
          element={
            <IsLoggedIn>
              <ServicesScreen />
            </IsLoggedIn>
          }
        />
        <Route
          path="/contact"
          element={
            <IsLoggedIn>
              <ContactScreen />
            </IsLoggedIn>
          }
        />
        <Route
          path="/login"
          element={
            <IsLoggedIn>
              <LoginScreen />
            </IsLoggedIn>
          }
        />
        <Route
          path="/register"
          element={
            <IsLoggedIn>
              <RegisterScreen />
            </IsLoggedIn>
          }
        />
        <Route
          path="/dashboard"
          element={
            <IsLoggedIn>
              <Sidebar>
                <DashboardScreen />
              </Sidebar>
            </IsLoggedIn>
          }
        />
        <Route
          path="/dashboard/calendar"
          element={
            <IsLoggedIn>
              <Sidebar>
                <CalendarScreen />
              </Sidebar>
            </IsLoggedIn>
          }
        />
        <Route
          path="/dashboard/therapies"
          element={
            <IsLoggedIn>
              <Sidebar>
                <TherapiesScreen />
              </Sidebar>
            </IsLoggedIn>
          }
        />
        <Route
          path="/dashboard/quotes"
          element={
            <IsLoggedIn>
              <Sidebar>
                <QuotesScreen />
              </Sidebar>
            </IsLoggedIn>
          }
        />
        <Route
          path="/dashboard/users"
          element={
            <IsLoggedIn>
              <Sidebar>
                <UsersScreen />
              </Sidebar>
            </IsLoggedIn>
          }
        />
      </Routes>
    </Router>
  );
};
