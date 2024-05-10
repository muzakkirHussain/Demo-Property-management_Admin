import { Outlet, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ProtectedRoutes from '../Components/ProtectedRoutes';
import Template from '../Pages/Template';
import AboutUs from '../Pages/AboutUs';
import { Tools } from '../Pages/Tools/Tools';
import { Administrator } from '../Pages/Tools/Administrator';
import { ClientBranding } from '../Pages/Tools/ClientBranding';
import { SuperAdminCreate } from '../Pages/AccountCreation/SuperAdminCreate';
import { Login } from '../Pages/Auth/Login';
import { UnassignedClients } from '../Pages/Tools/UnassignedClients';
import { MaintenanceCheckList } from '../Pages/Tools/MaintenanceCheckList';
import { ArrearsNotifications } from '../Pages/Tools/ArrearsNotifications';
import { ComplianceList } from '../Pages/Tools/ComplianceList';
import { MyContacts } from '../Pages/Contacts/MyContacts';
import { ContactsDetails } from '../Pages/Contacts/ContactsDetails';
import ContactCreate from '../Pages/Contacts/ContactCreate';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoutes>
        <Template />
      </ProtectedRoutes>
    ),
    children: [
      {
        path: '/',
        element: (
          <ProtectedRoutes>
            <App />
          </ProtectedRoutes>
        ),
        index: true,
      },
      {
        path: '/aboutUs',
        element: (
          <ProtectedRoutes>
            <AboutUs />
          </ProtectedRoutes>
        ),
      },
      {
        path: '/tools',
        element: (
          <ProtectedRoutes>
            <Outlet />
          </ProtectedRoutes>
        ),
        children: [
          {
            path: '/tools',
            element: (
              <ProtectedRoutes>
                <Tools />
              </ProtectedRoutes>
            ),
            index: true,
          },
          {
            path: 'administrator',
            element: (
              <ProtectedRoutes>
                <Administrator />
              </ProtectedRoutes>
            ),
          },
          {
            path: 'client-branding',
            element: (
              <ProtectedRoutes>
                <ClientBranding />
              </ProtectedRoutes>
            ),
          },
          {
            path: 'unassigned-records',
            element: (
              <ProtectedRoutes>
                <UnassignedClients />
              </ProtectedRoutes>
            ),
          },
          {
            path: 'maintenance-checklist',
            element: (
              <ProtectedRoutes>
                <MaintenanceCheckList />
              </ProtectedRoutes>
            ),
          },
          {
            path: 'arrears-notifications',
            element: (
              <ProtectedRoutes>
                <ArrearsNotifications />
              </ProtectedRoutes>
            ),
          },
          {
            path: 'compliance-list',
            element: (
              <ProtectedRoutes>
                <ComplianceList />
              </ProtectedRoutes>
            ),
          },
          {
            path: 'email-templates',
            element: (
              <div>Work In Progress</div>
              // <ProtectedRoutes>
              //   <ComplianceList />
              // </ProtectedRoutes>
            ),
          },
        ],
      },

      {
        path: '/contacts',
        element: (
          <ProtectedRoutes>
            <Outlet />
          </ProtectedRoutes>
        ),
        children: [
          {
            path: '',
            element: (
              <ProtectedRoutes>
                <MyContacts />
              </ProtectedRoutes>
            ),
            index: true,
          },
          {
            path: ':id',
            element: (
              <ProtectedRoutes>
                <ContactsDetails />
              </ProtectedRoutes>
            ),
          },
          {
            path: 'create-contact',
            element: (
              <ProtectedRoutes>
                <ContactCreate />
              </ProtectedRoutes>
            ),
          },
        ],
      },
    ],
  },
  {
    path: '/superAdmin/:id',
    element: <SuperAdminCreate />,
  },

  {
    path: '/login',
    element: <Login />,
  },

  {
    path: '*',
    element: <div> Page not found</div>,
  },
]);

export { Routes };
