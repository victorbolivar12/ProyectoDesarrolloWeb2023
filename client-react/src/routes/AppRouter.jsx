import React, { lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

const LoginScreen = lazy(() => import('../screens/LoginScreen'));
const RegisterScreen = lazy(() => import('../screens/RegisterScreen'));


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
        </Routes>
      </Router>
  );
};
