import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Notas() {
  return (
     <div style={styles.page}>
      <h1 style={styles.title}>Tabelionato de Notas</h1>

      <nav style={styles.menu}>
        {menuItems.map((item) => (
          <MenuItem key={item.path} to={item.path}>
            {item.label}
          </MenuItem>
        ))}
      </nav>

      {/* AQUI ENTRA O CONTEÚDO DAS SUBPÁGINAS */}
      <Outlet />
    </div>
  );
}
const menuItems = [
  { label: "Introdução", path: "/Notas" },
  { label: "Escrituras", path: "/notas/escrituras" },
  { label: "Procuração", path: "/notas/procuracao" },
  { label: "Testamento", path: "/notas/Testamento" },
  { label: "Inventário", path: "/notas/inventario" },
  { label: "Usucapião", path: "/notas/usucapiao" },
  { label: "Reconhecimento de Firma", path: "/notas/reconhecimentofirma" },
  { label: "Autentica de Documento", path: "/notas/autenticacao" },
  { label: "Apostila em HAIA", path: "/notas/apostilahaia" },
];

function MenuItem({ to, children }) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      to={to}
      style={{
        ...styles.menuItem,
        transform: hover ? "scale(1.05)" : "scale(1)"
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </Link>
  );
}       

const styles = {
  page: {
    maxWidth: 1000,
    margin: "0 auto",
    padding: "40px 20px",
    color: "#eaeaea"
  },
  title: {
    textAlign: "center",
    fontSize: 34,
    color: "rgb(191,167,106)",
    marginBottom: 40
  },
  menu: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 14,
    marginBottom: 50,
    padding: 18,
    background: "#243a35",
    borderRadius: 14
  },
  menuItem: {
    padding: "12px 20px",
    color: "#eaeaea",
    textDecoration: "none",
    borderRadius: 8,
    border: "1px solid rgba(191,167,106,0.35)",
    transition: "all 0.25s ease"
  }
};
