import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes.ts";
import { OpenRightSidebarProvider } from "providers/OpenRightSidebarContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OpenRightSidebarProvider>
      <RouterProvider router={routes} />
    </OpenRightSidebarProvider>
  </React.StrictMode>
);
