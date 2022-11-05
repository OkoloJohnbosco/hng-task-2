import React from "react";
import "./App.css";
import Home from "./pages/home";
import Contact from "./pages/contact";
import ErrorPage from "./pages/error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
