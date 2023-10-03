import Home from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";
import TestPage from "@/pages/test";
const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        Component: Home,
        loader: ({ params }) => {
          return new Promise((resolve) =>
            setTimeout(() => {
              resolve(params);
            }, 5000),
          );
        },
        path: "/:id",
        action: ({ params, request }) => {
          console.log(params);
          return new Promise((resolve) => {
            console.log(params);
            console.log(request);
            setTimeout(() => {
              resolve(true);
            }, 3000);
          });
        },
      },
      {
        path: "/test1",
        Component: TestPage,
      },
    ],
  },
]);

export default router;
