import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home"
import About from "../pages/About"
import Project from "../pages/Project"
import Contact from "../pages/Contact";
import App from "../App"

export let myRoutes = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children: [
            {
            path:"/",
            element: <Home/>
          },
          {
            path:"/about",
            element:<About/>
          },
          {
            path:"/project",
            element: <Project/>
          },
          {
            path:"/contact",
            element: <Contact/>
          },
        ]
    }
])
