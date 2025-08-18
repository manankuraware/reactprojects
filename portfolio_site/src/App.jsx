
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./component/AppLayout";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { Features } from "./pages/Features";
import { Resume } from "./pages/Resume";
import { Portfolio } from "./pages/Portfolio";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/resume",
          element: <Resume />,
        },
        {
          path: "/features",
          element: <Features />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
