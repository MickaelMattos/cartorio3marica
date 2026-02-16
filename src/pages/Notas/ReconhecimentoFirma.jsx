import React, { useState } from "react";

export default function reconhecimentofirma() {
  return (
        <div style={styles.page}>
      <h1 style={styles.title}>Abertura e Reconhecimento de Firma</h1>

      {/* ABERTURA DE FIRMAS */}
      <AnimatedSection title="Abertura de Firma">
        <p>
          A abertura de firma consiste no depósito, em Cartório, do padrão
          de assinatura de uma pessoa, que ficará arquivado para fins de
          conferência futura.
        </p>

        <p>
          Atenção: Para pessoas com limitações na capacidade de leitura e
          escrita, devem ser observadas cautelas especiais para garantir
          a segurança jurídica, podendo ser necessária a lavratura de
          procuração pública, conforme as circunstâncias do caso,
          nos termos do Código de Normas da Corregedoria Geral da Justiça
          do Estado do Rio de Janeiro – Parte Extrajudicial.
        </p>
      </AnimatedSection>

      {/* DOCUMENTOS PARA ABERTURA */}
      <AnimatedSection title="Documentos Necessários para Abertura de Firma">
        <ul>
          <li>
            Documento de identidade original com foto e CPF; ou
          </li>
          <li>
            Carteira Nacional de Habilitação (CNH) que contenha CPF.
          </li>
        </ul>
      </AnimatedSection>

      {/* ESTRANGEIROS */}
      <AnimatedSection title="Estrangeiros Podem Abrir Firma?">
        <p>
          Sim.
        </p>
        <ul>
          <li>
            Estrangeiro com visto permanente: apresentar Registro Nacional
            de Estrangeiro válido.
          </li>
          <li>
            Estrangeiro com visto temporário: apresentar passaporte com
            visto válido.
          </li>
        </ul>
      </AnimatedSection>

      {/* DEFICIENTE VISUAL */}
      <AnimatedSection title="Pessoa com Deficiência Visual">
        <p>
          A pessoa com deficiência visual pode abrir firma, desde que
          compareça ao Cartório acompanhada de 2 (duas) testemunhas,
          que também deverão assinar o cartão de firma e apresentar
          documentos de identificação válidos.
        </p>
      </AnimatedSection>

      {/* RECONHECIMENTO DE FIRMA */}
      <AnimatedSection title="Reconhecimento de Firma">
        <p>
          O reconhecimento de firma é a declaração do tabelião, ou de
          seu substituto ou escrevente autorizado, de que a assinatura
          constante em determinado documento pertence ao signatário
          que possui cartão de firma arquivado no Cartório.
        </p>
      </AnimatedSection>

      {/* FORMAS DE RECONHECIMENTO */}
      <AnimatedSection title="Formas de Reconhecimento">
        <h3 style={styles.subTitle}>Reconhecimento por Autenticidade</h3>
        <p>
          Exige que o signatário assine o documento na presença do
          tabelião ou preposto autorizado, que certificará esse fato.
        </p>

        <h3 style={styles.subTitle}>Reconhecimento por Semelhança</h3>
        <p>
          O tabelião declara que a assinatura constante no documento é
          semelhante ao padrão de assinatura arquivado no cartão de firma.
        </p>
      </AnimatedSection>

      {/* IMPORTANTE */}
      <AnimatedSection title="Importante">
        <ul>
          <li>
            É proibido reconhecer firma em documento sem data,
            incompleto ou que contenha espaços em branco.
          </li>
          <li>
            É permitido o reconhecimento de firma em documento redigido
            em idioma estrangeiro.
          </li>
        </ul>
        <p>
          Disposições conforme o Código de Normas da Corregedoria Geral
          da Justiça do Estado do Rio de Janeiro – Parte Extrajudicial.
        </p>
      </AnimatedSection>

      {/* FINALIDADE */}
      <AnimatedSection title="Finalidade do Reconhecimento de Firma">
        <p>
          O reconhecimento de firma garante segurança às partes e a
          terceiros, assegurando que a assinatura aposta no documento
          pertence efetivamente ao signatário que possui firma depositada
          no Cartório, conferindo credibilidade e fé pública ao ato.
        </p>
      </AnimatedSection>

      {/* OBRIGATORIEDADE */}
      <AnimatedSection title="Quando é Obrigatório o Reconhecimento por Autenticidade">
        <ul>
          <li>Nos casos expressamente previstos em lei;</li>
          <li>Quando exigido por órgão público ou entidade privada;</li>
          <li>Na alienação de veículo;</li>
          <li>Quando as partes assim desejarem.</li>
        </ul>
      </AnimatedSection>

      {/* DOCUMENTOS PARA RECONHECIMENTO */}
      <AnimatedSection title="Documentos Necessários para Reconhecimento">
        <ul>
          <li>
            Documento original assinado cuja firma se pretende reconhecer,
            contendo a identificação do signatário.
          </li>
        </ul>
      </AnimatedSection>

      {/* OBSERVAÇÕES FINAIS */}
      <AnimatedSection title="Observações">
        <p>
          O maior de 16 anos e menor de 18 anos poderá abrir firma
          desde que emancipado (judicial ou extrajudicialmente) ou
          assistido por seus responsáveis legais, nos termos dos
          artigos 1.634, inciso V, e 1.690 do Código Civil.
        </p>

        <p>
          Texto atualizado conforme o Código de Normas da Corregedoria
          Geral da Justiça do Estado do Rio de Janeiro – Parte
          Extrajudicial, vigente a partir de 2023, com alterações
          posteriores até junho de 2025.
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
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18
  }
};