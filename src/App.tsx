import React from "react";
import "./App.css";
import Home from "./pages/home";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
