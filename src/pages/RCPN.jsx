import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../styles/pages-clean.css";

export default function RCPN() {
  return (
    <div className="rcpn-page">
      <h1 className="page-main-title">Registro Civil das Pessoas Naturais</h1>

      <nav className="page-navigation">
        <NavLink to="/rcpn" end className="nav-item">
          Introdução
        </NavLink>
        <NavLink to="/rcpn/nascimento" className="nav-item">
          Nascimento
        </NavLink>
        <NavLink to="/rcpn/casamento" className="nav-item">
          Casamento
        </NavLink>
        <NavLink to="/rcpn/obito" className="nav-item">
          Óbito
        </NavLink>
        <NavLink to="/rcpn/averbacoes" className="nav-item">
          Averbações
        </NavLink>
        <NavLink to="/rcpn/certidoes" className="nav-item">
          Certidões
        </NavLink>
      </nav>

      {/* AQUI ENTRA O CONTEÚDO DAS SUBPÁGINAS */}
      <Outlet />
    </div>
  );
}
