import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages-clean.css";

export default function Home() {
  return (
    <div className="rcpn-page">
      {/* APRESENTAÇÃO */}
      <section className="content-section text-center">
        <h1 className="page-main-title">Cartório do 3º Distrito de Maricá-RJ</h1>
        <p style={{ fontSize: "18px", marginBottom: "30px", color: "#555" }}>
          Bem-vindo ao site oficial do Cartório do 3º Distrito de Maricá. 
          Oferecemos serviços de Registro Civil das Pessoas Naturais e Tabelionato 
          de Notas com excelência, segurança jurídica e atendimento humanizado.
        </p>
      </section>

      {/* CARDS DE SERVIÇOS PRINCIPAIS */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "24px",
        marginBottom: "40px"
      }}>
        
        {/* RCPN */}
        <Link to="/rcpn" style={{ textDecoration: "none" }}>
          <div className="content-section" style={{ 
            height: "100%", 
            cursor: "pointer",
            transition: "all 0.3s ease"
          }}>
            <h2 className="section-title" style={{ marginBottom: "16px" }}>
              📋 Registro Civil
            </h2>
            <p style={{ marginBottom: "12px", lineHeight: "1.6" }}>
              Nascimento, casamento, óbito, averbações e certidões.
            </p>
            <p style={{ 
              color: "rgb(191, 167, 106)", 
              fontWeight: "600",
              marginTop: "20px"
            }}>
              Saiba mais →
            </p>
          </div>
        </Link>

        {/* NOTAS */}
        <Link to="/notas" style={{ textDecoration: "none" }}>
          <div className="content-section" style={{ 
            height: "100%", 
            cursor: "pointer",
            transition: "all 0.3s ease"
          }}>
            <h2 className="section-title" style={{ marginBottom: "16px" }}>
              ✍️ Tabelionato de Notas
            </h2>
            <p style={{ marginBottom: "12px", lineHeight: "1.6" }}>
              Escrituras, procurações, autenticações, reconhecimento de firma e apostila.
            </p>
            <p style={{ 
              color: "rgb(191, 167, 106)", 
              fontWeight: "600",
              marginTop: "20px"
            }}>
              Saiba mais →
            </p>
          </div>
        </Link>

        {/* IDENTIDADE CIVIL */}
        <Link to="/identidade" style={{ textDecoration: "none" }}>
          <div className="content-section" style={{ 
            height: "100%", 
            cursor: "pointer",
            transition: "all 0.3s ease"
          }}>
            <h2 className="section-title" style={{ marginBottom: "16px" }}>
              🪪 Identidade Civil
            </h2>
            <p style={{ marginBottom: "12px", lineHeight: "1.6" }}>
              Novo documento nacional de identificação unificado.
            </p>
            <p style={{ 
              color: "rgb(191, 167, 106)", 
              fontWeight: "600",
              marginTop: "20px"
            }}>
              Saiba mais →
            </p>
          </div>
        </Link>
      </div>

      {/* DESTAQUES */}
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

      {/* GRATUIDADES */}
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

      {/* HORÁRIO E LOCALIZAÇÃO */}
      <section className="content-section">
        <h2 className="section-title">📍 Localização e Horário</h2>
        
        <div style={{ marginBottom: "20px" }}>
          <p style={{ marginBottom: "8px" }}>
            <strong>Endereço:</strong><br />
            Av Gilberto Carvalho, nº C-25, Inoã<br />
            Maricá - RJ, CEP: 24944-000
          </p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <p style={{ marginBottom: "8px" }}>
            <strong>Horário de Atendimento:</strong><br />
            Segunda a sexta: 9:30h às 17:00h<br />
            Sábados, domingos e feriados: 9:00h às 12:00h
          </p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <p style={{ marginBottom: "8px" }}>
            <strong>Telefones:</strong><br />
            (21) 2636-3910 / (21) 2636-4287<br />
          </p>
        </div>
      </section>

      {/* LINKS RÁPIDOS */}
      <section className="content-section">
        <h2 className="section-title">🔗 Links Úteis</h2>
        <div style={{ display: "grid", gap: "12px" }}>
          <Link to="/links-uteis" className="nav-item" style={{ 
            display: "block",
            textAlign: "center",
            textDecoration: "none"
          }}>
            📚 Modelos e Formulários
          </Link>
          <Link to="/contato" className="nav-item" style={{ 
            display: "block",
            textAlign: "center",
            textDecoration: "none"
          }}>
            📞 Fale Conosco
          </Link>
          <Link to="/lgpd" className="nav-item" style={{ 
            display: "block",
            textAlign: "center",
            textDecoration: "none"
          }}>
            🔒 Privacidade e LGPD
          </Link>
        </div>
      </section>

      {/* CONTATO WHATSAPP */}
      <div className="whatsapp-contact">
        <p>Tem dúvidas? Fale conosco pelo WhatsApp:</p>
        <a
          href="https://wa.me/5521991633030"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <img src="/src/assets/images/whatsapp.png" alt="WhatsApp" />
          <span>(21) 96954-2636</span>
        </a>
      </div>
    </div>
  );
}
