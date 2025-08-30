
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./component/AppLayout";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { Resume } from "./pages/Resume";

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
          path: "/resume",
          element: <Resume />,
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
