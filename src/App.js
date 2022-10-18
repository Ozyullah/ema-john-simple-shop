import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Shop from './components/Shop/Shop';
import Main from './Layout/Main';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import Login from './components/Login/Login';
import { productsAndCardLoader } from './Loaders/productsAndCardLoader';



function App() {
  const router =createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader: () => fetch('products.JSON'),
          element:<Shop></Shop>
        },
        {
          path:'/orders',
          loader: productsAndCardLoader,
          element:<Orders></Orders>
        },
        {
          path:'/inventory',
          element:<Inventory></Inventory>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'login',
          element:<Login></Login>
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
