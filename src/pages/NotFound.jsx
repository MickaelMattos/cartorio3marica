import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.code}>404</div>
      <h1 style={styles.title}>Página não encontrada</h1>
      <p style={styles.text}>
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link to="/" style={styles.button}>
        ← Voltar para o início
      </Link>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "50vh",
    textAlign: "center",
    padding: "60px 20px",
    gap: "16px",
  },
  code: {
    fontSize: "clamp(80px, 15vw, 120px)",
    fontWeight: "700",
    color: "rgb(191, 167, 106)",
    lineHeight: "1",
    letterSpacing: "-4px",
    opacity: "0.6",
  },
  title: {
    fontSize: "clamp(22px, 4vw, 28px)",
    color: "var(--text-primary, #1f2f2b)",
    fontWeight: "600",
    margin: "0",
  },
  text: {
    fontSize: "16px",
    color: "var(--text-secondary, #555)",
    maxWidth: "400px",
    lineHeight: "1.6",
    margin: "0",
  },
  button: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "16px",
    padding: "12px 28px",
    background: "rgb(191, 167, 106)",
    color: "#ffffff",
    borderRadius: "30px",
    fontWeight: "500",
    fontSize: "15px",
    textDecoration: "none",
    transition: "all 0.3s ease",
  },
};
