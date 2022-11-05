import React from "react";
import "./App.css";
import Home from "./pages/home";
import Contact from "./pages/contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
