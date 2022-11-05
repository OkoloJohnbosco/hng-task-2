import React from "react";
import "./App.css";
import Home from "./pages/home";
import Contact from "./pages/contact";
import ErrorPage from "./pages/error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
