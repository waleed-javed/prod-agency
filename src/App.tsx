import { RouterProvider } from "react-router-dom";
import { default as routes } from "./routes/RoutesManager";

const App = () => {
  // return routes
  return <RouterProvider router={routes} />;
};

export default App;
