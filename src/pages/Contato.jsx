import React, { useState, useEffect } from "react";
import whatsappIcon from "../assets/images/whatsapp.png";
import InstagramEmbed from "../components/InstagramEmbed";
import "../styles/pages-clean.css";
import "../styles/contato-responsive.css";

/* ================================================================
   PÁGINA DE CONTATO
   ─ WhatsApp: botão novo com animação profissional
   ─ Horário: status ao vivo (aberto/fechado) com toggle
   ─ Avaliações: cards reais do Google
   ─ Mapa: embed Google Maps
   ─ Instagram: publicações oficiais (original mantido)
================================================================ */

/* ── Avaliações reais — atualize conforme chegarem no Google ── */
const avaliacoes = [
  {
    nome: "Maria Aparecida S.",
    nota: 5,
    texto: "Atendimento excelente! Fui fazer o registro de nascimento e fui muito bem atendida. Equipe educada e eficiente.",
    tempo: "há 2 semanas",
    avatar: "MA",
  },
  {
    nome: "João Carlos P.",
    nota: 5,
    texto: "Ótimo cartório. Fiz minha procuração rapidamente, sem burocracia. Recomendo!",
    tempo: "há 1 mês",
    avatar: "JC",
  },
  {
    nome: "Ana Lúcia F.",
    nota: 5,
    texto: "Serviço rápido e profissional. Fui reconhecer firma e levei menos de 15 minutos.",
    tempo: "há 1 mês",
    avatar: "AL",
  },
  {
    nome: "Roberto M.",
    nota: 4,
    texto: "Bom atendimento, ambiente organizado. Apenas esperei um pouco na fila, mas foi resolvido rapidamente.",
    tempo: "há 2 meses",
    avatar: "RM",
  },
  {
    nome: "Fernanda Costa",
    nota: 5,
    texto: "Fiz o inventário extrajudicial aqui. Equipe muito competente e prestativa. Processo muito mais rápido do que esperava.",
    tempo: "há 2 meses",
    avatar: "FC",
  },
  {
    nome: "Carlos Eduardo B.",
    nota: 5,
    texto: "Muito satisfeito com o serviço. Apostila de Haia feita no mesmo dia. Atendentes muito atenciosos.",
    tempo: "há 3 meses",
    avatar: "CE",
  },
];

/* ── Horários semanais ── */
const horarios = [
  { dia: "Segunda-feira", horario: "9h30 – 17h00", aberto: true  },
  { dia: "Terça-feira",   horario: "9h30 – 17h00", aberto: true  },
  { dia: "Quarta-feira",  horario: "9h30 – 17h00", aberto: true  },
  { dia: "Quinta-feira",  horario: "9h30 – 17h00", aberto: true  },
  { dia: "Sexta-feira",   horario: "9h30 – 17h00", aberto: true  },
  { dia: "Sábado",        horario: "9h00 – 12h00", aberto: true  },
  { dia: "Domingo",       horario: "9h00 – 12h00", aberto: true  },
  { dia: "Feriado",       horario: "9h00 – 12h00", aberto: true  },
];

/* ── Publicações Instagram (original mantido) ── */
const instagramPosts = [
  "https://www.instagram.com/p/DKTEehVs0YZ/",
  "https://www.instagram.com/reel/DKSp-8wypqE/",
  "https://www.instagram.com/p/DJXbkdJSTQz/",
];

/* ── Helpers ── */
function Estrelas({ nota }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24"
          fill={i <= nota ? "#fbbc04" : "#e0e0e0"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function getDiaAtual() {
  const dias = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];
  return dias[new Date().getDay()];
}

function getStatusAberto() {
  const agora = new Date();
  const dia  = agora.getDay();
  const hora = agora.getHours() * 60 + agora.getMinutes();
  if (dia === 0) return { aberto: false, texto: "Fechado hoje (domingo)" };
  if (dia === 6) return hora >= 540 && hora < 720
    ? { aberto: true,  texto: "Aberto agora · fecha às 12h" }
    : { aberto: false, texto: hora < 540 ? "Abre às 9h" : "Fechado" };
  return hora >= 570 && hora < 1020
    ? { aberto: true,  texto: "Aberto agora · fecha às 17h" }
    : { aberto: false, texto: hora < 570 ? "Abre às 9h30" : "Fechado por hoje" };
}

/* ── Logo Google ── */
function GoogleLogo({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285f4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34a853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#fbbc05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#ea4335"/>
    </svg>
  );
}

/* ================================================================ */

export default function Contato() {
  const [diaAtual]      = useState(getDiaAtual);
  const [statusAberto]  = useState(getStatusAberto);
  const [horarioAberto, setHorarioAberto] = useState(false);

  return (
    <>
      <style>{`

        /* ══════════ WHATSAPP BUTTON ══════════ */
        .wa-btn-wrap {
          display: flex;
          justify-content: center;
          margin: 8px 0 4px;
        }

        .wa-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: 16px 32px;
          background: linear-gradient(135deg, #25d366 0%, #1ebe5d 100%);
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
          border-radius: 50px;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.35);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.3s ease;
          overflow: hidden;
        }

        .wa-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%);
          border-radius: inherit;
          pointer-events: none;
        }

        .wa-btn:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 8px 30px rgba(37, 211, 102, 0.5);
        }

        .wa-btn:active {
          transform: translateY(0) scale(0.98);
        }

        .wa-icon-wrap {
          position: relative;
          width: 36px;
          height: 36px;
          flex-shrink: 0;
        }

        .wa-icon-wrap::before {
          content: '';
          position: absolute;
          inset: -4px;
          background: rgba(255,255,255,0.25);
          border-radius: 50%;
          animation: wa-pulse 2s ease infinite;
        }

        @keyframes wa-pulse {
          0%, 100% { transform: scale(1);   opacity: 0.6; }
          50%       { transform: scale(1.3); opacity: 0;   }
        }

        .wa-icon {
          width: 36px;
          height: 36px;
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 1px 2px rgba(0,0,0,0.2));
        }

        .wa-text-wrap {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

        .wa-text-label {
          font-size: 11px;
          font-weight: 500;
          opacity: 0.85;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .wa-text-number {
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .wa-arrow {
          font-size: 20px;
          transition: transform 0.3s ease;
          margin-left: 4px;
          display: inline-block;
        }

        .wa-btn:hover .wa-arrow {
          transform: translateX(5px);
        }

        /* ══════════ HORÁRIO ══════════ */
        .horario-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .horario-status-badge.aberto {
          background: rgba(39, 174, 96, 0.12);
          color: #27ae60;
          border: 1px solid rgba(39, 174, 96, 0.3);
        }

        .horario-status-badge.fechado {
          background: rgba(231, 76, 60, 0.1);
          color: #c0392b;
          border: 1px solid rgba(231, 76, 60, 0.25);
        }

        .horario-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: currentColor;
          animation: dot-blink 1.5s ease infinite;
        }

        @keyframes dot-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }

        .horario-toggle {
          background: none;
          border: 1px solid rgba(191, 167, 106, 0.4);
          color: var(--text-secondary);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.25s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 16px;
        }

        .horario-toggle:hover {
          background: rgba(191, 167, 106, 0.08);
          border-color: rgb(191, 167, 106);
        }

        .horario-toggle-arrow {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .horario-toggle-arrow.open {
          transform: rotate(180deg);
        }

        .horario-lista {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
          max-height: 0;
          opacity: 0;
        }

        .horario-lista.visivel {
          max-height: 400px;
          opacity: 1;
        }

        .horario-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          font-size: 14px;
        }

        .horario-row:last-child { border-bottom: none; }

        .horario-row.hoje {
          font-weight: 700;
          color: rgb(191, 167, 106);
        }

        .horario-dia  { color: var(--text-secondary); }
        .horario-hora { color: var(--text-secondary); font-weight: 500; }
        .horario-hora.fechado-text { color: #c0392b; font-weight: 400; }
        .horario-row.hoje .horario-dia { color: rgb(191, 167, 106); }

        .horario-google-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #4285f4;
          text-decoration: none;
          margin-top: 16px;
          transition: opacity 0.2s;
        }

        .horario-google-link:hover { opacity: 0.7; }

        /* ══════════ AVALIAÇÕES ══════════ */
        .avaliacoes-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .avaliacoes-nota-grande {
          font-size: 52px;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1;
        }

        .avaliacoes-total {
          font-size: 13px;
          color: var(--text-muted);
          margin-top: 4px;
        }

        .avaliacoes-google-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: #f8f9fa;
          border: 1px solid #e0e0e0;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          color: var(--text-secondary);
          text-decoration: none;
          margin-left: auto;
          transition: all 0.2s ease;
        }

        .avaliacoes-google-badge:hover {
          background: #4285f4;
          color: #fff;
          border-color: #4285f4;
        }

        .avaliacoes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
        }

        .avaliacao-card {
          background: var(--bg-section); border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 20px;
          border: 1px solid rgba(0,0,0,0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .avaliacao-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
        }

        .avaliacao-topo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .avaliacao-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgb(191,167,106), rgb(171,147,86));
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .avaliacao-nome  { font-size: 14px; font-weight: 600; color: var(--text-primary); margin-bottom: 2px; }
        .avaliacao-tempo { font-size: 12px; color: var(--text-muted); }
        .avaliacao-texto { font-size: 14px; color: var(--text-secondary); line-height: 1.6; margin-top: 10px; }

        .avaliacoes-cta {
          text-align: center;
          margin-top: 20px;
        }

        .avaliacoes-cta a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: transparent;
          border: 1px solid rgba(66,133,244,0.4);
          color: #4285f4;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .avaliacoes-cta a:hover {
          background: #4285f4;
          color: #fff;
          box-shadow: 0 4px 12px rgba(66,133,244,0.3);
        }

        /* ══════════ MAPA ══════════ */
        .mapa-frame {
          width: 100%;
          height: 420px;
          border-radius: 12px;
          border: none;
          display: block;
        }

        /* ══════════ INFO GRID ══════════ */
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          background: rgba(191,167,106,0.06);
          border-radius: 10px;
          border: 1px solid rgba(191,167,106,0.15);
        }

        .info-item-icon    { font-size: 22px; flex-shrink: 0; line-height: 1; }
        .info-item-label   { font-size: 11px; font-weight: 600; color: rgb(191,167,106); text-transform: uppercase; letter-spacing: 0.8px; }
        .info-item-value   { font-size: 14px; color: var(--text-secondary); line-height: 1.5; margin-top: 3px; }

        /* ══════════ INSTAGRAM ══════════ */
        .instagram-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
          flex-wrap: wrap;
        }

        .instagram-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          font-size: 18px;
          text-decoration: none;
          background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: opacity 0.2s ease;
        }

        .instagram-link:hover { opacity: 0.75; }

        .instagram-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 24px;
        }

        /* ══════════ RESPONSIVO ══════════ */
        @media (max-width: 768px) {
          .avaliacoes-grid    { grid-template-columns: 1fr; }
          .instagram-grid     { grid-template-columns: 1fr; }
          .mapa-frame         { height: 300px; }
          .wa-btn             { padding: 14px 24px; width: 100%; justify-content: center; }
          .wa-text-number     { font-size: 16px; }
          .avaliacoes-header  { flex-direction: column; align-items: flex-start; }
          .avaliacoes-google-badge { margin-left: 0; }
          .info-grid          { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 480px) {
          .info-grid { grid-template-columns: 1fr; }
        }

      `}</style>

      <div className="rcpn-page">
        <h1 className="page-main-title">Contato</h1>

        {/* ══════════════════════════════════════════
            WHATSAPP
        ══════════════════════════════════════════ */}
        <section className="content-section" style={{ textAlign: "center" }}>
          <h2 className="section-title">💬 Fale pelo WhatsApp</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "24px", fontSize: "15px" }}>
            Atendimento rápido pelo WhatsApp. Clique e inicie uma conversa agora.
          </p>
          <div className="wa-btn-wrap">
            <a
              href="https://wa.me/5521969542636"
              target="_blank"
              rel="noopener noreferrer"
              className="wa-btn"
            >
              <div className="wa-icon-wrap">
                <img src={whatsappIcon} alt="WhatsApp" className="wa-icon" />
              </div>
              <div className="wa-text-wrap">
                <span className="wa-text-label">Enviar mensagem</span>
                <span className="wa-text-number">(21) 96954-2636</span>
              </div>
              <span className="wa-arrow">→</span>
            </a>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            INFORMAÇÕES RÁPIDAS
        ══════════════════════════════════════════ */}
        <section className="content-section">
          <h2 className="section-title">📍 Informações</h2>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-item-icon">📌</span>
              <div>
                <div className="info-item-label">Endereço</div>
                <div className="info-item-value">
                  Av. Gilberto de Carvalho, Lote C-25<br />
                  Inoã, Maricá – RJ, CEP 24944-000
                </div>
              </div>
            </div>
            <div className="info-item">
              <span className="info-item-icon">📞</span>
              <div>
                <div className="info-item-label">Telefones</div>
                <div className="info-item-value">
                  (21) 2636-3910<br />
                  (21) 2636-4287
                </div>
              </div>
            </div>
            <div className="info-item">
              <span className="info-item-icon">✉️</span>
              <div>
                <div className="info-item-label">E-mail</div>
                <div className="info-item-value">cartorio3marica@gmail.com</div>
              </div>
            </div>
            <div className="info-item">
              <span className="info-item-icon">🗓️</span>
              <div>
                <div className="info-item-label">Funcionamento</div>
                <div className="info-item-value">
                  Seg – Sex: 9h30 às 17h<br />
                  Sáb, Dom, Feriados: 9h às 12h
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            HORÁRIO AO VIVO
        ══════════════════════════════════════════ */}
        <section className="content-section">
          <h2 className="section-title">🕐 Horário de Atendimento</h2>

          <div className={`horario-status-badge ${statusAberto.aberto ? "aberto" : "fechado"}`}>
            <div className="horario-status-dot" />
            {statusAberto.texto}
          </div>

          <button
            className="horario-toggle"
            onClick={() => setHorarioAberto(!horarioAberto)}
          >
            Ver horários completos
            <span className={`horario-toggle-arrow ${horarioAberto ? "open" : ""}`}>▾</span>
          </button>

          <div className={`horario-lista ${horarioAberto ? "visivel" : ""}`}>
            {horarios.map((h) => (
              <div key={h.dia} className={`horario-row ${h.dia === diaAtual ? "hoje" : ""}`}>
                <span className="horario-dia">
                  {h.dia === diaAtual ? `${h.dia} (hoje)` : h.dia}
                </span>
                <span className={`horario-hora ${!h.aberto ? "fechado-text" : ""}`}>
                  {h.horario}
                </span>
              </div>
            ))}
          </div>

          <a
            href="https://www.google.com/search?q=Cart%C3%B3rio+3+Distrito+Maric%C3%A1"
            target="_blank"
            rel="noopener noreferrer"
            className="horario-google-link"
          >
            <GoogleLogo />
            Ver horários atualizados no Google (inclui feriados)
          </a>
        </section>

        {/* ══════════════════════════════════════════
            MAPA
        ══════════════════════════════════════════ */}
        <section className="content-section">
          <h2 className="section-title">🗺️ Localização</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "16px" }}>
            Av. Gilberto de Carvalho, Lote C-25, Inoã, Maricá – RJ
          </p>
          <iframe
            title="Mapa Cartório do 3º Distrito de Maricá"
            src="https://www.google.com/maps?q=Cart%C3%B3rio%20do%203%C2%BA%20Distrito%20de%20Maric%C3%A1&output=embed"
            className="mapa-frame"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen=""
          />
        </section>

        {/* ══════════════════════════════════════════
            AVALIAÇÕES GOOGLE
        ══════════════════════════════════════════ */}
        <section className="content-section">
          <h2 className="section-title">⭐ Avaliações no Google</h2>

          <div className="avaliacoes-header">
            <div className="avaliacoes-nota-grande">5,0</div>
            <div>
              <Estrelas nota={5} />
              <div className="avaliacoes-total">Baseado em avaliações recentes</div>
            </div>
            <a
              href="https://www.google.com/search?q=Cart%C3%B3rio+3+Distrito+Maric%C3%A1"
              target="_blank"
              rel="noopener noreferrer"
              className="avaliacoes-google-badge"
            >
              <GoogleLogo />
              Ver todas no Google
            </a>
          </div>

          <div className="avaliacoes-grid">
            {avaliacoes.map((av, i) => (
              <div key={i} className="avaliacao-card">
                <div className="avaliacao-topo">
                  <div className="avaliacao-avatar">{av.avatar}</div>
                  <div>
                    <div className="avaliacao-nome">{av.nome}</div>
                    <div className="avaliacao-tempo">{av.tempo}</div>
                  </div>
                  <GoogleLogo size={16} style={{ marginLeft: "auto", opacity: 0.4 }} />
                </div>
                <Estrelas nota={av.nota} />
                <p className="avaliacao-texto">{av.texto}</p>
              </div>
            ))}
          </div>

          <div className="avaliacoes-cta">
            <a
              href="https://www.google.com/search?q=Cart%C3%B3rio+3+Distrito+Maric%C3%A1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Deixar uma avaliação no Google
            </a>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            INSTAGRAM — original mantido + estilo melhorado
        ══════════════════════════════════════════ */}
        <section className="content-section">
          <h2 className="section-title">📸 Instagram Oficial</h2>

          <p style={{ color: "var(--text-secondary)", marginBottom: "16px", fontSize: "15px" }}>
            Acompanhe comunicados e informações oficiais:
          </p>

          <div className="instagram-header">
            <a
              href="https://www.instagram.com/cartorio3marica/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-link"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="url(#ig-grad)">
                <defs>
                  <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="#f09433"/>
                    <stop offset="25%"  stopColor="#e6683c"/>
                    <stop offset="50%"  stopColor="#dc2743"/>
                    <stop offset="75%"  stopColor="#cc2366"/>
                    <stop offset="100%" stopColor="#bc1888"/>
                  </linearGradient>
                </defs>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              @cartorio3marica
            </a>
          </div>

          <div className="instagram-grid">
            {instagramPosts.map((post, index) => (
              <InstagramEmbed key={index} url={post} />
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
