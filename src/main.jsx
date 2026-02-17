import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ThemeProvider } from "./context/ThemeContext";

// ============ ESTILOS - ORDEM IMPORTA! ============

// 1. Base (reset e fontes)
import "./styles/global.css";

// 2. Tema
import "./styles/theme.css";

// 3. Layout principal
import "./styles/app-responsive.css";

// 4. Utilitários (podem sobrescrever anteriores)
import "./styles/utilities.css";

// 5. Polimento visual final
import "./styles/polish.css";

// 6. Páginas específicas (opcional)
// import "./styles/contato-responsive.css";
// import "./styles/links-uteis.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
