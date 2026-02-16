import React, { useState } from "react";

export default function Procuracao() {
  return (
        <div style={styles.page}>
      <h1 style={styles.title}>Procuração Pública</h1>

      {/* CONCEITO */}
      <AnimatedSection title="O que é Procuração Pública">
        <p>
          A procuração pública é instrumento jurídico de mandato lavrado em
          Cartório de Notas (Tabelionato), dotado de fé pública, pelo qual
          uma pessoa (outorgante/mandante) confere poderes a outra
          (outorgado/mandatário/procurador) para representá-la na prática de
          atos jurídicos específicos.
        </p>
        <p>
          Diferencia-se da procuração particular por ser elaborada perante
          o tabelião, conferindo maior segurança jurídica, autenticidade e
          força probante ao ato.
        </p>
      </AnimatedSection>

      {/* CARACTERÍSTICAS */}
      <AnimatedSection title="Características da Procuração Pública">
        <ul>
          <li><strong>Fé Pública:</strong> O tabelião atesta identidade, capacidade civil e autenticidade das assinaturas.</li>
          <li><strong>Força Probante:</strong> Presunção de veracidade e autenticidade.</li>
          <li><strong>Obrigatoriedade Legal:</strong> Exigida para determinados atos, como venda de imóveis e representação matrimonial.</li>
        </ul>
      </AnimatedSection>

      {/* TIPOS */}
      <AnimatedSection title="Tipos de Procuração Pública">
        <ul>
          <li><strong>Ad Judicia:</strong> Representação em processos judiciais.</li>
          <li><strong>Ad Negotia:</strong> Negócios e transações extrajudiciais.</li>
          <li><strong>Mista:</strong> Combinação de poderes judiciais e extrajudiciais.</li>
        </ul>
      </AnimatedSection>

      {/* FINALIDADES */}
      <AnimatedSection title="Principais Finalidades">
        <h3 style={styles.subTitle}>Negócios Imobiliários</h3>
        <ul>
          <li>Compra, venda e permuta de imóveis;</li>
          <li>Constituição de hipoteca ou direitos reais;</li>
          <li>Dação em pagamento.</li>
        </ul>

        <h3 style={styles.subTitle}>Questões Financeiras</h3>
        <ul>
          <li>Movimentação de contas bancárias;</li>
          <li>Quitação de financiamentos;</li>
          <li>Recebimento de valores e indenizações.</li>
        </ul>

        <h3 style={styles.subTitle}>Procedimentos Administrativos</h3>
        <ul>
          <li>Atos junto ao DETRAN;</li>
          <li>Receita Federal e Previdência Social;</li>
          <li>Regularização em órgãos públicos.</li>
        </ul>

        <h3 style={styles.subTitle}>Questões Familiares e Sucessórias</h3>
        <ul>
          <li>Inventário e partilha;</li>
          <li>Representação em casamento;</li>
          <li>Guarda e representação legal.</li>
        </ul>

        <h3 style={styles.subTitle}>Atividades Empresariais</h3>
        <ul>
          <li>Representação de pessoas jurídicas;</li>
          <li>Assinatura de contratos;</li>
          <li>Atos societários.</li>
        </ul>
      </AnimatedSection>

      {/* REQUISITOS */}
      <AnimatedSection title="Requisitos Fundamentais do Outorgante">
        <ul>
          <li>Capacidade civil plena e lucidez;</li>
          <li>Deve saber ou poder assinar;</li>
          <li><strong>Vedação absoluta:</strong> não se lavra procuração de pessoa não lúcida.</li>
        </ul>

        <h3 style={styles.subTitle}>Documentação Necessária</h3>
        <ul>
          <li>Documento oficial com foto (RG, CNH ou Passaporte);</li>
          <li>CPF;</li>
          <li>Comprovante de residência;</li>
          <li>Certidão de casamento (se casado).</li>
        </ul>
      </AnimatedSection>

      {/* PROCEDIMENTOS ESPECIAIS */}
      <AnimatedSection title="Procedimentos Especiais">
        <h3 style={styles.subTitle}>Outorgante Analfabeto</h3>
        <ul>
          <li>Presença obrigatória de duas testemunhas;</li>
          <li>Assinatura a rogo;</li>
          <li>Testemunhas maiores e capazes.</li>
        </ul>

        <h3 style={styles.subTitle}>Incapacidade Identificada</h3>
        <ul>
          <li>Suspensão do ato;</li>
          <li>Orientação para regularização judicial;</li>
          <li>Encaminhamento ao Fórum competente.</li>
        </ul>
      </AnimatedSection>

      {/* PODERES ESPECIAIS */}
      <AnimatedSection title="Poderes Especiais (Exigem Menção Expressa)">
        <ul>
          <li>Venda ou permuta de imóveis;</li>
          <li>Dar e receber quitação;</li>
          <li>Transigir e desistir;</li>
          <li>Representação em inventário;</li>
          <li>Constituição de hipoteca ou ônus reais.</li>
        </ul>
      </AnimatedSection>

      {/* DETRAN */}
      <AnimatedSection title="Procuração para o DETRAN">
        <ul>
          <li>Recomendável apresentar documento do veículo;</li>
          <li>Necessária procuração específica com dados completos;</li>
          <li>Informar marca, modelo, ano, chassi, placa e RENAVAM.</li>
        </ul>
      </AnimatedSection>

      {/* DISPOSIÇÕES COMPLEMENTARES */}
      <AnimatedSection title="Disposições Complementares">
        <h3 style={styles.subTitle}>Prazo</h3>
        <ul>
          <li>Pode ser determinado ou indeterminado;</li>
          <li>Sem prazo expresso, considera-se indeterminado.</li>
        </ul>

        <h3 style={styles.subTitle}>Revogação e Extinção</h3>
        <ul>
          <li>Revogação a qualquer tempo;</li>
          <li>Extinção por morte ou interdição;</li>
          <li>Recomenda-se comunicação formal ao procurador.</li>
        </ul>

        <h3 style={styles.subTitle}>Pessoas Jurídicas</h3>
        <ul>
          <li>Contrato social ou estatuto atualizado;</li>
          <li>Ata de eleição da diretoria;</li>
          <li>Documentos dos representantes legais.</li>
        </ul>
      </AnimatedSection>

      {/* BASE LEGAL */}
      <AnimatedSection title="Base Legal">
        <ul>
          <li>Lei nº 8.935/94 – arts. 6º e 7º;</li>
          <li>Código Civil – arts. 104, 166 e 653 a 692;</li>
          <li>Lei nº 10.406/02 – art. 215, §1º, IV;</li>
          <li>Código de Normas da CGJ/RJ – Parte Extrajudicial;</li>
          <li>Provimento CNJ nº 150/2023;</li>
          <li>Código de Trânsito Brasileiro – Lei nº 9.503/97.</li>
        </ul>

        <p>
          Documento elaborado com base na legislação vigente e normas
          extrajudiciais do Estado do Rio de Janeiro.
        </p>
      </AnimatedSection>

      {/* CONTATO */}
      <AnimatedSection title="">
        <div style={{ textAlign: "center" }}>
          <p style={{ marginBottom: 20, fontWeight: "bold", fontSize: 18 }}>
            Para maiores informações, entre em contato:
          </p>

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