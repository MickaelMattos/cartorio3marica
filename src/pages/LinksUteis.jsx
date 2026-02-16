import React, { useState } from "react";

/* IMPORTS DAS IMAGENS E PDFs (mantém os seus) */
import prefeituraImg from "../assets/images/prefeitura.png";
import detranImg from "../assets/images/detran.png";
import correiosImg from "../assets/images/buscacep.png";
import tjrjImg from "../assets/images/tjrj.png";
import extrajudicialImg from "../assets/images/extrajudicial.png";
import oabImg from "../assets/images/oab.png";
import treImg from "../assets/images/tre.png";
import cpfImg from "../assets/images/cpf.png";
import cnjImg from "../assets/images/cnj.png";
import arpenImg from "../assets/images/arpen.png";
import registrocivilImg from "../assets/images/registrocivil.png";
import govImg from "../assets/images/gov.png";

import declaracaoPdf from "../assets/formularios/declaracao-residencia.pdf";
import autorizacaoPdf from "../assets/formularios/autorizacao-viagem.pdf";
import requerimentoCertidaoPdf from "../assets/formularios/requerimento-de-certidao.pdf";
import requerimentoInteiroTeorPdf from "../assets/formularios/requerimento-de-certidao-inteiroteor.pdf";
import formularioRetificacaoPdf from "../assets/formularios/formulario-de-retificacao.pdf";
import reconhecimentoEspontaneoPdf from "../assets/formularios/reconhecimento-espontaneo.pdf";
import procuracaoFarmaciaPdf from "../assets/formularios/procuracao-farmacia.pdf";
import termoIndicacaoPaternidadePdf from "../assets/formularios/termo-de-indicacao-de-paternidade.pdf";
import declaracaoHipossuficienciaPdf from "../assets/formularios/declacacao-de-hipossuficiencia.pdf";


import declaracaoImg from "../assets/images/declaracao-residencia.png";
import autorizacaoImg from "../assets/images/autorizacao-viagem.png";
import requerimentoCertidaoImg from "../assets/images/requerimento-de-certidao.png";
import requerimentoInteiroTeorImg from "../assets/images/requerimento-de-certidao-inteiroteor.png";
import formularioRetificacaoImg from "../assets/images/formulario-de-retificacao.png";
import reconhecimentoEspontaneoImg from "../assets/images/reconhecimento-espontaneo.png";
import procuracaoFarmaciaImg from "../assets/images/procuracao-farmacia.png";
import termoIndicacaoPaternidadeImg from "../assets/images/termo-de-indicacao-de-paternidade.png";
import declaracaoHipossuficienciaImg from "../assets/images/declacacao-de-hipossuficiencia.png";


export default function LinksUteis() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Links Úteis</h1>

      {/* ÓRGÃOS OFICIAIS */}
      <section style={styles.sectionCard}>
        <h2 style={styles.sectionTitle}>Órgãos e Serviços Oficiais</h2>

        <div style={styles.grid}>
          <LinkCard href="http://www.marica.rj.gov.br/" img={prefeituraImg} title="Prefeitura de Maricá" />
          <LinkCard href="http://www.detran.rj.gov.br/" img={detranImg} title="Detran-RJ" />
          <LinkCard href="http://www.buscacep.correios.com.br/" img={correiosImg} title="Busca CEP" />
          <LinkCard href="http://www.tjrj.jus.br/" img={tjrjImg} title="Tribunal de Justiça do RJ" />
          <LinkCard href="http://cgj.tjrj.jus.br/portal-extrajudicial" img={extrajudicialImg} title="Portal Extrajudicial" />
          <LinkCard href="http://www.oabrj.org.br/" img={oabImg} title="OAB RJ" />
          <LinkCard href="http://www.tre-rj.jus.br/" img={treImg} title="TRE - RJ" />
          <LinkCard href="https://servicos.receita.fazenda.gov.br/" img={cpfImg} title="2ª Via do CPF" />
          <LinkCard href="https://www.cnj.jus.br" img={cnjImg} title="CNJ" />
          <LinkCard href="https://registrocivil.org.br" img={registrocivilImg} title="Registro Civil Nacional" />
          <LinkCard href="https://arpenbrasil.org.br" img={arpenImg} title="ARPEN Brasil" />
          <LinkCard href="https://www.gov.br" img={govImg} title="Portal Gov.br" />
        </div>
      </section>

      {/* FORMULÁRIOS */}
      <section style={styles.sectionCard}>
        <h2 style={styles.sectionTitle}>Formulários</h2>

        <div style={styles.grid}>
          <LinkCard href={declaracaoPdf} img={declaracaoImg} title="Declaração de Residência" badge="PDF" />
          <LinkCard href={autorizacaoPdf} img={autorizacaoImg} title="Autorização de Viagem" badge="PDF" />
		  <LinkCard href={requerimentoCertidaoPdf} img={requerimentoCertidaoImg} title="Requerimento de Certidão" badge="PDF"/>

<LinkCard 
  href={requerimentoInteiroTeorPdf}
  img={requerimentoInteiroTeorImg}
  title="Requerimento de Certidão em Inteiro Teor"
  badge="PDF"
/>

<LinkCard 
  href={formularioRetificacaoPdf}
  img={formularioRetificacaoImg}
  title="Formulário de Retificação"
  badge="PDF"
/>

<LinkCard 
  href={reconhecimentoEspontaneoPdf}
  img={reconhecimentoEspontaneoImg}
  title="Termo de Reconhecimento Espontâneo de Filho(a)"
  badge="PDF"
/>

<LinkCard 
  href={procuracaoFarmaciaPdf}
  img={procuracaoFarmaciaImg}
  title="Procuração – Programa Farmácia Popular"
  badge="PDF"
/>

<LinkCard 
  href={declaracaoHipossuficienciaPdf}
  img={declaracaoHipossuficienciaImg}
  title="Declaração de Hipossuficiência"
  badge="PDF"
/>
        </div>
      </section>
    </div>
  );
}

/* COMPONENTE CARD COM ANIMAÇÃO */
function LinkCard({ href, img, title, badge }) {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        ...styles.card,
        transform: hover ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hover
          ? "0 10px 20px rgba(0,0,0,0.08)"
          : "0 4px 12px rgba(0,0,0,0.05)"
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {badge && <span style={styles.badge}>{badge}</span>}

      <img
        src={img}
        alt={title}
        style={{
          ...styles.image,
          transform: hover ? "scale(1.05)" : "scale(1)"
        }}
      />

      <h3 style={styles.cardTitle}>{title}</h3>
    </a>
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
    textAlign: "center",
    color: "rgb(31,47,43)"
  },

  sectionCard: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "16px",
    marginBottom: "40px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
  },

  sectionTitle: {
    fontSize: "22px",
    marginBottom: "25px",
    color: "rgb(31,47,43)"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "25px"
  },

  card: {
    position: "relative",
    backgroundColor: "#ffffff",
    padding: "25px",
    borderRadius: "16px",
    textDecoration: "none",
    transition: "all 0.3s ease",
    textAlign: "center"
  },

  image: {
    width: "100%",
    maxWidth: "130px",
    height: "auto",
    objectFit: "contain",
    transition: "transform 0.3s ease"
  },

  cardTitle: {
    marginTop: "15px",
    fontSize: "15px",
    fontWeight: "600",
    color: "rgb(31,47,43)"
  },

  badge: {
    position: "absolute",
    top: "15px",
    right: "15px",
    backgroundColor: "rgb(191,167,106)",
    color: "#fff",
    padding: "4px 10px",
    borderRadius: "20px",
    fontSize: "11px",
    fontWeight: "600"
  }
};