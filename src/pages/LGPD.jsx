import React, { useEffect } from "react";
import whatsappIcon from "../assets/images/whatsapp.png";
import "../styles/pages-clean.css";

export default function LGPD() {

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="rcpn-page">

      <h1 className="page-main-title reveal">
        Proteção de Dados e LGPD
      </h1>

      {/* INTRO */}
      <section className="content-section reveal" style={{ textAlign: "center" }}>
        <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#444" }}>
          O Cartório do 3º Distrito de Maricá atua com transparência,
          responsabilidade e segurança no tratamento de dados pessoais.
        </p>
      </section>

      {/* O QUE É A LGPD */}
      <section className="content-section reveal">
        <h2 className="section-title">O que é a LGPD</h2>
        <p>
          A LGPD – Lei Geral de Proteção de Dados, foi aprovada em agosto de 2018
          no Brasil e impôs regras sobre o tratamento de dados pessoais.
          A normativa tem como finalidade proteger o direito à liberdade,
          privacidade e livre desenvolvimento dos cidadãos.
        </p>
      </section>

      {/* CARTÓRIOS E A LGPD */}
      <section className="content-section reveal">
        <h2 className="section-title">Cartórios e a LGPD</h2>
        <p>
          Segundo o artigo 23, §4º da Lei Federal nº 13.709/18, os serviços
          notariais e de registro foram equiparados às pessoas jurídicas
          de direito público.
        </p>
      </section>

      {/* SEGURANÇA — art. 26 */}
      <section className="content-section reveal">
        <h2 className="section-title">Segurança da Informação</h2>
        <p>
          O artigo 26 determina que o uso compartilhado de dados pessoais
          deve atender às finalidades específicas de execução de políticas
          públicas.
        </p>
      </section>

      {/* SEGURANÇA — transferência */}
      <section className="content-section reveal">
        <h2 className="section-title">Transferência de Dados</h2>
        <div className="warning-box">
          <p style={{ margin: 0 }}>
            É vedada a transferência de dados a entidades privadas,
            salvo nas hipóteses legais.
          </p>
        </div>
      </section>

      {/* ENCARREGADO */}
      <section className="content-section reveal">
        <h2 className="section-title">Encarregado de Dados</h2>
        <div className="info-box">
          <p style={{ marginBottom: "6px" }}>
            <strong>Guilherme da Silva Martins Chaparoni</strong>
          </p>
          <p style={{ margin: 0 }}>
            ✉️ cartorio3marica@gmail.com
          </p>
        </div>
      </section>

      {/* DIREITOS DO TITULAR */}
      <section className="content-section reveal">
        <h2 className="section-title">Direitos do Titular</h2>
        <div className="highlight-box">
          <ul style={{ margin: 0, paddingLeft: "20px" }}>
            <li>Confirmar a existência de tratamento</li>
            <li>Acessar seus dados pessoais</li>
            <li>Solicitar correção de dados</li>
            <li>Obter informações sobre compartilhamento</li>
          </ul>
        </div>
      </section>

      {/* SOLICITAÇÃO */}
      <section className="content-section reveal" style={{ textAlign: "center" }}>
        <h2 className="section-title">Solicitação de Informações</h2>
        <p style={{ color: "#555", marginBottom: "24px" }}>
          Para exercer seus direitos, encaminhe solicitação formal
          acompanhada de documento de identificação.
        </p>

        <div className="whatsapp-contact">
          <a
            href="https://wa.me/5521969542636"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            <img src={whatsappIcon} alt="WhatsApp" />
            <span>Falar com o Cartório</span>
          </a>
        </div>
      </section>

    </div>
  );
}
