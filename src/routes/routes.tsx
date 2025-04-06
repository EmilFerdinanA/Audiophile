import { createBrowserRouter } from "react-router";
import { Home } from "../pages/home/page.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
