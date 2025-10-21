import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Homepage from "../pages/Homepage";

import CategoryDetails from "../components/CategoryDetails";
import News from "../pages/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },

      {
        path: "category/:id",
        element: <CategoryDetails></CategoryDetails>,
        loader: async () => {
          const res = await fetch("/news.json");
          return res;
        },
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
