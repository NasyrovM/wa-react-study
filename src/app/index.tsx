import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../shared/ui/layout';
import { ErrorPage } from '../pages/error';
import { DashboardPage } from '../pages/dashboard';
import { LoginPage } from '../pages/login';
import { store } from './store';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';

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
      }
    ]
  },
  {
    path: "login",
    element: <LoginPage />
  }
]);

const queryClient = new QueryClient();

export function App()
{
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={router}/>
        </Provider>
      </QueryClientProvider>
    </div>
  );
}