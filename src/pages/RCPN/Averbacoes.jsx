import React, { useState } from "react";

export default function Averbacoes() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Averbações</h1>

      <AnimatedSection title="Averbação de Separação">
        <h3 style={styles.subTitle}>Documentos Necessários</h3>
        <ul>
          <li>
            Carta de Sentença oriunda da Vara de Família;
          </li>
          <li>
            Sentença de Separação autenticada pela Vara de Família;
          </li>
          <li>
            Registro da Sentença de Separação no Registro Civil do Município em
            que foi proferida a sentença, desde que haja previsão normativa no
            Estado quanto à sua obrigatoriedade.
          </li>
        </ul>
      </AnimatedSection>

      <AnimatedSection title="Averbação de Divórcio">
        <h3 style={styles.subTitle}>Documentos Necessários</h3>
        <ul>
          <li>
            Carta de Sentença oriunda da Vara de Família;
          </li>
          <li>
            Sentença de Divórcio autenticada pela Vara de Família;
          </li>
          <li>
            Registro da Sentença de Divórcio no Registro Civil do Município em
            que foi proferida a sentença, desde que haja previsão normativa no
            Estado quanto à sua obrigatoriedade.
          </li>
        </ul>

        <p style={{ marginTop: 15, fontWeight: "bold" }}>Ou</p>

        <ul>
          <li>
            Escritura Pública de Divórcio.
          </li>
        </ul>
      </AnimatedSection>

      <AnimatedSection title="Outras Averbações">
        <p>
          Para informações sobre outras modalidades de averbação, tais como
          alteração de nome, retificação de registro, reconhecimento de filiação
          ou demais situações específicas, solicitamos que entre em contato
          diretamente com a serventia.
        </p>
      </AnimatedSection>
	  
	  <AnimatedSection title="Retificação de Registros">
  <p>
    A retificação visa corrigir erros materiais ou omissões nos registros civis.
    Pode ser processada administrativamente quando o erro é evidente ou, na
    falta de consenso ou casos complexos, por determinação judicial.
  </p>
</AnimatedSection>

<AnimatedSection title="Averbações Relacionadas à Adoção">
  <p>
    A adoção é averbada no registro de nascimento do adotado mediante apresentação
    da sentença judicial de adoção. Essa averbação assegura os efeitos civis e
    sucessórios da nova condição familiar.
  </p>
</AnimatedSection>

<AnimatedSection title="Interdições e Tutelas">
  <p>
    Sentenças de interdição e tutela proferidas pelo Juízo competente são averbadas
    no registro civil do interditado, indicando o curador ou tutor judicialmente
    nomeado.
  </p>
</AnimatedSection>

<AnimatedSection title="Alteração de Nome e Gênero">
  <p>
    É possível solicitar alteração de prenome e anotação de gênero no registro civil,
    observando as limitações legais relativas à criação ou mudança de sobrenomes e
    conforme normas e provimentos aplicáveis.
  </p>
</AnimatedSection>

<AnimatedSection title="Cancelamento de Registros">
  <p>
    O cancelamento de registros lavrados indevidamente depende geralmente de
    decisão judicial transitada em julgado. Após essa decisão, a averbação é feita
    no cartório de origem com as comunicações necessárias.
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
