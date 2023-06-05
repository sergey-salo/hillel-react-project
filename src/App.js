import './App.css';
import './assets/css/normalize.css';
import {
  // createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { routers } from "./router";

// const router = createBrowserRouter(routers);
const router = createHashRouter(routers);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
