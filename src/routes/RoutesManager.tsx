import { createBrowserRouter } from "react-router-dom";
import Landing from "../layout";
import NotFound from "../pages/404";
import HomePage from "../pages/home";
import { RoutesProvider } from "../utilities/constants";

const RoutesManager = createBrowserRouter([
  {
    path: RoutesProvider.Home,
    element: <Landing />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
]);

export default RoutesManager;
