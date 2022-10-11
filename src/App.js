import { createBrowserRouter, RouterProvider, createHashRouter } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function App() {
  console.log(App);

  const router = createHashRouter([
    {
      path: "/",
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
