import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/pages-clean.css";

export default function Sobre() {

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="rcpn-page">

      <h1 className="page-main-title reveal">
        Sobre o Cartório
      </h1>

      {/* ── HISTÓRIA ── */}
      <section className="content-section reveal">
        <h2 className="section-title">Nossa História</h2>
        <p>
          O Cartório de Inoã iniciou suas atividades em <strong>1927</strong>, na
          então conhecida Vila de Inoã. Ao longo de quase um século, tornou-se uma
          instituição fundamental para a comunidade local, garantindo segurança
          jurídica nos atos da vida civil.
        </p>
        <p>
          A atual administração assumiu em <strong>2008</strong> e, desde 2025, o
          cartório está localizado em seu endereço atual, buscando o constante
          aprimoramento de seus serviços e a melhor experiência para os usuários.
        </p>
        <p style={{ marginBottom: 0 }}>
          Atendemos não apenas a população local, mas também pessoas em trânsito e
          de municípios vizinhos, que nos procuram pela facilidade de acesso. Ao
          longo dos anos, temos expandido nosso portfólio de serviços para melhor
          atender às demandas da comunidade.
        </p>
      </section>

      {/* ── MISSÃO ── */}
      <section className="content-section reveal">
        <h2 className="section-title">Missão</h2>
        <div className="highlight-box">
          <p style={{ fontStyle: "italic", fontSize: "16px", lineHeight: 1.8, margin: 0 }}>
            "Promover atos notariais e registrais com excelência, em cumprimento
            à legislação vigente, aos atos normativos e às demais decisões da
            Corregedoria Geral de Justiça do Estado do Rio de Janeiro."
          </p>
        </div>
      </section>

      {/* ── VISÃO ── */}
      <section className="content-section reveal">
        <h2 className="section-title">Visão</h2>
        <div className="highlight-box">
          <p style={{ fontStyle: "italic", fontSize: "16px", lineHeight: 1.8, margin: 0 }}>
            "Ser referência no atendimento às necessidades da população dentro de
            nossas atribuições, buscando sempre a plena satisfação do usuário."
          </p>
        </div>
      </section>

      {/* ── VALORES ── */}
      <section className="content-section reveal">
        <h2 className="section-title">Valores</h2>
        <div className="highlight-box">
          <p style={{ fontStyle: "italic", fontSize: "16px", lineHeight: 1.8, margin: 0 }}>
            "Tradição, Qualidade e Compromisso."
          </p>
        </div>
      </section>

      {/* ── TRANSPARÊNCIA — link discreto para o painel financeiro ── */}
      <section className="content-section reveal">
        <h2 className="section-title">Transparência</h2>
        <p style={{ marginBottom: 0 }}>
          Este cartório acredita que uma gestão íntegra começa pela transparência
          com a sociedade. Atuamos em conformidade com os princípios da administração
          pública, com ética e responsabilidade em todas as nossas ações. Por isso,
          mantemos o acompanhamento rigoroso de nossa{" "}
          <Link
            to="/gestao-interna-cartorio"
            style={{ color: "inherit", textDecoration: "none" }}
            title="Gestão interna"
          >
            gestão financeira
          </Link>
          , assegurando o uso responsável dos recursos e a qualidade contínua dos
          serviços prestados à população.
        </p>
      </section>

    </div>
  );
}
