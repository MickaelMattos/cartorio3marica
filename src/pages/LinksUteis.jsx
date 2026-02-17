import React, { useState, useEffect, useRef } from "react";
import "../styles/pages-clean.css";

/* ── IMPORTS DAS IMAGENS ── */
import prefeituraImg       from "../assets/images/prefeitura.png";
import detranImg           from "../assets/images/detran.png";
import correiosImg         from "../assets/images/buscacep.png";
import tjrjImg             from "../assets/images/tjrj.png";
import extrajudicialImg    from "../assets/images/extrajudicial.png";
import oabImg              from "../assets/images/oab.png";
import treImg              from "../assets/images/tre.png";
import cpfImg              from "../assets/images/cpf.png";
import cnjImg              from "../assets/images/cnj.png";
import arpenImg            from "../assets/images/arpen.png";
import registrocivilImg    from "../assets/images/registrocivil.png";
import govImg              from "../assets/images/gov.png";

/* ── IMPORTS DOS PDFs ── */
import declaracaoPdf              from "../assets/formularios/declaracao-residencia.pdf";
import autorizacaoPdf             from "../assets/formularios/autorizacao-viagem.pdf";
import requerimentoCertidaoPdf    from "../assets/formularios/requerimento-de-certidao.pdf";
import requerimentoInteiroTeorPdf from "../assets/formularios/requerimento-de-certidao-inteiroteor.pdf";
import formularioRetificacaoPdf   from "../assets/formularios/formulario-de-retificacao.pdf";
import reconhecimentoEspontaneoPdf from "../assets/formularios/reconhecimento-espontaneo.pdf";
import procuracaoFarmaciaPdf      from "../assets/formularios/procuracao-farmacia.pdf";
import declaracaoHipossuficienciaPdf from "../assets/formularios/declacacao-de-hipossuficiencia.pdf";

/* ── IMPORTS DAS IMAGENS DOS FORMULÁRIOS ── */
import declaracaoImg              from "../assets/images/declaracao-residencia.png";
import autorizacaoImg             from "../assets/images/autorizacao-viagem.png";
import requerimentoCertidaoImg    from "../assets/images/requerimento-de-certidao.png";
import requerimentoInteiroTeorImg from "../assets/images/requerimento-de-certidao-inteiroteor.png";
import formularioRetificacaoImg   from "../assets/images/formulario-de-retificacao.png";
import reconhecimentoEspontaneoImg from "../assets/images/reconhecimento-espontaneo.png";
import procuracaoFarmaciaImg      from "../assets/images/procuracao-farmacia.png";
import declaracaoHipossuficienciaImg from "../assets/images/declacacao-de-hipossuficiencia.png";

/* ================================================================ */

export default function LinksUteis() {
  return (
    <>
      <style>{`

        /* ── ANIMAÇÃO FADE-IN POR SCROLL ── */
        .lu-card-wrap {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .lu-card-wrap.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── CARD ── */
        .lu-card {
          position: relative;
          background: #ffffff;
          border-radius: 14px;
          padding: 28px 20px 22px;
          text-align: center;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          border: 1px solid rgba(191, 167, 106, 0.15);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
          transition:
            transform 0.32s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.3s ease,
            border-color 0.3s ease;
          overflow: hidden;
        }

        /* Linha dourada que sobe do fundo */
        .lu-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(
            to right,
            rgb(191, 167, 106),
            rgba(191, 167, 106, 0.4)
          );
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }

        .lu-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.1);
          border-color: rgba(191, 167, 106, 0.5);
        }

        .lu-card:hover::after {
          transform: scaleX(1);
        }

        /* ── IMAGEM ── */
        .lu-card-img {
          width: 100%;
          max-width: 110px;
          height: 70px;
          object-fit: contain;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .lu-card:hover .lu-card-img {
          transform: scale(1.1);
        }

        /* ── TÍTULO ── */
        .lu-card-title {
          font-size: 14px;
          font-weight: 600;
          color: #333;
          line-height: 1.4;
          margin: 0;
          transition: color 0.25s ease;
        }

        .lu-card:hover .lu-card-title {
          color: rgb(171, 147, 86);
        }

        /* ── BADGE PDF ── */
        .lu-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgb(191, 167, 106);
          color: #fff;
          padding: 3px 10px;
          border-radius: 20px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        /* ── ÍCONE DE LINK EXTERNO (aparece no hover) ── */
        .lu-card-arrow {
          position: absolute;
          bottom: 14px;
          right: 14px;
          font-size: 13px;
          color: rgb(191, 167, 106);
          opacity: 0;
          transform: translate(-4px, 4px);
          transition: all 0.3s ease;
        }

        .lu-card:hover .lu-card-arrow {
          opacity: 1;
          transform: translate(0, 0);
        }

        /* ── GRID ── */
        .lu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
        }

        @media (max-width: 768px) {
          .lu-grid {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 16px;
          }
        }

        @media (max-width: 480px) {
          .lu-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

      `}</style>

      <div className="rcpn-page">
        <h1 className="page-main-title">Links Úteis</h1>

        {/* ── ÓRGÃOS OFICIAIS ── */}
        <section className="content-section">
          <h2 className="section-title">Órgãos e Serviços Oficiais</h2>
          <div className="lu-grid">
            <AnimatedCard href="http://www.marica.rj.gov.br/"                  img={prefeituraImg}    title="Prefeitura de Maricá"         delay={0}   />
            <AnimatedCard href="http://www.detran.rj.gov.br/"                  img={detranImg}        title="Detran-RJ"                    delay={50}  />
            <AnimatedCard href="http://www.buscacep.correios.com.br/"           img={correiosImg}      title="Busca CEP"                    delay={100} />
            <AnimatedCard href="http://www.tjrj.jus.br/"                       img={tjrjImg}          title="Tribunal de Justiça do RJ"    delay={150} />
            <AnimatedCard href="http://cgj.tjrj.jus.br/portal-extrajudicial"   img={extrajudicialImg} title="Portal Extrajudicial"         delay={200} />
            <AnimatedCard href="http://www.oabrj.org.br/"                      img={oabImg}           title="OAB RJ"                       delay={250} />
            <AnimatedCard href="http://www.tre-rj.jus.br/"                     img={treImg}           title="TRE - RJ"                     delay={300} />
            <AnimatedCard href="https://servicos.receita.fazenda.gov.br/"       img={cpfImg}           title="2ª Via do CPF"                delay={350} />
            <AnimatedCard href="https://www.cnj.jus.br"                        img={cnjImg}           title="CNJ"                          delay={400} />
            <AnimatedCard href="https://registrocivil.org.br"                  img={registrocivilImg} title="Registro Civil Nacional"      delay={450} />
            <AnimatedCard href="https://arpenbrasil.org.br"                    img={arpenImg}         title="ARPEN Brasil"                 delay={500} />
            <AnimatedCard href="https://www.gov.br"                            img={govImg}           title="Portal Gov.br"                delay={550} />
          </div>
        </section>

        {/* ── FORMULÁRIOS ── */}
        <section className="content-section">
          <h2 className="section-title">Formulários</h2>
          <div className="lu-grid">
            <AnimatedCard href={declaracaoPdf}              img={declaracaoImg}              title="Declaração de Residência"                          badge="PDF" delay={0}   />
            <AnimatedCard href={autorizacaoPdf}             img={autorizacaoImg}             title="Autorização de Viagem"                             badge="PDF" delay={60}  />
            <AnimatedCard href={requerimentoCertidaoPdf}    img={requerimentoCertidaoImg}    title="Requerimento de Certidão"                          badge="PDF" delay={120} />
            <AnimatedCard href={requerimentoInteiroTeorPdf} img={requerimentoInteiroTeorImg} title="Requerimento de Certidão em Inteiro Teor"          badge="PDF" delay={180} />
            <AnimatedCard href={formularioRetificacaoPdf}   img={formularioRetificacaoImg}   title="Formulário de Retificação"                         badge="PDF" delay={240} />
            <AnimatedCard href={reconhecimentoEspontaneoPdf} img={reconhecimentoEspontaneoImg} title="Termo de Reconhecimento Espontâneo de Filho(a)"  badge="PDF" delay={300} />
            <AnimatedCard href={procuracaoFarmaciaPdf}      img={procuracaoFarmaciaImg}      title="Procuração – Programa Farmácia Popular"            badge="PDF" delay={360} />
            <AnimatedCard href={declaracaoHipossuficienciaPdf} img={declaracaoHipossuficienciaImg} title="Declaração de Hipossuficiência"              badge="PDF" delay={420} />
          </div>
        </section>

      </div>
    </>
  );
}

/* ================================================================
   COMPONENTE: AnimatedCard
   – Fade-in por scroll via IntersectionObserver
   – Hover com elevação + linha dourada + zoom na imagem
================================================================ */
function AnimatedCard({ href, img, title, badge, delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="lu-card-wrap">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="lu-card"
      >
        {badge && <span className="lu-badge">{badge}</span>}

        <img
          src={img}
          alt={title}
          className="lu-card-img"
          loading="lazy"
        />

        <h3 className="lu-card-title">{title}</h3>

        <span className="lu-card-arrow">↗</span>
      </a>
    </div>
  );
}
