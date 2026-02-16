import React from "react";
import { Link } from "react-router-dom";
import rcpnImg from "../assets/images/RCPN.png";
import notasImg from "../assets/images/NOTAS.png";
import identidadeImg from "../assets/images/IDENTIDADE.png";




export default function Home() {
  return (
    <div>
      {/* APRESENTAÇÃO */}
    <section style={{ ...styles.section, textAlign: "center" }}>
  <h1 style={styles.mainTitle}>
    Cartório do 3º Distrito de Maricá-RJ
  </h1>
  <p style={styles.text}>
    O Cartório do 3º Distrito de Maricá-RJ é responsável pela prestação
    dos serviços de Registro Civil das Pessoas Naturais (RCPN) e
    Tabelionato de Notas, atuando com segurança jurídica, transparência
    e atendimento à população.
  </p>
</section>


      {/* BLOCO RCPN */}
<section
  className="horizontal-card"
  style={styles.horizontalCard}
>
 <div style={styles.cardContent}>
  <h2 style={styles.title}>
    Registro Civil das Pessoas Naturais (RCPN)
  </h2>

  <ul style={styles.list}>
    <li style={styles.listItem}>Nascimento</li>
    <li style={styles.listItem}>Casamento</li>
    <li style={styles.listItem}>Óbito</li>
    <li style={styles.listItem}>Averbações e Anotações</li>
  </ul>

  <Link to="/rcpn" style={styles.button}>
    Acessar serviços de RCPN
  </Link>
</div>
  
  <div
  className="image-side"
  style={{ "--bg-image": `url(${rcpnImg})` }}
>
  <div style={styles.overlay}></div>
</div>


</section>

{/* BLOCO NOTAS */}
<section style={styles.horizontalCard} className="horizontal-card">
  <div style={styles.cardContent}>
  <h2 style={styles.title}>
	Tabelionato de Notas
  </h2>

    <ul style={styles.list}>
      <li style={styles.listItem}>Escrituras</li>
      <li style={styles.listItem}>Testamentos</li>
      <li style={styles.listItem}>União Estável</li>
      <li style={styles.listItem}>Procurações</li>
      <li style={styles.listItem}>Usucapião</li>
    </ul>

    <Link to="/notas" style={styles.button}>
      Acessar serviços de Notas
    </Link>
  </div>

   <div
  className="image-side"
  style={{ "--bg-image": `url(${notasImg})` }}
>
  <div style={styles.overlay}></div>
</div>

</section>

{/* BLOCO IDENTIDADE */}
<section style={styles.horizontalCard} className="horizontal-card">
  <div style={styles.cardContent}>
  <h2 style={styles.title}>
	Carteira de Identidade
  </h2>

    <ul style={styles.list}>
      <li style={styles.listItem}>Solicitação de 2ª Via</li>
      <li style={styles.listItem}>Consulta de Andamento</li>
    </ul>

    <Link to="/identidade" style={styles.button}>
      Informações sobre Identidade
    </Link>
  </div>

   <div
  className="image-side"
  style={{ "--bg-image": `url(${identidadeImg})` }}
>
  <div style={styles.overlay}></div>
</div>

</section>

      {/* SERVIÇOS RÁPIDOS */} 
	   <section className="home-cards">

  <div className="home-card">
    <h2>Serviços e Informações</h2>
    <ul>
      <li>
        <Link to="/lgpd">Lei Geral de Proteção de Dados (LGPD)</Link>
      </li>
      <li>
        <Link to="/links-uteis">Links Úteis</Link>
      </li>
    </ul>
  </div>

  <div className="home-card highlight">
    <h2>Fale Conosco</h2>
    <p>
      Para atendimento, informações e orientações, acesse nossa página de
      contato.
    </p>
    <Link to="/contato" style={styles.button}>
      Página de Contato
    </Link>
  </div>

</section>

    </div>
	
  );
 
}

const styles = {
  section: {
    marginBottom: "40px"
  },
  title: {
    fontSize: "30px",
    marginBottom: "16px",
    color: "#1f2f2b"
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.6"
  },
  box: {
    backgroundColor: "#f9f9f9",
    padding: "30px",
    borderRadius: "6px",
    marginBottom: "30px",
    borderLeft: "5px solid #bfa76a"
  },
  button: {
  display: "inline-block",
  padding: "10px 18px",
  backgroundColor: "#ffffff",
  color: "#2f2f2f",
  textDecoration: "none",
  borderRadius: "4px",
  fontWeight: "500"
},

  contact: {
    marginTop: "50px",
    padding: "30px",
    backgroundColor: "#1f2f2b",
    color: "#ffffff",
    borderRadius: "6px"
  },
  card: {
  padding: "30px",
  borderRadius: "6px",
  marginBottom: "30px",
  border: "1px solid #e0e0e0",
  backgroundColor: "#ffffff"
},
cardImage: {
  width: "100%",
  height: "220px",
  objectFit: "contain",
  marginBottom: "20px",
  backgroundColor: "#f4f4f4",
  borderRadius: "4px"
},
horizontalCard: {
  display: "flex",
  alignItems: "stretch",
  marginBottom: "40px",
  borderRadius: "8px",
  overflow: "hidden",
  backgroundColor: "#2f2f2f",
  border: "1px solid #1f1f1f",
  minHeight: "260px"
},

cardImageSide: {
  flex: 1,
  position: "relative"
},

overlay: {
  position: "absolute",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.35)",
  zIndex: 2,
  pointerEvents: "none"
},

cardContent: {
  width: "60%",
  padding: "30px",
  zIndex: 3,
  color: "#f1f1f1"
},


title: {
  color: "rgb(191, 167, 106)",
  fontSize: "24px",
  letterSpacing: "0.5px"
},

list: {
  marginBottom: "20px"
},

listItem: {
  marginBottom: "6px",
  color: "#dcdcdc"
},

mainTitle: {
  fontSize: "34px",
  marginBottom: "20px",
  color: "rgb(191, 167, 106)",
  fontWeight: "600"
},
};
