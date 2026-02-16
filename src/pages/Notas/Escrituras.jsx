import React, { useState } from "react";

export default function escrituras() {
  return (
        <div style={styles.page}>
      <h1 style={styles.title}>Escritura Pública</h1>

      {/* CONCEITO */}
      <AnimatedSection title="O que é Escritura Pública">
        <p>
          A escritura pública é o instrumento notarial que formaliza a manifestação
          de vontade de pessoas físicas ou jurídicas, ou ainda o acordo firmado
          entre múltiplas partes.
        </p>
        <p>
          No ordenamento jurídico brasileiro, trata-se do documento com maior
          força probatória, dotado de fé pública, autenticidade e presunção de
          veracidade, conferindo máxima segurança jurídica aos atos praticados.
        </p>
      </AnimatedSection>

      {/* DIFERENCIAIS DO CARTÓRIO */}
      <AnimatedSection title="Por que fazer no 3º RCPN e Notas de Maricá?">
        <ul>
          <li>Extração de certidões de Maricá sem custo de despachante;</li>
          <li>Emissão de guia para pagamento de tributos municipais ou estaduais;</li>
          <li>Orientação jurídica preventiva;</li>
          <li>Encaminhamento ao Registro de Imóveis competente;</li>
          <li>Serviços administrativos sem acréscimo financeiro;</li>
          <li>Ambiente climatizado, privativo e confortável;</li>
          <li>Possibilidade de assinatura presencial, externa, online ou híbrida conforme regulamentação do CNJ.</li>
        </ul>
      </AnimatedSection>

      {/* DOCUMENTOS GERAIS */}
      <AnimatedSection title="Documentos Necessários – Escrituras Imobiliárias">
        <h3 style={styles.subTitle}>1. Certidão de Propriedade</h3>
        <ul>
          <li>Certidão de inteiro teor com negativa de ônus e alienações (até 30 dias).</li>
        </ul>

        <h3 style={styles.subTitle}>2. Documentos Fiscais do Imóvel</h3>
        <ul>
          <li>IPTU do ano corrente;</li>
          <li>Certidões negativas municipais.</li>
        </ul>

        <h3 style={styles.subTitle}>3. Dados Pessoais das Partes</h3>
        <ul>
          <li>RG e CPF;</li>
          <li>Comprovante de residência;</li>
          <li>Certidão de estado civil atualizada;</li>
          <li>Pacto antenupcial registrado (se houver).</li>
        </ul>
      </AnimatedSection>

      {/* CERTIDÕES DOS TRANSMITENTES */}
      <AnimatedSection title="Certidões dos Transmitentes">
        <ul>
          <li>Certidão da Justiça Estadual (Cível e Fazendária);</li>
          <li>Certidão da Justiça Federal;</li>
          <li>Certidão Trabalhista (CNDT);</li>
          <li>Interdições e Tutelas;</li>
          <li>Execuções Fiscais.</li>
        </ul>
        <p>
          As certidões devem ser obtidas no domicílio das partes alienantes.
          Caso existam ações reais ou pessoais sobre o imóvel, deverão ser
          apresentadas certidões detalhadas quanto ao objeto e andamento.
        </p>
      </AnimatedSection>

      {/* TRIBUTAÇÃO */}
      <AnimatedSection title="Recolhimento de Impostos">
        <ul>
          <li>ITBI – transmissões onerosas (Prefeitura Municipal);</li>
          <li>ITCMD – transmissões gratuitas (Estado).</li>
        </ul>
        <p>
          O imposto deve ser recolhido antes da lavratura da escritura,
          conforme natureza do ato.
        </p>
      </AnimatedSection>

      {/* DOAÇÃO */}
      <AnimatedSection title="Doação de Imóveis">
        <p>
          Considera-se doação o contrato em que uma pessoa transfere, por
          liberalidade, bens ou vantagens do seu patrimônio para o de outra
          (art. 538 do Código Civil).
        </p>

        <h3 style={styles.subTitle}>Tipos de Doação</h3>
        <ul>
          <li>Doação pura;</li>
          <li>Doação com encargo;</li>
          <li>Doação condicional;</li>
          <li>Doação modal;</li>
          <li>Doação com reserva de usufruto.</li>
        </ul>

        <h3 style={styles.subTitle}>Cláusulas Restritivas Possíveis</h3>
        <ul>
          <li>Incomunicabilidade;</li>
          <li>Impenhorabilidade;</li>
          <li>Inalienabilidade;</li>
          <li>Reversão;</li>
          <li>Condição suspensiva.</li>
        </ul>
      </AnimatedSection>

      {/* DIVÓRCIO */}
      <AnimatedSection title="Divórcio Consensual em Cartório">
        <p>
          O divórcio consensual pode ser formalizado por escritura pública,
          de forma rápida e econômica, quando houver consenso entre as partes
          e assistência obrigatória de advogado.
        </p>

        <h3 style={styles.subTitle}>Documentos</h3>
        <ul>
          <li>RG e CPF das partes;</li>
          <li>Certidão de casamento atualizada (até 180 dias);</li>
          <li>OAB do advogado;</li>
          <li>Pacto antenupcial (se houver);</li>
          <li>Documentos dos filhos (se houver).</li>
        </ul>
      </AnimatedSection>

      {/* UNIÃO ESTÁVEL */}
      <AnimatedSection title="União Estável">
        <p>
          A escritura pública de união estável formaliza convivência pública,
          contínua e duradoura com objetivo de constituição de família,
          conforme art. 1.723 do Código Civil.
        </p>

        <h3 style={styles.subTitle}>Regimes de Bens</h3>
        <ul>
          <li>Comunhão Parcial;</li>
          <li>Separação Total;</li>
          <li>Comunhão Universal;</li>
          <li>Participação Final nos Aquestos.</li>
        </ul>

        <h3 style={styles.subTitle}>Efeitos</h3>
        <ul>
          <li>Definição de regime patrimonial;</li>
          <li>Segurança jurídica;</li>
          <li>Facilidade para comprovação previdenciária e sucessória;</li>
          <li>Produz efeitos a partir da lavratura.</li>
        </ul>
      </AnimatedSection>

    
      {/* CONTATO */}
      <AnimatedSection title="">
        <div style={{ textAlign: "center" }}>
          <p style={{ marginBottom: 20, fontWeight: "bold", fontSize: 18 }}>
            Para maiores informações, entre em contato:
          </p>

          <a
            href="https://wa.me/5521994135564"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "14px 26px",
              borderRadius: "30px",
              backgroundColor: "rgb(31, 47, 43)",
              color: "#fff",
              fontWeight: 500,
              textDecoration: "none",
              fontSize: 16,
              transition: "transform 0.2s ease"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src="/src/assets/images/whatsapp.png"
              alt="WhatsApp"
              style={{ width: 28, height: 28 }}
            />
            <span>(21) 99413-5564</span>
          </a>
		  <a
            href="https://wa.me/5521991633030"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "14px 26px",
              borderRadius: "30px",
              backgroundColor: "rgb(31, 47, 43)",
              color: "#fff",
              fontWeight: 500,
              textDecoration: "none",
              fontSize: 16,
              transition: "transform 0.2s ease"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src="/src/assets/images/whatsapp.png"
              alt="WhatsApp"
              style={{ width: 28, height: 28 }}
            />
            <span>(21) 99163-3030</span>
          </a>
        </div>
      </AnimatedSection>
    </div>
  );
}

/* ======================= */
/* COMPONENTE ANIMADO */
/* ======================= */

function AnimatedSection({ title, children }) {
  const [hover, setHover] = useState(false);

  return (
    <section
      style={{
        ...styles.section,
        transform: hover ? "scale(1.02)" : "scale(1)"
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h2 style={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}

/* ======================= */
/* ESTILOS */
/* ======================= */

const styles = {
  page: {
    maxWidth: 1000,
    margin: "0 auto",
    padding: "40px 20px",
    color: "#eaeaea"
  },

  title: {
    color: "rgb(191,167,106)",
    marginBottom: 40,
    textAlign: "center",
    fontSize: 32
  },

  section: {
    background: "#1f2f2b",
    padding: 30,
    borderRadius: 14,
    marginBottom: 30,
    transition: "transform 0.25s ease"
  },

  sectionTitle: {
    color: "rgb(191,167,106)",
    marginBottom: 15,
    fontSize: 22
  },

  subTitle: {
    color: "#d6c28b",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18
  }
};