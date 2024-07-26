import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../shared/ui/layout';
import { ErrorPage } from '../pages/error';
import { DashboardPage } from '../pages/dashboard';
import { LoginPage } from '../pages/login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children : [
      {
        index : true, 
        element: <DashboardPage />
      },
      {
        path: "dashboard",
        element: <DashboardPage />
      }]
  },
  {
    path: "login",
    element: <LoginPage />
  }
]);


export function App()
{
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <RouterProvider router={router}/>
    </div>
  );
}