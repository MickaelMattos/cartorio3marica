import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav style={styles.menu}>
      <NavLink to="/" style={styles.link}>
        Início
      </NavLink>

      {/* RCPN COM SUBMENU */}
      <div className="menu-rcpn" style={{ ...styles.dropdown, position: "relative" }}>
        <NavLink to="/rcpn" style={styles.link}>
          RCPN <span style={styles.arrow}>▼</span>
        </NavLink>

        <div className="submenu-rcpn" style={styles.dropdownMenu}>
          <NavLink to="/rcpn/nascimento">Nascimento</NavLink>
          <NavLink to="/rcpn/casamento">Casamento</NavLink>
          <NavLink to="/rcpn/obito">Óbito</NavLink>
          <NavLink to="/rcpn/averbacoes">Averbações e Anotações</NavLink>
          <NavLink to="/rcpn/certidoes">Certidões</NavLink>
        </div>
      </div>
	  
	  {/* NOTAS COM SUBMENU */}
      <div className="menu-notas" style={{ ...styles.dropdown, position: "relative" }}>
        <NavLink to="/notas" style={styles.link}>
          Notas <span style={styles.arrow}>▼</span>
        </NavLink>

        <div className="submenu-notas" style={styles.dropdownMenu}>
          <NavLink to="/notas/escrituras">Escritura</NavLink>
          <NavLink to="/notas/procuracao">Procuração</NavLink>
          <NavLink to="/notas/testamento">Testamento</NavLink>
          <NavLink to="/notas/inventario">Inventário</NavLink>
          <NavLink to="/notas/usucapiao">Usucapião</NavLink>
		  <NavLink to="/notas/reconhecimentofirma">Reconhecimento de Firma</NavLink>
		  <NavLink to="/notas/autenticacao">Autenticação de Documento</NavLink>
		  <NavLink to="/notas/apostilahaia">Apostila em HAIA</NavLink>
        </div>
      </div>

      <NavLink to="/identidade" style={styles.link}>
        2ª Via de Identidade
      </NavLink>

      <NavLink to="/lgpd" style={styles.link}>
        LGPD
      </NavLink>

      <NavLink to="/links-uteis" style={styles.link}>
        Links Úteis
      </NavLink>

      <NavLink to="/contato" style={styles.link}>
        Contato
      </NavLink>
    </nav>
  );
}
const styles = {
  menu: {
    display: "flex",
    gap: "24px",
    alignItems: "center",
    fontSize: "14px"
  },

  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    gap: 6
  },

  arrow: {
    fontSize: 10,
    opacity: 0.8
  },

 dropdownMenu: {
  position: "absolute",
  top: "100%",
  left: 0,
  background: "#ffffff",
  borderRadius: 10,
  padding: "8px 0",
  minWidth: 240,
  boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
  zIndex: 1000
}

};
