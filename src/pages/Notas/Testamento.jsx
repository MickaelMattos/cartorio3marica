import React, { useState } from "react";

export default function Inventario() {
  return (
        <div style={styles.page}>
      <h1 style={styles.title}>Testamento</h1>

      {/* INTRODUÇÃO */}
      <AnimatedSection title="">
        <p>
          O testamento público é ato unilateral de última vontade, elaborado
          pelo tabelião em seu livro de notas, por meio do qual o testador
          estabelece disposições para depois de sua morte. Pode dispor sobre
          a destinação de seus bens, nomear herdeiros testamentários e
          legatários, bem como estabelecer disposições de natureza não
          patrimonial.
        </p>
      </AnimatedSection>

      {/* CAPACIDADE TESTAMENTÁRIA */}
      <AnimatedSection title="Capacidade Testamentária">
        <p>
          Podem testar todas as pessoas maiores de 16 anos que estejam em
          pleno gozo de suas faculdades mentais no momento da elaboração
          do testamento.
        </p>
      </AnimatedSection>

      {/* PROCEDIMENTO */}
      <AnimatedSection title="Procedimento para Testamento Público">
        <p>
          O testamento público é escrito pelo tabelião ou seu substituto
          legal em livro de notas, de acordo com as declarações do testador,
          podendo este utilizar minutas, notas ou apontamentos.
        </p>

        <h3 style={styles.subTitle}>Requisitos Obrigatórios</h3>
        <ul>
          <li>Presença de duas testemunhas durante todo o ato;</li>
          <li>
            Leitura do testamento em voz alta pelo tabelião ao testador e às
            testemunhas;
          </li>
          <li>Assinatura pelo testador, testemunhas e tabelião.</li>
        </ul>

        <p>
          Caso o testador não saiba ou não possa assinar, o tabelião declarará
          tal circunstância, assinando por ele uma das testemunhas ou pessoa
          de sua confiança.
        </p>
      </AnimatedSection>

      {/* HERDEIROS NECESSÁRIOS */}
      <AnimatedSection title="Herdeiros Necessários e Legítima">
        <p>
          São herdeiros necessários os descendentes e ascendentes do testador.
        </p>

        <ul>
          <li>
            Existindo herdeiros necessários: o testador pode dispor livremente
            apenas de metade de seus bens (parte disponível), devendo a outra
            metade ser reservada à legítima.
          </li>
          <li>
            Não existindo herdeiros necessários: o testador pode dispor da
            totalidade de seu patrimônio.
          </li>
        </ul>
      </AnimatedSection>

      {/* VANTAGENS */}
      <AnimatedSection title="Vantagens do Testamento Público">
        <ul>
          <li>Maior segurança jurídica, por ser elaborado por tabelião;</li>
          <li>Conservação permanente em livro próprio do cartório;</li>
          <li>Publicidade formal após o falecimento;</li>
          <li>Menor risco de nulidade pela observância das formalidades legais.</li>
        </ul>
      </AnimatedSection>

      {/* OBSERVAÇÕES IMPORTANTES */}
      <AnimatedSection title="Observações Importantes">
        <ul>
          <li>
            O testamento produz efeitos somente após o falecimento do testador;
          </li>
          <li>
            É ato personalíssimo, não admitindo representação;
          </li>
          <li>
            Pode ser alterado ou revogado a qualquer tempo enquanto o testador
            estiver vivo e capaz;
          </li>
          <li>
            O testamento público possui presunção de autenticidade e validade.
          </li>
        </ul>

        <p>
          Para orientações específicas sobre a elaboração do testamento,
          recomenda-se consulta jurídica especializada.
        </p>
      </AnimatedSection>

      {/* BASE LEGAL */}
      <AnimatedSection title="Base Legal">
        <p>
          Código Civil Brasileiro (Lei nº 10.406/2002):
        </p>

        <ul>
          <li>Art. 1.845 – Herdeiros necessários;</li>
          <li>Art. 1.846 – Legítima;</li>
          <li>Art. 1.848 – Parte disponível;</li>
          <li>Art. 1.857 – Conceito de testamento;</li>
          <li>Art. 1.858 – Ato personalíssimo;</li>
          <li>Art. 1.860 – Capacidade testamentária ativa;</li>
          <li>Art. 1.861 – Incapacidade testamentária;</li>
          <li>Art. 1.862 – Formas ordinárias de testamento;</li>
          <li>Art. 1.864 a 1.867 – Testamento público;</li>
        </ul>

        <p>
          Código de Normas da Extrajudicial do Estado do Rio de Janeiro –
          Capítulo XVIII – Dos Testamentos.
        </p>
      </AnimatedSection>

      {/* CONTATO WHATSAPP */}
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
        color: "rgb(255, 255, 255)",
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