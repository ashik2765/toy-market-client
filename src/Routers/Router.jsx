import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import AllToy from "../Pages/AllToy/AllToy";
import Blogs from "../Pages/Blog/Blogs";
import AddToy from "../Pages/AddToys/AddToy";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
        }
      ]
    },
    
    
   
    
    
  ]);
  export default router;

