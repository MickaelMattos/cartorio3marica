import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../styles/pages-clean.css";

export default function Notas() {
  return (
    <div className="notas-page">
      <h1 className="page-main-title">Tabelionato de Notas</h1>

      <nav className="page-navigation">
        <NavLink to="/notas" end className="nav-item">
          Introdução
        </NavLink>
        <NavLink to="/notas/escrituras" className="nav-item">
          Escrituras
        </NavLink>
        <NavLink to="/notas/procuracao" className="nav-item">
          Procuração
        </NavLink>
        <NavLink to="/notas/testamento" className="nav-item">
          Testamento
        </NavLink>
        <NavLink to="/notas/inventario" className="nav-item">
          Inventário
        </NavLink>
        <NavLink to="/notas/usucapiao" className="nav-item">
          Usucapião
        </NavLink>
        <NavLink to="/notas/reconhecimentofirma" className="nav-item">
          Reconhecimento de Firma
        </NavLink>
        <NavLink to="/notas/autenticacao" className="nav-item">
          Autenticação
        </NavLink>
        <NavLink to="/notas/apostilahaia" className="nav-item">
          Apostila HAIA
        </NavLink>
      </nav>

      {/* AQUI ENTRA O CONTEÚDO DAS SUBPÁGINAS */}
      <Outlet />
    </div>
  );
}
