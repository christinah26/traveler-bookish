import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// @ts-ignore
import "./output.css";
import App from "./App.js";
import AuthProvider from "./provider/AuthProvider.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </StrictMode>
);
