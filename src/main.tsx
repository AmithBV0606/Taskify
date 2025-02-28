import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import TodosContextProvider from "./contexts/TodosContextProvider.tsx";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <KindeProvider
      clientId="e561538a968e4e39b37067b7242487dd"
      domain="https://amith.kinde.com"
      redirectUri={
        process.env.NODE_ENV === "production"
          ? "https://taskify-alpha-ivory.vercel.app"
          : "http://localhost:5173"
      }
      logoutUri={
        process.env.NODE_ENV === "production"
          ? "https://taskify-alpha-ivory.vercel.app"
          : "http://localhost:5173"
      }
    >
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </KindeProvider>
  </React.StrictMode>
);
