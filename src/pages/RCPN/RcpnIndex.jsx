import React, { useState } from "react";

export default function RcpnIndex() {
  return (
    <>
      <Section title="Introdução">
        <p>
          O Registro Civil das Pessoas Naturais é responsável pelos atos
          essenciais da vida civil, garantindo autenticidade, publicidade,
          segurança jurídica e eficácia aos registros.
        </p>
      </Section>

      <Section title="Gratuidade">
        <p>
          São gratuitos o registro de nascimento, o registro de óbito e a
          primeira certidão, conforme a Lei nº 9.534/1997.
        </p>
      </Section>

      <Section title="Informações Importantes">
        <p>
          Para situações específicas, recomenda-se o comparecimento presencial
          ao cartório.
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
