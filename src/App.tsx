import { RouterProvider } from "react-router";
import { router } from "./routes/routes.tsx";

export const App = () => {
  return <RouterProvider router={router} />;
};
