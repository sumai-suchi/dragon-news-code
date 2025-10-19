import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Homepage from "../pages/Homepage";
import AboutPage from "../pages/AboutPage";
import CareerPage from "../pages/CareerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Homepage></Homepage>,
      },
      {
        path: "about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "career",
        element: <CareerPage></CareerPage>,
      },
    ],
  },
  {
    path: "auth",
    element: <div>Authentication Layout</div>,
  },
  {
    path: "error",
    element: <div>Page not found layout</div>,
  },
]);

export default router;
