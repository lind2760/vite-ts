import Home from "@/pages/home";
import { createBrowserRouter } from "react-router-dom/";
import TestPage from "@/pages/test";
const router = createBrowserRouter([
  {
    path: "/home",
    children: [
      {
        // index: f,
        Component: Home,
      },
      {
        index: true,
        Component: TestPage,
      },
    ],
  },
]);

export default router;
