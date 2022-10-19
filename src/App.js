import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Shop from './components/Shop/Shop';
import Main from './Layout/Main';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import Login from './components/Login/Login';
import { productsAndCardLoader } from './Loaders/productsAndCardLoader';
import SignUp from './components/SignUp/SignUp';
import PrivetRoute from './route/PrivetRoute';
import Home from './components/Home/Home';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: '/shop',
        loader: () => fetch('products.JSON'),
        element: <Shop></Shop>
      },
      {
        path: '/orders',
        loader: productsAndCardLoader,
        element: <PrivetRoute><Orders></Orders></PrivetRoute>
      },
      {
        path: '/inventory',
        element: <PrivetRoute><Inventory></Inventory></PrivetRoute>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      }
      ]
    },

  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
