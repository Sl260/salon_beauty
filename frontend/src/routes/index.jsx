import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ServicePage from "../pages/ServicePage";
import AboutPage from "../pages/AboutPage";
import RegisterPage from "../pages/RegisterPage";
import AppointmentsPage from "../pages/AppointmentsPage";
import AppointmentPage from "../pages/AppointmentPage";

const Routes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/appointment",
      element: <AppointmentPage />,
    },
    {
      path: "/service",
      element: <ServicePage />,
    },
    {
      path: "/about-us",
      element: <AboutPage />,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/appointments",
      element: <AppointmentsPage />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/appointments",
          element: <AppointmentsPage />,
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...((!token && routesForNotAuthenticatedOnly) || []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
};

export default Routes;
