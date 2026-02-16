import React, { useEffect } from "react";
import "../styles/global.css";

export default function Identidade() {

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
        Emissão da 2ª Via da Carteira de Identidade
      </h1>

      <section style={styles.hero} className="reveal">
        <p style={styles.heroText}>
          Atendimento para emissão de 2ª via do RG do Estado do Rio de Janeiro,
          sem agendamento, por ordem de chegada.
        </p>

        <strong style={styles.address}>
          📍 Avenida Gilberto Carvalho, Lote C25 – Vivendas, Maricá
        </strong>
      </section>

      <section style={styles.card} className="reveal">
        <h2 style={styles.cardTitle}>Como funciona o atendimento</h2>
        <ul style={styles.list}>
          <li>Distribuição de senhas no início de cada turno</li>
          <li>Vagas limitadas por dia</li>
          <li>Senhas disponíveis até às 16h00</li>
        </ul>
      </section>

      <section style={styles.card} className="reveal">
        <h2 style={styles.cardTitle}>Horários e senhas</h2>
        <ul style={styles.list}>
          <li><strong>Manhã:</strong> 09h35 às 11h51 – 8 senhas</li>
          <li><strong>Tarde:</strong> 13h15 às 16h56 – 13 senhas</li>
        </ul>
      </section>

      <section style={styles.card} className="reveal">
        <h2 style={styles.cardTitle}>Documentos obrigatórios</h2>
        <ul style={styles.list}>
          <li>Certidão atualizada (nascimento ou casamento)</li>
          <li>Original ou cópia autenticada</li>
          <li>CPF</li>
          <li>Comprovante de residência (até 90 dias)</li>
        </ul>
      </section>

      <section style={styles.card} className="reveal">
        <h2 style={styles.cardTitle}>Menores de 16 anos</h2>
        <p style={styles.text}>
          Devem estar acompanhados de pai, mãe ou responsável legal,
          portando RG e CPF originais ou guarda definitiva.
        </p>
      </section>

      <section style={styles.valueCard} className="reveal">
        <h2 style={styles.cardTitle}>Valores</h2>

        <ul style={styles.list}>
          <li>Taxa de serviço do cartório: R$ 76,25</li>
          <li>DUDA (se necessário): R$ 55,95</li>
        </ul>

        <strong style={styles.total}>Total: R$ 120,70</strong>

        <p style={styles.text}>
          Pagamento em dinheiro, débito ou PIX (conforme indicado).
        </p>
      </section>

      <section style={styles.warningCard} className="reveal">
        <h2 style={styles.cardTitle}>Avisos importantes</h2>
        <ul style={styles.list}>
          <li>Dirija-se ao balcão ao chegar</li>
          <li>Esteja atento ao chamado da senha</li>
          <li>Acompanhantes somente nos casos permitidos</li>
          <li>Não realizamos emissão de 1ª via</li>
          <li>Não realizamos 2ª via para RG de outro estado</li>
          <li>Realizamos apenas a coleta de dados</li>
        </ul>
      </section>

      <section style={styles.deliveryCard} className="reveal">
        <h2 style={styles.cardTitle}>Entrega e retirada</h2>
        <p style={styles.text}>
          Previsão de entrega: aproximadamente 20 dias corridos.
        </p>
        <p style={styles.text}>
          Retirada: segunda a quinta-feira, das 13h00 às 16h00.
        </p>
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
    marginBottom: "15px"
  },

  address: {
    color: "rgb(31,47,43)"
  },

  card: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    marginBottom: "30px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
  },

  valueCard: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    marginBottom: "30px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)"
  },

  warningCard: {
    backgroundColor: "#fff7f0",
    padding: "30px",
    borderRadius: "12px",
    marginBottom: "30px",
    border: "1px solid #f0d2b8"
  },
  
  deliveryCard: {
  backgroundColor: "rgb(220 255 220)",
  padding: "30px",
  borderRadius: "12px",
  marginBottom: "30px",
  border: "1px solid rgba(31,47,43,0.15)"
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

  total: {
    display: "block",
    marginTop: "15px",
    fontSize: "18px",
    color: "rgb(31,47,43)"
  }
};
