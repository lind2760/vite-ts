import { RouterProvider } from "react-router";
import router from "@/routes";
import { Spin } from "antd";

function App() {
  return <RouterProvider router={router} fallbackElement={<Spin />} />;
}

export default App;
