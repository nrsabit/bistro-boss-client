import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-7xl mx-auto">
      <AuthProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </AuthProvider>
    </div>
  </React.StrictMode>
);
