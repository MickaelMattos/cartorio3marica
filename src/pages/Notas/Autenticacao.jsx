import React, { useState } from "react";

export default function Autenticacao() {
  return (
        <div style={styles.page}>
      <h1 style={styles.title}>Autenticação de Documentos</h1>

      {/* TÍTULO */}
   	   <AnimatedSection title="O que é?">
        <ul>
          <li>
             A autenticação é o ato pelo qual o tabelião ou escrevente 
			 autorizado certifica que a cópia reprográfica de um documento 
			 confere com o documento original que lhe foi apresentado.
          </li>
        </ul>
      </AnimatedSection>

      {/* OBSERVAÇÕES */}
     <AnimatedSection title="Observações">
       <ul>
		<li>
			Para documentos eletrônicos, utiliza-se o procedimento de 
			"materialização de documentos", que é a declaração feita pelo 
			notário de que um documento impresso por ele mediante acesso a 
			uma página na internet ou arquivo eletrônico é cópia idêntica 
			do documento eletrônico
		</li>
        <li>
            A vedação à autenticação de documentos impressos da internet 
			permanece em vigor, devendo ser utilizado o procedimento 
			específico de materialização para documentos eletrônicos
        </li>
       </ul>
     </AnimatedSection>

      {/* NÃO FAZER */}
  	  <AnimatedSection title="Documentos que não podem ser Autenticados">
       <ul>
		<li>
			Não se autentica documento impresso da INTERNET 
			(informe-se sobre a materialização de documento), 
			documento rasurado e escrito em língua estrangeira 
			sem tradução oficial.
		</li>
       </ul>
     </AnimatedSection>

      {/* BASE LEGAL */}
  	  <AnimatedSection title="Base Legal">
       <ul>
		<li>
			Código de Normas da Corregedoria Geral da Justiça do 
			Estado do Rio de Janeiro – Parte Extrajudicial, aprovado 
			pelo Provimento CGJ nº 87/2022, vigente desde 01/01/2023, 
			com atualizações subsequentes até Junho de 2025.
		</li>
       </ul>
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