import { createBrowserRouter } from "react-router-dom";
import HomePage from "../views/HomePage";
import ItemDetailPage from "../views/ItemDetailPage";
import ItemsPage from "../views/ItemsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/items",
    element: <ItemsPage />,
  },

  {
    path: "/items/:id",
    element: <ItemDetailPage />,
  },
]);

export default router;
