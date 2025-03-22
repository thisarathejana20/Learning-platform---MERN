import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";
import InstructorProvider from "./context/InstructorProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <InstructorProvider>
          <App />
        </InstructorProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
