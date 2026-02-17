import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/pages-clean.css";
import rcpnImg from "../assets/images/RCPN.png";
import notasImg from "../assets/images/NOTAS.png";
import identidadeImg from "../assets/images/identidade.png";

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
      <style>{`

        /* ========== CARD HORIZONTAL ========== */
        .home-hero-card {
          display: flex;
          align-items: stretch;
          margin-bottom: 32px;
          border-radius: 14px;
          overflow: hidden;
          background-color: #ffffff;
          border-left: 4px solid rgb(191, 167, 106);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          min-height: 280px;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .home-hero-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
        }

        /* ========== LADO DO TEXTO ========== */
        .hero-text-side {
          width: 55%;
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
          z-index: 2;
        }

        .hero-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(191, 167, 106, 0.7);
        }

        .hero-title {
          font-size: 22px;
          font-weight: 600;
          color: rgb(191, 167, 106);
          line-height: 1.3;
          margin: 0;
        }

        .hero-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .hero-list li {
          color: #555555;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: color 0.3s ease;
        }

        .home-hero-card:hover .hero-list li {
          color: #333333;
        }

        .hero-list li::before {
          content: '';
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgb(191, 167, 106);
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .home-hero-card:hover .hero-list li::before {
          transform: scale(1.4);
        }

        /* ========== BOTÃO ========== */
        .hero-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
          padding: 11px 22px;
          background: transparent;
          border: 1px solid rgba(191, 167, 106, 0.6);
          color: rgb(171, 147, 86);
          border-radius: 30px;
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          width: fit-content;
          transition: all 0.35s ease;
          letter-spacing: 0.3px;
        }

        .home-hero-card:hover .hero-button {
          background: rgb(191, 167, 106);
          color: #ffffff;
          border-color: rgb(191, 167, 106);
          box-shadow: 0 4px 12px rgba(191, 167, 106, 0.3);
          transform: translateY(-1px);
        }

        .hero-button-arrow {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .home-hero-card:hover .hero-button-arrow {
          transform: translateX(4px);
        }

        /* ========== LADO DA IMAGEM ========== */
        .hero-image-side {
          width: 45%;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }

        /* Gradiente de separação texto/imagem */
        .hero-image-side::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 60px;
          height: 100%;
          background: linear-gradient(to right, #ffffff, transparent);
          z-index: 3;
          pointer-events: none;
        }

        /* Overlay escuro padrão */
        .hero-image-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 20, 18, 0.55);
          z-index: 2;
          transition: opacity 0.5s ease;
        }

        .home-hero-card:hover .hero-image-overlay {
          opacity: 0;
        }

        /* Imagem */
        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transform: scale(1.08);
          filter: grayscale(40%) brightness(0.8);
          transition:
            transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            filter 0.6s ease;
        }

        .home-hero-card:hover .hero-img {
          transform: scale(1);
          filter: grayscale(0%) brightness(1.05);
        }

        /* ========== BRILHO DESLIZANTE (SHEEN) ========== */
        .hero-sheen {
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            105deg,
            transparent 20%,
            rgba(191, 167, 106, 0.18) 50%,
            transparent 80%
          );
          z-index: 4;
          transform: skewX(-15deg);
          pointer-events: none;
        }

        .home-hero-card:hover .hero-sheen {
          animation: sheen-slide 0.8s ease forwards;
        }

        @keyframes sheen-slide {
          0%   { left: -100%; opacity: 0; }
          20%  { opacity: 1; }
          100% { left: 160%; opacity: 0; }
        }

        /* ========== BADGE FLUTUANTE ========== */
        .hero-badge {
          position: absolute;
          bottom: 16px;
          right: 16px;
          z-index: 5;
          background: rgba(30, 45, 41, 0.85);
          border: 1px solid rgba(191, 167, 106, 0.3);
          border-radius: 8px;
          padding: 8px 14px;
          backdrop-filter: blur(8px);
          transform: translateY(10px);
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .home-hero-card:hover .hero-badge {
          transform: translateY(0);
          opacity: 1;
        }

        .hero-badge span {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          color: rgb(191, 167, 106);
          text-transform: uppercase;
        }

        /* ========== LINHA DE BORDA ANIMADA ========== */
        .hero-border-line {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0%;
          background: linear-gradient(
            to right,
            rgb(191, 167, 106),
            rgba(191, 167, 106, 0)
          );
          z-index: 10;
          transition: width 0.5s ease;
          border-radius: 2px;
        }

        .home-hero-card:hover .hero-border-line {
          width: 100%;
        }

        /* ========== APRESENTAÇÃO ========== */
        .home-intro {
          text-align: center;
          padding: 20px 0 40px;
        }

        .home-intro-title {
          font-size: clamp(26px, 4vw, 36px);
          color: rgb(191, 167, 106);
          font-weight: 600;
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }

        .home-intro-text {
          font-size: 16px;
          line-height: 1.7;
          color: #555;
          max-width: 680px;
          margin: 0 auto;
        }

        /* ========== RESPONSIVO ========== */
        @media (max-width: 768px) {
          .home-hero-card {
            flex-direction: column;
            min-height: auto;
          }
          .hero-text-side {
            width: 100%;
            padding: 28px 22px;
          }
          .hero-image-side {
            width: 100%;
            height: 220px;
          }
          .hero-image-side::before {
            width: 100%;
            height: 50px;
            background: linear-gradient(to bottom, #ffffff, transparent);
          }
          .hero-title {
            font-size: 20px;
          }
        }

        @media (max-width: 480px) {
          .hero-image-side {
            height: 180px;
          }
          .home-hero-card {
            margin-bottom: 24px;
          }
        }

      `}</style>

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
            <img src="/src/assets/images/whatsapp.png" alt="WhatsApp" />
            <span>(21) 96954-2636</span>
          </a>
        </div>

      </div>
    </>
  );
}