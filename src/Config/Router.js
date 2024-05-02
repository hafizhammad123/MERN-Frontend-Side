import { createBrowserRouter, RouterProvider, useNavigate,Outlet } from "react-router-dom";
import { useEffect } from "react";


//file import//
import Home from "../Components/Home";
import PostData from "../Components/Post-Sell";
import AddHistory from "../Components/My-adds";
import Updatedata from "../Components/Update";
import DetailPage from "../Components/Detail";
import RegisterPage from "../Components/Register";
import LoginPage from "../Components/Login";





const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout/>,
    children:[
  
  {
    path: "/",
    element: <RegisterPage />,
  },
  {
    path: "/Login",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/sell",
    element: <PostData />,
  },
  {
    path: "/adds",
    element: <AddHistory />,
  },
  {
    path: "/update/:id",
    element: <Updatedata />,
  },
  {
    path: "/Detail/:id",
    element: <DetailPage />,
  },
]
}  
]);


function Layout (){
  
const { pathname } = window.location;
const Token = localStorage.getItem('token');
const navigate = useNavigate();

  useEffect(() => {
    if (!Token) { // Agar user logged out hai
      if (pathname === '/sell' || pathname === '/home' || pathname === '/adds') {
        navigate('/Login');
      }
    } else { // Agar user logged in hai
      if (pathname === '/Login' || pathname === '/') {
        navigate('/home');
      }
    }
  }, [Token, pathname, navigate]);
  

  return<div>
    <Outlet/>
  </div>
}

function Router() {
  return <RouterProvider router={router} />
}

export default Router;