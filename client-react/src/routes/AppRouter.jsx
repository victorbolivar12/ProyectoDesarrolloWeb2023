import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Sidebar } from "../components";
import { useAuth } from "../hooks";
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

const Protected = ({ children }) => {
  const { auth } = useAuth();

  if (!auth?.isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const IsLoggedIn = ({ children }) => {
  const { auth } = useAuth();

  if (auth?.isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            // <IsLoggedIn>
            //   <LandingScreen />
            // </IsLoggedIn>
            <LandingScreen />
          }
        />
        <Route
          path="/about-us"
          element={
            // <IsLoggedIn>
            //   <AboutUsScreen />
            // </IsLoggedIn>
            <AboutUsScreen />
          }
        />
        <Route
          path="/services"
          element={
            // <IsLoggedIn>
            //   <ServicesScreen />
            // </IsLoggedIn>
            <ServicesScreen />
          }
        />
        <Route
          path="/contact"
          element={
            // <IsLoggedIn>
            //   <ContactScreen />
            // </IsLoggedIn>
            <ContactScreen />
          }
        />
        <Route
          path="/login"
          element={
            // <IsLoggedIn>
            //   <LoginScreen />
            // </IsLoggedIn>
            <LoginScreen />
          }
        />
        <Route
          path="/register"
          element={
            // <IsLoggedIn>
            //   <RegisterScreen />
            // </IsLoggedIn>
            <RegisterScreen />
          }
        />
        <Route
          path="/dashboard"
          element={
            // <Protected>
            //   <Sidebar>
            //     <DashboardScreen />
            //   </Sidebar>
            // </Protected>
            <Sidebar>
              <DashboardScreen />
            </Sidebar>
          }
        />
        <Route
          path="/dashboard/calendar"
          element={
            // <Protected>
            //   <Sidebar>
            //     <CalendarScreen />
            //   </Sidebar>
            // </Protected>
            <Sidebar>
              <CalendarScreen />
            </Sidebar>
          }
        />
        <Route
          path="/dashboard/therapies"
          element={
            // <Protected>
            //   <Sidebar>
            //     <TherapiesScreen />
            //   </Sidebar>
            // </Protected>
              <Sidebar>
                <TherapiesScreen />
              </Sidebar>
          }
        />
        <Route
          path="/dashboard/quotes"
          element={
            // <Protected>
            //   <Sidebar>
            //     <QuotesScreen />
            //   </Sidebar>
            // </Protected>
            <Sidebar>
              <QuotesScreen />
            </Sidebar>
          }
        />
        <Route
          path="/dashboard/users"
          element={
            // <Protected>
            //   <Sidebar>
            //     <UsersScreen />
            //   </Sidebar>
            // </Protected>
            <Sidebar>
                <UsersScreen />
             </Sidebar>
          }
        />
      </Routes>
    </Router>
  );
};
