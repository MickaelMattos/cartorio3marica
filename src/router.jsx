import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Home from "./pages/Home";

// RCPN
import RCPN from "./pages/RCPN";
import RcpnIndex from "./pages/RCPN/RcpnIndex";
import Nascimento from "./pages/RCPN/Nascimento";
import Casamento from "./pages/RCPN/Casamento";
import Obito from "./pages/RCPN/Obito";
import Averbacoes from "./pages/RCPN/Averbacoes";
import Certidoes from "./pages/RCPN/Certidoes";

// NOTAS
import Notas from "./pages/Notas";
import NotasIndex from "./pages/Notas/NotasIndex";
import ApostilaHAIA from "./pages/Notas/ApostilaHAIA";
import Autenticacao from "./pages/Notas/Autenticacao";
import Escrituras from "./pages/Notas/Escrituras";
import Inventario from "./pages/Notas/Inventario";
import Procuracao from "./pages/Notas/Procuracao";
import ReconhecimentoFirma from "./pages/Notas/ReconhecimentoFirma";
import Testamento from "./pages/Notas/Testamento";
import Usucapiao from "./pages/Notas/Usucapiao";

// OUTRAS
import Identidade from "./pages/Identidade";
import LGPD from "./pages/LGPD";
import LinksUteis from "./pages/LinksUteis";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },

      {
        path: "rcpn",
        element: <RCPN />,
        children: [
          { index: true, element: <RcpnIndex /> },
          { path: "nascimento",  element: <Nascimento /> },
          { path: "casamento",   element: <Casamento /> },
          { path: "obito",       element: <Obito /> },
          { path: "averbacoes",  element: <Averbacoes /> },
          { path: "certidoes",   element: <Certidoes /> },
        ]
      },

      {
        path: "notas",
        element: <Notas />,
        children: [
          { index: true, element: <NotasIndex /> },
          { path: "apostilahaia",        element: <ApostilaHAIA /> },
          { path: "autenticacao",        element: <Autenticacao /> },  // ← era "Autenticacao" (maiúscula) — BUG 4 corrigido
          { path: "escrituras",          element: <Escrituras /> },     // ← era "Escrituras"
          { path: "inventario",          element: <Inventario /> },     // ← era "Inventario"
          { path: "procuracao",          element: <Procuracao /> },
          { path: "reconhecimentofirma", element: <ReconhecimentoFirma /> },
          { path: "testamento",          element: <Testamento /> },
          { path: "usucapiao",           element: <Usucapiao /> },
        ]
      },

      { path: "identidade",   element: <Identidade /> },
      { path: "lgpd",         element: <LGPD /> },
      { path: "links-uteis",  element: <LinksUteis /> },
      { path: "contato",      element: <Contato /> },

      // Rota 404 — qualquer URL não mapeada
      { path: "*", element: <NotFound /> },
    ]
  }
]);

export default router;
