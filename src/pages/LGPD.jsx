import React, { useEffect } from "react";
import whatsappIcon from "../assets/images/whatsapp.png";

export default function LGPD() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div style={styles.page}>

      <h1 style={styles.title} className="reveal">
        Proteção de Dados e LGPD
      </h1>

      <section style={styles.hero} className="reveal">
        <p style={styles.heroText}>
          O Cartório do 3º Distrito de Maricá atua com transparência,
          responsabilidade e segurança no tratamento de dados pessoais.
        </p>
      </section>

      <section style={styles.card} className="reveal">
        <h2 style={styles.cardTitle}>O que é a LGPD</h2>
        <p style={styles.text}>
          A LGPD – Lei Geral de Proteção de Dados, foi aprovada em agosto de 2018
          no Brasil e impôs regras sobre o tratamento de dados pessoais.
          A normativa tem como finalidade proteger o direito à liberdade,
          privacidade e livre desenvolvimento dos cidadãos.
        </p>
      </section>

      <section style={styles.card} className="reveal">
        <h2 style={styles.cardTitle}>Cartórios e a LGPD</h2>
        <p style={styles.text}>
          Segundo o artigo 23, §4º da Lei Federal nº 13.709/18, os serviços
          notariais e de registro foram equiparados às pessoas jurídicas
          de direito público.
        </p>
      </section>

      <section style={styles.card} className="reveal">
        <h2 style={styles.cardTitle}>Segurança da Informação</h2>
        <p style={styles.text}>
         O artigo 26 determina que o uso compartilhado de dados pessoais
          deve atender às finalidades específicas de execução de políticas
          públicas.
        </p>
      </section>
	  
	  <section style={styles.card} className="reveal">
        <h2 style={styles.cardTitle}>Segurança da Informação</h2>
        <p style={styles.text}>
         É vedada a transferência de dados a entidades privadas,
          salvo nas hipóteses legais.
        </p>
      </section>

      <section style={styles.card} className="reveal">
        <h2 style={styles.cardTitle}>Encarregado de Dados</h2>
        <p style={styles.text}>
          Guilherme da Silva Martins Chaparoni
          <br />
          cartorio3marica@gmail.com
        </p>
      </section>

      <section style={styles.highlightCard} className="reveal">
        <h2 style={styles.cardTitle}>Direitos do Titular</h2>
        <ul style={styles.list}>
          <li>Confirmar a existência de tratamento</li>
          <li>Acessar seus dados pessoais</li>
          <li>Solicitar correção de dados</li>
          <li>Obter informações sobre compartilhamento</li>
        </ul>
      </section>
	  
	  <section style={styles.highlightCard}>
        <h2 style={styles.cardTitle}>Solicitação de Informações</h2>
        <p style={styles.text}>
          Para exercer seus direitos, encaminhe solicitação formal
          acompanhada de documento de identificação.
        </p>

        <a
          href="https://wa.me/5521969542636"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.whatsappButton}
        >
          <img src={whatsappIcon} alt="WhatsApp" style={styles.whatsappIcon} />
          Falar com o Cartório
        </a>
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
    marginBottom: "30px",
    color: "rgb(31,47,43)",
    textAlign: "center"
  },

  hero: {
    backgroundColor: "rgba(31,47,43,0.05)",
    padding: "30px",
    borderRadius: "12px",
    marginBottom: "40px",
    textAlign: "center"
  },

  heroText: {
    fontSize: "18px",
    lineHeight: 1.6,
    color: "#333"
  },

  card: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    marginBottom: "30px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
  },

  highlightCard: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    marginBottom: "40px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)"
  },

  cardTitle: {
    fontSize: "22px",
    marginBottom: "20px",
    color: "rgb(31,47,43)"
  },

  text: {
    lineHeight: 1.6,
    color: "#333"
  },

  list: {
    paddingLeft: "20px",
    lineHeight: 1.8,
    color: "#333"
  },

  whatsappButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "12px",
    marginTop: "20px",
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
  }
};
