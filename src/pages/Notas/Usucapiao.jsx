import React, { useState } from "react";

export default function Usucapiao() {
  return (
        <div style={styles.page}>
      <h1 style={styles.title}>Usucapião Extrajudicial</h1>

      {/* TÍTULO */}
   	   <AnimatedSection title="O que é?">
        <ul>
          <li>
             A Lei 6015/1973 em seu art. 216-A com a redação que lhe conferiu a Lei 13.105/2015 
			 regulamentado pelo Provimento n. 23/2016, passou a admitir no cartório de Notas a 
			 formalização da posse por Ata Notarial para ingresso no Registro de Imóvel e posterior 
			 registro. Convertendo a posse em propriedade.
		 </li>
		 <li>
			Ata  notarial  lavrada  por  Tabelião  de  Notas,  atestará  o  tempo  de  
			posse  do  requerente  e  seus  antecessores,  e  demais circunstâncias relevantes.
          </li>
        </ul>
      </AnimatedSection>

      {/* DOCUMENTO */}
     <AnimatedSection title="Exigências e Documentos">
       <ul>
		<li>
			O documento apostilado conterá um <strong>QR Code</strong>, por meio
			do qual qualquer autoridade estrangeira poderá verificar
			eletronicamente a autenticidade do documento original.
		</li>
        <li>
            Planta e Memorial descritivo assinado por profissional legalmente habilitado
        </li>
		<li>
			Certidões negativas do distribuidor do domicílio do requerente
		</li>
		<li>
			Justo título que demonstre a origem, a continuidade, a natureza e o tempo da posse	
		</li>
		<li>
			Qualificação completa do requerente
		</li>
		<li>
			Documento que comprove o tempo de posse do requerente e seus antecessores.
		</li>
       </ul>
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