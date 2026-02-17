import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

export default function App() {
  return (
    <>
      <Header />
      <main style={styles.main}>
        <div style={styles.container}>
          <Outlet />
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}

const styles = {
  main: {
    backgroundColor: "#f0f0f0",
    padding: "40px 20px",
    minHeight: "calc(100vh - 200px)"
  },
  container: {
    maxWidth: "1600px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    borderRadius: "6px",
    padding: "40px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
  }
};

// Media queries via JS inline não funcionam bem, então criaremos um CSS separado
// Veja app-responsive.css
