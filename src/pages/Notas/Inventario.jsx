import React, { useState } from "react";

export default function Inventario() {
  return (
        <div style={styles.page}>
      <h1 style={styles.title}>Inventário</h1>

      {/* INTRODUÇÃO */}
      <AnimatedSection title="">
        <p>
          O inventário é o procedimento destinado à apuração dos bens, direitos
          e dívidas deixados por pessoa falecida, com posterior partilha entre
          os herdeiros. Desde a Lei 11.441/07, é possível realizar o inventário
          em cartório, por escritura pública, de forma mais rápida, simples e
          segura, quando preenchidos os requisitos legais.
        </p>
      </AnimatedSection>

      {/* REQUISITOS */}
      <AnimatedSection title="Requisitos para Inventário em Cartório">
        <ul>
          <li>Todos os herdeiros devem ser maiores e capazes;</li>
          <li>Deve haver consenso quanto à partilha dos bens;</li>
          <li>É obrigatória a presença de advogado;</li>
          <li>
            Havendo testamento, é necessária autorização judicial,
            salvo nos casos de testamento revogado, caduco ou declarado inválido.
          </li>
        </ul>
      </AnimatedSection>

      {/* DOCUMENTOS DO FALECIDO */}
      <AnimatedSection title="Documentos do Falecido">
        <ul>
          <li>RG e CPF;</li>
          <li>Certidão de óbito;</li>
          <li>
            Certidão de casamento atualizada (até 6 meses) ou certidão de
            nascimento, se solteiro;
          </li>
          <li>Escritura de pacto antenupcial e respectivo registro (se houver);</li>
          <li>Certidão negativa de testamento (CENSEC);</li>
          <li>Certidões dos distribuidores competentes;</li>
          <li>Certidão conjunta de débitos federais;</li>
          <li>Cópia da última declaração de Imposto de Renda.</li>
        </ul>
      </AnimatedSection>

      {/* DOCUMENTOS DOS HERDEIROS */}
      <AnimatedSection title="Documentos dos Herdeiros e Advogado">
        <ul>
          <li>RG e CPF;</li>
          <li>
            Certidão de nascimento (solteiros) ou certidão de casamento
            atualizada até 90 dias;
          </li>
          <li>Qualificação completa das partes;</li>
          <li>Carteira da OAB e qualificação do advogado.</li>
        </ul>
      </AnimatedSection>

      {/* BENS */}
      <AnimatedSection title="Documentos dos Bens">
        <ul>
          <li>
            <strong>Imóveis Urbanos:</strong> Certidão de ônus atualizada (30 dias),
            IPTU do ano vigente e do óbito, certidão municipal negativa e
            declaração de quitação condominial.
          </li>
          <li>
            <strong>Imóveis Rurais:</strong> Certidão de ônus, CCIR, ITR,
            Certidão Negativa de Débitos de Imóvel Rural e CAR.
          </li>
          <li>
            <strong>Veículos:</strong> CRLV do exercício.
          </li>
          <li>
            <strong>Contas bancárias e investimentos:</strong> Extratos na data do óbito.
          </li>
          <li>
            <strong>Empresas:</strong> CNPJ, contrato social atualizado,
            certidão da Junta Comercial e balanço patrimonial.
          </li>
        </ul>
      </AnimatedSection>

      {/* DÍVIDAS E INVENTARIANTE */}
      <AnimatedSection title="Dívidas, Direitos e Inventariante">
        <ul>
          <li>
            Devem ser informadas eventuais dívidas e respectivos credores;
          </li>
          <li>
            A herança responde pelas dívidas até o limite do patrimônio deixado;
          </li>
          <li>
            Deve ser nomeado inventariante para representar o espólio;
          </li>
          <li>
            A partilha deve indicar o valor atribuído a cada bem.
          </li>
        </ul>
      </AnimatedSection>

      {/* IMPOSTO */}
      <AnimatedSection title="Imposto (ITCMD)">
        <p>
          O ITCMD (Imposto sobre Transmissão Causa Mortis) deve ser recolhido
          antes da lavratura da escritura. Pode ser pago sem multa até 60 dias
          da data do óbito. Após esse prazo, incidem encargos legais.
        </p>
      </AnimatedSection>

      {/* SITUAÇÕES ESPECIAIS */}
      <AnimatedSection title="Situações Especiais">
        <ul>
          <li>Inventário com testamento (mediante autorização judicial);</li>
          <li>Reconhecimento de união estável por consenso;</li>
          <li>Renúncia de herança;</li>
          <li>Sobrepartilha de bens descobertos posteriormente;</li>
          <li>Inventário negativo;</li>
          <li>Procuração pública com poderes específicos.</li>
        </ul>
      </AnimatedSection>

      {/* COMPETÊNCIA */}
      <AnimatedSection title="Competência">
        <p>
          É livre a escolha do tabelião de notas, independentemente do domicílio
          das partes, local dos bens ou do óbito. Não se aplicam as regras de
          competência do processo judicial ao inventário extrajudicial.
        </p>
      </AnimatedSection>

      {/* EFEITOS */}
      <AnimatedSection title="Efeitos da Escritura">
        <p>
          A escritura pública de inventário produz efeitos imediatos e não
          depende de homologação judicial. Para transferência dos bens,
          deverá ser apresentada aos órgãos competentes, como Registro de
          Imóveis, DETRAN, Junta Comercial e instituições financeiras.
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