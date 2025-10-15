import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import User from '../pages/User';






const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/Login',
        element:<Login/>
      },
      {
        path:'/SignUp',
        element:<SignUp/>
      },
      {
        path:'/User',
        element:<User/>
      },
    ]
  }
]);

export default router;