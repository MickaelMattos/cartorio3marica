import React, { useEffect } from "react";
import "../styles/pages-clean.css";

export default function Identidade() {

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
        Emissão da 2ª Via da Carteira de Identidade
      </h1>

      {/* APRESENTAÇÃO */}
      <section className="content-section reveal" style={{ textAlign: "center" }}>
        <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#444", marginBottom: "16px" }}>
          Atendimento para emissão de 2ª via do RG do Estado do Rio de Janeiro,
          sem agendamento, por ordem de chegada.
        </p>
        <div className="highlight-box" style={{ display: "inline-block", textAlign: "left" }}>
          <strong>📍 Avenida Gilberto Carvalho, Lote C25 – Vivendas, Maricá</strong>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="content-section reveal">
        <h2 className="section-title">Como funciona o atendimento</h2>
        <ul>
          <li>Distribuição de senhas no início de cada turno</li>
          <li>Vagas limitadas por dia</li>
          <li>Senhas disponíveis até às 16h00</li>
        </ul>
      </section>

      {/* HORÁRIOS */}
      <section className="content-section reveal">
        <h2 className="section-title">Horários e senhas</h2>
        <ul>
          <li><strong>Manhã:</strong> 09h35 às 11h51 — 8 senhas</li>
          <li><strong>Tarde:</strong> 13h15 às 16h56 — 13 senhas</li>
        </ul>
      </section>

      {/* DOCUMENTOS */}
      <section className="content-section reveal">
        <h2 className="section-title">Documentos obrigatórios</h2>
        <ul>
          <li>Certidão atualizada (nascimento ou casamento)</li>
          <li>Original ou cópia autenticada</li>
          <li>CPF</li>
          <li>Comprovante de residência (até 90 dias)</li>
        </ul>
      </section>

      {/* MENORES */}
      <section className="content-section reveal">
        <h2 className="section-title">Menores de 16 anos</h2>
        <p>
          Devem estar acompanhados de pai, mãe ou responsável legal,
          portando RG e CPF originais ou guarda definitiva.
        </p>
      </section>

      {/* VALORES */}
      <section className="content-section reveal">
        <h2 className="section-title">Valores</h2>
        <ul>
          <li>Taxa de serviço do cartório: <strong>R$ 76,25</strong></li>
          <li>DUDA (se necessário): <strong>R$ 55,95</strong></li>
        </ul>
        <div className="highlight-box" style={{ marginTop: "16px" }}>
          <strong style={{ fontSize: "18px" }}>Total: R$ 132,20</strong>
          <p style={{ margin: "8px 0 0" }}>
            Pagamento em dinheiro, débito ou PIX (conforme indicado).
          </p>
        </div>
      </section>

      {/* AVISOS */}
      <section className="content-section reveal">
        <h2 className="section-title">Avisos importantes</h2>
        <div className="warning-box">
          <ul style={{ margin: 0, paddingLeft: "20px" }}>
            <li>Dirija-se ao balcão ao chegar</li>
            <li>Esteja atento ao chamado da senha</li>
            <li>Acompanhantes somente nos casos permitidos</li>
            <li>Não realizamos emissão de 1ª via</li>
            <li>Não realizamos 2ª via para RG de outro estado</li>
            <li>Realizamos apenas a coleta de dados</li>
          </ul>
        </div>
      </section>

      {/* ENTREGA */}
      <section className="content-section reveal">
        <h2 className="section-title">Entrega e retirada</h2>
        <div className="success-box">
          <p style={{ marginBottom: "8px" }}>
            <strong>Previsão de entrega:</strong> aproximadamente 20 dias corridos.
          </p>
          <p style={{ margin: 0 }}>
            <strong>Retirada:</strong> segunda a quinta-feira, das 13h00 às 16h00.
          </p>
        </div>
      </section>

    </div>
  );
}
