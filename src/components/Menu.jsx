import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/menu.css";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [rcpnOpen, setRcpnOpen] = useState(false);
  const [notasOpen, setNotasOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setRcpnOpen(false);
    setNotasOpen(false);
  };

  return (
    <>
      {/* BOTÃO HAMBURGER — aria-expanded correto para leitores de tela */}
      <button
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Menu de navegação"
        aria-expanded={isOpen}
        aria-controls="main-navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="menu-overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* MENU NAVEGAÇÃO */}
      <nav
        id="main-navigation"
        className={`main-menu ${isOpen ? "open" : ""}`}
        aria-label="Menu principal"
      >

        <NavLink to="/" className="menu-link" onClick={closeMenu}>
          Início
        </NavLink>

        {/* RCPN COM SUBMENU */}
        <div className="menu-dropdown">
          <button
            className="menu-link dropdown-toggle"
            onClick={() => setRcpnOpen(!rcpnOpen)}
            aria-expanded={rcpnOpen}
            aria-haspopup="true"
            aria-controls="submenu-rcpn"
          >
            RCPN
            <span className={`arrow ${rcpnOpen ? "up" : ""}`} aria-hidden="true">▼</span>
          </button>

          <div
            id="submenu-rcpn"
            className={`submenu ${rcpnOpen ? "open" : ""}`}
            role="menu"
          >
            <NavLink to="/rcpn"                onClick={closeMenu} role="menuitem">Introdução</NavLink>
            <NavLink to="/rcpn/nascimento"     onClick={closeMenu} role="menuitem">Nascimento</NavLink>
            <NavLink to="/rcpn/casamento"      onClick={closeMenu} role="menuitem">Casamento</NavLink>
            <NavLink to="/rcpn/obito"          onClick={closeMenu} role="menuitem">Óbito</NavLink>
            <NavLink to="/rcpn/averbacoes"     onClick={closeMenu} role="menuitem">Averbações e Anotações</NavLink>
            <NavLink to="/rcpn/certidoes"      onClick={closeMenu} role="menuitem">Certidões</NavLink>
          </div>
        </div>

        {/* NOTAS COM SUBMENU */}
        <div className="menu-dropdown">
          <button
            className="menu-link dropdown-toggle"
            onClick={() => setNotasOpen(!notasOpen)}
            aria-expanded={notasOpen}
            aria-haspopup="true"
            aria-controls="submenu-notas"
          >
            Notas
            <span className={`arrow ${notasOpen ? "up" : ""}`} aria-hidden="true">▼</span>
          </button>

          <div
            id="submenu-notas"
            className={`submenu ${notasOpen ? "open" : ""}`}
            role="menu"
          >
            <NavLink to="/notas"                       onClick={closeMenu} role="menuitem">Introdução</NavLink>
            <NavLink to="/notas/escrituras"            onClick={closeMenu} role="menuitem">Escritura</NavLink>
            <NavLink to="/notas/procuracao"            onClick={closeMenu} role="menuitem">Procuração</NavLink>
            <NavLink to="/notas/testamento"            onClick={closeMenu} role="menuitem">Testamento</NavLink>
            <NavLink to="/notas/inventario"            onClick={closeMenu} role="menuitem">Inventário</NavLink>
            <NavLink to="/notas/usucapiao"             onClick={closeMenu} role="menuitem">Usucapião</NavLink>
            <NavLink to="/notas/reconhecimentofirma"   onClick={closeMenu} role="menuitem">Reconhecimento de Firma</NavLink>
            <NavLink to="/notas/autenticacao"          onClick={closeMenu} role="menuitem">Autenticação de Documento</NavLink>
            <NavLink to="/notas/apostilahaia"          onClick={closeMenu} role="menuitem">Apostila em HAIA</NavLink>
          </div>
        </div>

        <NavLink to="/identidade"   className="menu-link" onClick={closeMenu}>2ª Via de Identidade</NavLink>
        <NavLink to="/lgpd"         className="menu-link" onClick={closeMenu}>LGPD</NavLink>
        <NavLink to="/links-uteis"  className="menu-link" onClick={closeMenu}>Links Úteis</NavLink>
        <NavLink to="/contato"      className="menu-link" onClick={closeMenu}>Contato</NavLink>

      </nav>
    </>
  );
}
