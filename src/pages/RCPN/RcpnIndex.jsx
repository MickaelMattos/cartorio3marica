import React from "react";

export default function RcpnIndex() {
  return (
    <>
      <section className="content-section">
        <h2 className="section-title">Introdução</h2>
        <p>
          O Registro Civil das Pessoas Naturais é responsável pelos atos
          essenciais da vida civil, garantindo autenticidade, publicidade,
          segurança jurídica e eficácia aos registros.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Gratuidade</h2>
        <div className="success-box">
          <p>
            <strong>Importante:</strong> São gratuitos o registro de nascimento, 
            o registro de óbito e a primeira certidão, conforme a Lei nº 9.534/1997.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Informações Importantes</h2>
        <p>
          Para situações específicas, recomenda-se o comparecimento presencial
          ao cartório para orientação individualizada.
        </p>
        
        <div className="highlight-box">
          <p>
            Nossa equipe está pronta para atender você com profissionalismo 
            e atenção aos detalhes.
          </p>
        </div>
      </section>
    </>
  );
}
