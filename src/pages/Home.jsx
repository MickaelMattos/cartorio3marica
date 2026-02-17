import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import "../styles/pages-clean.css";
import rcpnImg from "../assets/images/RCPN.png";
import notasImg from "../assets/images/NOTAS.png";
import identidadeImg from "../assets/images/identidade.png";
import whatsappImg from "../assets/images/whatsapp.png";

/* ============================================================
   HOME — ANIMAÇÃO "LIQUID REVEAL"
   Ao hover, a imagem emerge do escuro com zoom suave,
   brilho dourado deslizante e badge flutuante.
============================================================ */

const cards = [
  {
    id: "rcpn",
    to: "/rcpn",
    img: rcpnImg,
    alt: "Registro Civil",
    label: "RCPN",
    title: "Registro Civil das Pessoas Naturais",
    items: ["Nascimento", "Casamento", "Óbito", "Averbações e Anotações"],
    buttonText: "Acessar serviços de RCPN",
  },
  {
    id: "notas",
    to: "/notas",
    img: notasImg,
    alt: "Tabelionato de Notas",
    label: "NOTAS",
    title: "Tabelionato de Notas",
    items: ["Escrituras", "Testamentos", "União Estável", "Procurações", "Usucapião"],
    buttonText: "Acessar serviços de Notas",
  },
  {
    id: "identidade",
    to: "/identidade",
    img: identidadeImg,
    alt: "Carteira de Identidade",
    label: "IDENTIDADE",
    title: "Carteira de Identidade",
    items: ["Solicitação de 2ª Via", "Consulta de Andamento"],
    buttonText: "Informações sobre Identidade",
  },
];

export default function Home() {
  const [hovered, setHovered] = useState(null);

  return (
    <>

      <div>

        {/* ── APRESENTAÇÃO ── */}
        <div className="home-intro">
          <h1 className="home-intro-title">
            Cartório do 3º Distrito de Maricá-RJ
          </h1>
          <p className="home-intro-text">
            O Cartório do 3º Distrito de Maricá-RJ é responsável pela prestação
            dos serviços de Registro Civil das Pessoas Naturais (RCPN) e
            Tabelionato de Notas, atuando com segurança jurídica, transparência
            e atendimento à população.
          </p>
        </div>

        {/* ── CARDS RCPN / NOTAS / IDENTIDADE ── */}
        {cards.map((card) => (
          <section
            key={card.id}
            className="home-hero-card"
            onMouseEnter={() => setHovered(card.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Linha de borda animada */}
            <div className="hero-border-line" />

            {/* LADO DO TEXTO */}
            <div className="hero-text-side">
              <span className="hero-label">{card.label}</span>
              <h2 className="hero-title">{card.title}</h2>
              <ul className="hero-list">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link to={card.to} className="hero-button">
                {card.buttonText}
                <span className="hero-button-arrow">→</span>
              </Link>
            </div>

            {/* LADO DA IMAGEM */}
            <div className="hero-image-side">
              <div className="hero-image-overlay" />
              <div className="hero-sheen" />
              <img
                src={card.img}
                alt={card.alt}
                className="hero-img"
                loading="lazy"
              />
              <div className="hero-badge">
                <span>{card.label}</span>
              </div>
            </div>
          </section>
        ))}

        {/* ── DESTAQUES ── */}
        <section className="content-section">
          <h2 className="section-title">🌟 Serviços em Destaque</h2>
          <div style={{ display: "grid", gap: "16px" }}>
            <div className="highlight-box">
              <p style={{ marginBottom: "8px" }}>
                <strong>Certidões Digitais Online</strong>
              </p>
              <p>
                Solicite certidões de nascimento, casamento e óbito pela internet
                através do site Registro Civil.
              </p>
            </div>
            <div className="highlight-box">
              <p style={{ marginBottom: "8px" }}>
                <strong>Apostila de Haia</strong>
              </p>
              <p>
                Valide seus documentos para uso em mais de 120 países com a
                Apostila de Haia.
              </p>
            </div>
            <div className="highlight-box">
              <p style={{ marginBottom: "8px" }}>
                <strong>Inventário e Divórcio Extrajudicial</strong>
              </p>
              <p>
                Realize inventário e divórcio consensual direto em cartório,
                com rapidez e economia.
              </p>
            </div>
          </div>
        </section>

        {/* ── GRATUIDADES ── */}
        <section className="content-section">
          <h2 className="section-title">💚 Gratuidades Legais</h2>
          <div className="success-box">
            <p><strong>São gratuitos os seguintes serviços:</strong></p>
            <ul style={{ marginTop: "12px", paddingLeft: "20px" }}>
              <li>Registro de nascimento e primeira certidão</li>
              <li>Registro de óbito e primeira certidão</li>
              <li>Registro de natimorto</li>
              <li>Anotação de óbito no casamento</li>
              <li>Reconhecimento voluntário de paternidade/maternidade</li>
            </ul>
          </div>
        </section>

        {/* ── LOCALIZAÇÃO E HORÁRIO ── */}
        <section className="content-section">
          <h2 className="section-title">📍 Localização e Horário</h2>
          <p>
            <strong>Endereço:</strong><br />
            Av. Gilberto Carvalho, nº C-25, Inoã<br />
            Maricá - RJ, CEP: 24944-000
          </p>
          <p>
            <strong>Horário de Atendimento:</strong><br />
            Segunda a sexta: 9h30 às 17h00<br />
            Sábados, domingos e feriados: 9h00 às 12h00
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>Telefones:</strong><br />
            (21) 2636-3910 / (21) 2636-4287
          </p>
        </section>

        {/* ── LINKS RÁPIDOS ── */}
        <section className="content-section">
          <h2 className="section-title">🔗 Links Úteis</h2>
          <div style={{ display: "grid", gap: "12px" }}>
            <Link
              to="/links-uteis"
              className="nav-item"
              style={{
                display: "block",
                textAlign: "center",
                textDecoration: "none",
                color: "#444444",
                background: "rgba(191, 167, 106, 0.08)",
                border: "1px solid rgba(191, 167, 106, 0.35)",
              }}
            >
              📚 Modelos e Formulários
            </Link>
            <Link
              to="/contato"
              className="nav-item"
              style={{
                display: "block",
                textAlign: "center",
                textDecoration: "none",
                color: "#444444",
                background: "rgba(191, 167, 106, 0.08)",
                border: "1px solid rgba(191, 167, 106, 0.35)",
              }}
            >
              📞 Fale Conosco
            </Link>
            <Link
              to="/lgpd"
              className="nav-item"
              style={{
                display: "block",
                textAlign: "center",
                textDecoration: "none",
                color: "#444444",
                background: "rgba(191, 167, 106, 0.08)",
                border: "1px solid rgba(191, 167, 106, 0.35)",
              }}
            >
              🔒 Privacidade e LGPD
            </Link>
          </div>
        </section>

        {/* ── WHATSAPP ── */}
        <div className="whatsapp-contact">
          <p>Tem dúvidas? Fale conosco pelo WhatsApp:</p>
          <a
            href="https://wa.me/5521969542636"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            <img src={whatsappImg} alt="WhatsApp" />
            <span>(21) 96954-2636</span>
          </a>
        </div>

      </div>
    </>
  );
}