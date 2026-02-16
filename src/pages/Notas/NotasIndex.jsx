import React, { useState } from "react";

export default function NotasIndex() {
  return (
    <>
      <Section title="Serviços Notariais">
        <p>
           Os serviços notariais garantem autenticidade, segurança jurídica e fé pública
          aos atos praticados pelos cidadãos. No 3º RCPN e Notas de Maricá,
          oferecemos atendimento técnico especializado para formalização de negócios,
          declarações, escrituras e atos jurídicos em geral.
        </p>
      </Section>

      <Section title="Abertura e Reconhecimento de Firma">
        <p>
           Realizamos abertura de firma (cadastro de assinatura) e reconhecimento
          por semelhança ou autenticidade. Serviço essencial para validade de contratos,
          autorizações, transferências e documentos particulares.
        </p>
      </Section>

      <Section title="Apostila de Haia">
        <p>
          A Apostila de Haia certifica a autenticidade de documentos brasileiros
          para uso no exterior, conforme a Convenção da Haia. Processo rápido,
          seguro e válido em mais de 100 países signatários.
        </p>
      </Section>
	  
	   <Section title="Autenticação de Documentos">
        <p>
          A autenticação confirma que a cópia é fiel ao documento original,
          garantindo validade jurídica para apresentação em órgãos públicos,
          instituições financeiras e entidades privadas.
        </p>
      </Section>
	  
	  <Section title="Usucapião Extrajudicial">
        <p>
          Regularize seu imóvel diretamente em cartório, sem necessidade de ação judicial,
          desde que preenchidos os requisitos legais. Procedimento seguro,
          técnico e com maior agilidade na regularização imobiliária.
        </p>
      </Section>
	  
	  <Section title="Testamento">
        <p> 
			O testamento público permite ao cidadão organizar a sucessão de seus bens
          com segurança jurídica, respeitando os limites legais e evitando conflitos
          futuros entre herdeiros.
        </p>
      </Section>
	  
	  <Section title="Inventário Extrajudicial">
        <p> 
		 O inventário em cartório possibilita a partilha de bens de forma rápida
          e menos burocrática, quando houver consenso entre os herdeiros e assistência
          de advogado.
        </p>
      </Section>
	  
	   <Section title="Procuração Pública">
        <p> 
		 A procuração pública formaliza a concessão de poderes para representação
          em atos jurídicos, contratos, movimentações bancárias e negociações
          imobiliárias, garantindo segurança e validade legal.
        </p>
      </Section>
	  
	  <Section title="Escritura Pública">
        <p> 
		 Instrumento essencial para formalização de compra e venda, doação,
          divórcio, união estável e outros atos jurídicos. A escritura pública
          confere autenticidade e máxima segurança às partes envolvidas.
        </p>
      </Section>
    </>
  );
}

function Section({ title, children }) {
  const [hover, setHover] = useState(false);

  return (
    <section
      style={{
        background: "#1f2f2b",
        padding: 30,
        borderRadius: 14,
        marginBottom: 30,
        transform: hover ? "scale(1.02)" : "scale(1)",
        transition: "transform 0.25s ease"
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h2 style={{ color: "rgb(191,167,106)", marginBottom: 15 }}>
        {title}
      </h2>
      {children}
    </section>
  );
}
