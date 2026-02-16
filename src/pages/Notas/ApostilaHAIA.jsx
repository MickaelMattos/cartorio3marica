import React, { useState } from "react";

export default function ApostilaHaia() {
  return (
        <div style={styles.page}>
      <h1 style={styles.title}>Apostila em HAIA</h1>

      {/* TÍTULO */}
   	   <AnimatedSection title="O que é?">
        <ul>
          <li>
             O apostilamento é o procedimento que confere validade internacional
          a documentos públicos brasileiros, conforme a Convenção da Apostila
          da Haia.
          </li>
        </ul>
      </AnimatedSection>

      {/* DESCRIÇÃO */}
     <AnimatedSection title="Descrição">
       <ul>
		<li>
			O documento apostilado conterá um <strong>QR Code</strong>, por meio
			do qual qualquer autoridade estrangeira poderá verificar
			eletronicamente a autenticidade do documento original.
		</li>
        <li>
            Para que um cidadão brasileiro legalize documentos a serem utilizados
			no exterior, deverá dirigir-se ao <strong>3º RCPN e Notas de Maricá</strong>,
			cartório com competência específica para realizar o apostilamento
			de documentos na região.
        </li>
		<li>
			A Apostila é aceita em todos os <strong>111 países signatários </strong>
			da Convenção da Haia.
		</li>
       </ul>
     </AnimatedSection>

      {/* ATOS PÚBLICOS */}
  	  <AnimatedSection title="Atos Públicos que Podem ser Apostilados">
       <ul>
		<li>
			Documentos provenientes de autoridades ou funcionários vinculados
            a qualquer jurisdição nacional, incluindo Ministério Público,
            escrivães e oficiais de diligências.
		</li>
        <li>
            Atos notariais.
        </li>
		<li>
			Documentos particulares com firma reconhecida, que adquirem fé
            pública quanto à autenticidade da assinatura, nos termos do
            art. 1º, alínea “d”, da Convenção da Apostila da Haia.
		</li>
       </ul>
     </AnimatedSection>

      {/* DOCUMENTOS NÃO APOSTILÁVEIS */}
  	  <AnimatedSection title="Documentos que NÃO Podem ser Apostilados">
       <ul>
		<li>
			Documentos elaborados por agentes diplomáticos ou consulares.
		</li>
        <li>
            Documentos administrativos diretamente relacionados a operações
            comerciais ou aduaneiras.
        </li>
		<li>
			Documentos emitidos no exterior, os quais devem seguir
            procedimento de legalização consular
		</li>
       </ul>
     </AnimatedSection>
	 

      {/* EXIGÊNCIAS */}
  	  <AnimatedSection title="Exigências e Documentos Necessários">
       <ul>
		<li>
			Apenas documentos <strong>produzidos no Brasil</strong> e destinados
          à apresentação no exterior são passíveis de apostilamento.
		</li>
        <li>
            <strong>Documentos públicos:</strong> Possuem força probante própria
            (art. 405 do CPC), como certidões de nascimento, casamento, óbito,
            diplomas públicos, entre outros;
        </li>
		<li>
			 <strong>Documentos particulares com firma reconhecida:</strong>
            Conforme art. 411 do CPC, adquirem fé pública quanto à autenticidade
            da assinatura para fins de apostilamento.
		</li>
       </ul>
     </AnimatedSection>

      {/* INFORMAÇÕES IMPORTANTES */}
  	  <AnimatedSection title="Informações Importantes">
       <ul>
		<li>
			O documento apostilado tem validade nos países signatários da
            Convenção da Apostila da Haia;
		</li>
        <li>
             É obrigatória a apresentação do documento original para o
            apostilamento;
        </li>
		<li>
			 O QR Code inserido na Apostila permite a verificação eletrônica
            da autenticidade do documento.
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