import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Aboutus from "./pages/Aboutus";
import ErrorPage from "./ErrorPage";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "pages/Aboutus",
    element: <Aboutus />,
    errorElement: <ErrorPage />,
  },
  {
    path: "pages/Contact",
    element: <Contact />,
    errorElement: <ErrorPage />
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);