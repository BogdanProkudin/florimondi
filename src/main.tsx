import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Success } from "./pages/Succes.tsx";
import { Fail } from "./pages/Fail.tsx";
const router = createBrowserRouter([
  {
    path: "/florimondi/",
    element: <App />,
    children: [
      { path: "/florimondi/", element: <div>Home</div> },
      { path: "/florimondi/success", element: <Success /> },
      { path: "/florimondi/fail", element: <Fail /> },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
