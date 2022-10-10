// import logo from './logo.svg';
// import './App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/portfolio",
      element: <Portfolio/>
    },
    {
      path: "/resume",
      element: <Resume/>
    },
    {
      path: "/contact",
      element: <Contact/>
    },
  ]);
  return (
    <div>


      <RouterProvider router={router} />





    </div>
  );
}

export default App;
