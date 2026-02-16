import React, { useState } from "react";

export default function Nascimento() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Registro de Nascimento</h1>

      <AnimatedSection title="Gratuidade">
        <p>
          O registro de nascimento, bem como a primeira certidão, são
          <strong> GRATUITOS</strong>, conforme a legislação vigente.
        </p>
      </AnimatedSection>

      <AnimatedSection title="Prazo para Registro">
        <p>O nascimento deve ser registrado:</p>

        <ul>
          <li>
            Até <strong>15 dias</strong> após o nascimento, quando ocorrido na
            sede do distrito de Registro Civil;
          </li>
          <li>
            Até <strong>3 meses</strong> após o nascimento, quando ocorrido fora
            da sede do distrito de Registro Civil.
          </li>
        </ul>

        <p>O registro pode ser feito no Serviço de Registro Civil:</p>

        <ul>
          <li>Da área onde ocorreu o nascimento; ou</li>
          <li>Da área de residência dos pais.</li>
        </ul>

        <p>
          <strong>Observação:</strong> Quando depender do comparecimento da mãe
          para o registro, o prazo poderá ser prorrogado, conforme as
          circunstâncias específicas do caso.
        </p>
      </AnimatedSection>

      <AnimatedSection title="Registro Após o Prazo Legal">
        <p>
          Mesmo após o decurso do prazo legal, o registro de nascimento ainda
          poderá ser realizado no Serviço de Registro Civil da área de
          residência dos pais, observadas as normas legais vigentes.
        </p>
      </AnimatedSection>

      <AnimatedSection title="Como Registrar um Nascimento">
        <p>Para registrar o nascimento de uma criança são necessários:</p>

        <ul>
          <li>
            <strong>Declaração de Nascido Vivo (DNV)</strong> original, emitida
            pelo estabelecimento de saúde onde ocorreu o nascimento ou por
            médico habilitado que tenha assistido o parto;
          </li>
          <li>Documentos pessoais originais que identifiquem os pais;</li>
          <li>
            Comprovante de residência poderá ser solicitado quando o registro
            não for realizado no local de nascimento e houver dúvidas sobre a
            competência territorial.
          </li>
        </ul>
      </AnimatedSection>

      <AnimatedSection title="Pais Casados Civilmente">
        <p>
          Basta a presença do pai ou da mãe da criança, munido de:
        </p>

        <ul>
          <li>Documento de Identificação (original);</li>
          <li>Certidão de Casamento (original);</li>
          <li>Declaração de Nascido Vivo – DNV (original).</li>
        </ul>
      </AnimatedSection>

      <AnimatedSection title="Pais Não Casados ou Sem Certidão de Casamento">
        <p>
          <strong>Comparecimento do pai:</strong>
        </p>

        <ul>
          <li>Documento de Identificação próprio (original);</li>
          <li>Declaração de Nascido Vivo (original);</li>
          <li>Documento de Identificação da mãe (original).</li>
        </ul>

        <p>
          O funcionário do Cartório poderá exigir o comparecimento da mãe
          quando julgar necessário para esclarecimentos.
        </p>

        <p>
          <strong>Comparecimento da mãe:</strong>
        </p>

        <ul>
          <li>Documento de Identificação (original);</li>
          <li>Declaração de Nascido Vivo (original).</li>
        </ul>
      </AnimatedSection>

      <AnimatedSection title="Capacidade do Declarante">
        <ul>
          <li>
            Maiores de <strong>16 anos</strong> podem declarar maternidade e
            paternidade sem assistência de pais ou responsáveis;
          </li>
          <li>
            Menores de <strong>16 anos</strong> devem estar acompanhados do
            representante legal.
          </li>
        </ul>
      </AnimatedSection>

      <AnimatedSection title="Nome">
        <p>
          O nome é constituído de dois elementos:
          <strong> prenome</strong> (ou nome próprio) e
          <strong> sobrenome</strong> (ou patronímico ou apelido de família).
        </p>

        <h3 style={styles.subTitle}>Prenome</h3>
        <ul>
          <li>Escolhido livremente pelos pais, observando o bom senso;</li>
          <li>Não deve ser ridículo, vexatório ou causar constrangimento;</li>
          <li>
            Pode ser simples (João, Luzia, Pedro, Clarice) ou composto (Maria
            Aparecida, José Carlos, Pedro Henrique).
          </li>
        </ul>

        <h3 style={styles.subTitle}>Sobrenome</h3>
        <ul>
          <li>É composto pelos sobrenomes dos pais;</li>
          <li>
            Tradicionalmente o sobrenome paterno vem por último, mas não há
            obrigatoriedade;
          </li>
          <li>
            Não é permitido criar sobrenomes novos ou estranhos à família.
          </li>
        </ul>
      </AnimatedSection>

      <AnimatedSection title="Registro de CPF">
        <p>
          Os registros de nascimento já incluem automaticamente a inscrição
          do <strong>CPF</strong> da criança.
        </p>
      </AnimatedSection>

      <AnimatedSection title="Base Legal e Informações Importantes">
        <p>
          Este conteúdo está fundamentado na Lei nº 6.015/1973 (Lei de Registros
          Públicos).
        </p>
        <p>
          Para informações específicas sobre procedimentos locais, consulte
          sempre o Cartório de Registro Civil competente ou o Código de Normas
          Extrajudicial vigente em sua região.
        </p>
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
    marginTop: 20,
    marginBottom: 10,
    fontSize: 18
  }
};
