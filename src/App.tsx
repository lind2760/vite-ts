import { RouterProvider } from "react-router";
import router from "@/routes";
import { Empty } from "antd";

function App() {
  return <RouterProvider router={router} fallbackElement={<Empty />} />;
}

export default App;
