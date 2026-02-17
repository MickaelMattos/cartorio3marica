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
      {/* BOTÃO HAMBURGER */}
      <button 
        className={`hamburger ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* OVERLAY */}
      {isOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

      {/* MENU NAVEGAÇÃO */}
      <nav className={`main-menu ${isOpen ? 'open' : ''}`}>
        
        <NavLink to="/" className="menu-link" onClick={closeMenu}>
          Início
        </NavLink>

        {/* RCPN COM SUBMENU */}
        <div className="menu-dropdown">
          <button 
            className="menu-link dropdown-toggle"
            onClick={() => setRcpnOpen(!rcpnOpen)}
          >
            RCPN 
            <span className={`arrow ${rcpnOpen ? 'up' : ''}`}>▼</span>
          </button>

          <div className={`submenu ${rcpnOpen ? 'open' : ''}`}>
            <NavLink to="/rcpn" onClick={closeMenu}>Introdução</NavLink>
            <NavLink to="/rcpn/nascimento" onClick={closeMenu}>Nascimento</NavLink>
            <NavLink to="/rcpn/casamento" onClick={closeMenu}>Casamento</NavLink>
            <NavLink to="/rcpn/obito" onClick={closeMenu}>Óbito</NavLink>
            <NavLink to="/rcpn/averbacoes" onClick={closeMenu}>Averbações e Anotações</NavLink>
            <NavLink to="/rcpn/certidoes" onClick={closeMenu}>Certidões</NavLink>
          </div>
        </div>

        {/* NOTAS COM SUBMENU */}
        <div className="menu-dropdown">
          <button 
            className="menu-link dropdown-toggle"
            onClick={() => setNotasOpen(!notasOpen)}
          >
            Notas 
            <span className={`arrow ${notasOpen ? 'up' : ''}`}>▼</span>
          </button>

          <div className={`submenu ${notasOpen ? 'open' : ''}`}>
            <NavLink to="/notas" onClick={closeMenu}>Introdução</NavLink>
            <NavLink to="/notas/escrituras" onClick={closeMenu}>Escritura</NavLink>
            <NavLink to="/notas/procuracao" onClick={closeMenu}>Procuração</NavLink>
            <NavLink to="/notas/testamento" onClick={closeMenu}>Testamento</NavLink>
            <NavLink to="/notas/inventario" onClick={closeMenu}>Inventário</NavLink>
            <NavLink to="/notas/usucapiao" onClick={closeMenu}>Usucapião</NavLink>
            <NavLink to="/notas/reconhecimentofirma" onClick={closeMenu}>Reconhecimento de Firma</NavLink>
            <NavLink to="/notas/autenticacao" onClick={closeMenu}>Autenticação de Documento</NavLink>
            <NavLink to="/notas/apostilahaia" onClick={closeMenu}>Apostila em HAIA</NavLink>
          </div>
        </div>

        <NavLink to="/identidade" className="menu-link" onClick={closeMenu}>
          2ª Via de Identidade
        </NavLink>

        <NavLink to="/lgpd" className="menu-link" onClick={closeMenu}>
          LGPD
        </NavLink>

        <NavLink to="/links-uteis" className="menu-link" onClick={closeMenu}>
          Links Úteis
        </NavLink>

        <NavLink to="/contato" className="menu-link" onClick={closeMenu}>
          Contato
        </NavLink>

      </nav>
    </>
  );
}
