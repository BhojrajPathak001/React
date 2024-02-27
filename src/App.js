import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, //yeh wrap krta hai saare children routes ko aur outlet deta hai jo ki bata hai kaha par children aaane cahheye
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
