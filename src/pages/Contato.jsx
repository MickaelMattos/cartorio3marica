import React from "react";
import whatsappIcon from "../assets/images/whatsapp.png";
import InstagramEmbed from "../components/InstagramEmbed";
import "../styles/contato-responsive.css";

export default function Contato() {
  const instagramPosts = [
    "https://www.instagram.com/p/DKTEehVs0YZ/",
    "https://www.instagram.com/reel/DKSp-8wypqE/",
    "https://www.instagram.com/p/DJXbkdJSTQz/"
  ];

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Contato</h1>

      {/* ENDEREÇO */}
      <section style={styles.card}>
        <h2 style={styles.cardTitle}>Endereço e Localização</h2>

        <p style={styles.text}>
          Cartório do 3º Distrito de Maricá – RJ
          <br />
          Avenida Gilberto de Carvalho, Lote C-25 – Inoã
          <br />
          CEP: 24944-000
        </p>

        <div style={styles.mapContainer}>
          <iframe
            title="Mapa Cartório do 3º Distrito de Maricá"
            src="https://www.google.com/maps?q=Cart%C3%B3rio%20do%203%C2%BA%20Distrito%20de%20Maric%C3%A1&output=embed"
            style={styles.map}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* CONTATOS */}
      <section style={styles.card}>
        <h2 style={styles.cardTitle}>Atendimento</h2>

        <p style={styles.text}>
          Telefone: (21) 2636-3910 / (21) 2636-4287
          <br />
          E-mail: cartorio3marica@gmail.com
        </p>

        <a
          href="https://wa.me/5521969542636"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.whatsappButton}
          className="whatsapp-hover"
        >
          <img src={whatsappIcon} alt="WhatsApp" style={styles.whatsappIcon} />
          <span>(21) 96954-2636</span>
        </a>
      </section>

      {/* INSTAGRAM */}
      <section style={styles.card}>
        <h2 style={styles.cardTitle}>Instagram Oficial</h2>

        <p style={styles.text}>
          Acompanhe comunicados e informações oficiais:
        </p>

        <a
          href="https://www.instagram.com/cartorio3marica/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.instagramLink}
        >
          @cartorio3marica
        </a>

        <div style={styles.instagramGrid}>
          {instagramPosts.map((post, index) => (
            <InstagramEmbed key={index} url={post} />
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px"
  },
  title: {
    fontSize: "32px",
    marginBottom: "40px",
    color: "rgb(31,47,43)",
    textAlign: "center"
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    marginBottom: "40px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
  },
  cardTitle: {
    fontSize: "22px",
    marginBottom: "20px",
    color: "rgb(31,47,43)"
  },
  text: {
    lineHeight: 1.6,
    marginBottom: "20px",
    color: "#333"
  },
  mapContainer: {
    borderRadius: "10px",
    overflow: "hidden",
    border: "1px solid #ddd",
    marginTop: "20px"
  },
  map: {
    width: "100%",
    height: "420px",
    border: "0"
  },
  whatsappButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 20px",
    borderRadius: "30px",
    backgroundColor: "#1f2f2b",
    color: "#ffffff",
    fontWeight: "500",
    textDecoration: "none",
    transition: "transform 0.2s ease"
  },
  whatsappIcon: {
    width: "28px",
    height: "28px"
  },
  instagramLink: {
    display: "inline-block",
    marginBottom: "30px",
    fontWeight: "600",
    color: "#1f2f2b",
    textDecoration: "none",
    fontSize: "18px"
  },
  instagramGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px"
  }
};

// Estilos responsivos aplicados via CSS externo
