import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // 🔍 SEO — obrigatório para react-helmet-async
import router from "./router";
import { ThemeProvider } from "./context/ThemeContext";

// ============ ESTILOS — ORDEM IMPORTA ============
import "./styles/global.css";       // 1. Reset e base
import "./styles/theme.css";        // 2. Variáveis de tema (claro/escuro)
import "./styles/app-responsive.css"; // 3. Layout principal
import "./styles/utilities.css";    // 4. Utilitários
import "./styles/polish.css";       // 5. Polimento visual final

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <HelmetProvider> 
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
	</HelmetProvider>
  </React.StrictMode>
);
