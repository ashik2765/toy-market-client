import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import AllToy from "../Pages/AllToy/AllToy";
import Blogs from "../Pages/Blog/Blogs";
import AddToy from "../Pages/AddToys/AddToy";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import MyToys from "../Pages/MyToy/MyToys";
import PrivateRoute from "./PrivateRoute";
import UpdateMytoy from "../Pages/MyToy/UpdateMytoy";
import ErrorPage from "../Pages/Errorpage/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'alltoys',
          element:<AllToy></AllToy>
        },
        {
          path:'blog',
          element:<Blogs></Blogs>
        },
        {
          path:'addtoy',
          element:<AddToy></AddToy>
        },
        {
          path:'mytoy',
          element:<MyToys></MyToys>
        },
        {
          path:'update/:id',
          element:<UpdateMytoy></UpdateMytoy>,
          loader:({params})=> fetch(`https://toy-shop-server.vercel.app/updateToy/${params.id}`)

        },
        {
          path:'/details/:id',
          element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader:({params})=>fetch(`https://toy-shop-server.vercel.app/toys/${params.id}`)
        }
      ]
    },
    
    
   
    
    
  ]);
  export default router;

