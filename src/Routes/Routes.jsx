import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../Pages/SignIn";
import ProtectedRoutes from "../Components/ProtectedRoutes";
import Template from "../Pages/Template";
import AboutUs from "../Pages/AboutUs";
import { Tools } from "../Pages/Tools/Tools";
import { Administrator } from "../Pages/Tools/Administrator";
import { ClientBranding } from "../Pages/Tools/ClientBranding";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoutes>
            <App />
          </ProtectedRoutes>
        ),
        index: true,
      },
      {
        path: "/aboutUs",
        element: (
          <ProtectedRoutes>
            <AboutUs />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/tools",
        element: (
          <ProtectedRoutes>
            <Outlet />
          </ProtectedRoutes>
        ),
        children: [
          {
            path: "/tools",
            element: (
              <ProtectedRoutes>
                <Tools />
              </ProtectedRoutes>
            ),
            index: true,
          },
          {
            path: "administrator",
            element: (
              <ProtectedRoutes>
                <Administrator />
              </ProtectedRoutes>
            ),
          },
          {
            path: "client-branding",
            element: (
              <ProtectedRoutes>
                <ClientBranding />
              </ProtectedRoutes>
            ),
          },
        ],
      },
    ],
  },

  {
    path: "/signing",
    element: <SignIn />,
  },
  {
    path: "*",
    element: <div> Page not found</div>,
  },
]);

export { Routes };
