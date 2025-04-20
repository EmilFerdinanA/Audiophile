import { createBrowserRouter } from "react-router";
import { Home } from "../pages/home/page.tsx";
import { Category } from "../pages/category/page.tsx";
import { Root } from "../pages/Root.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "category/:name", element: <Category /> },
    ],
  },
]);
