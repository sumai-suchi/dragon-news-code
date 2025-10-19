import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
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
