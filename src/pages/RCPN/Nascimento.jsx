import React from "react";

export default function Nascimento() {
  return (
    <>
      <section className="content-section">
        <h2 className="section-title">Gratuidade</h2>
        <div className="success-box">
          <p>
            <strong>Importante:</strong> O registro de nascimento, bem como a primeira certidão, 
            são <strong>GRATUITOS</strong>, conforme a legislação vigente.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Prazo para Registro</h2>
        <p>O nascimento deve ser registrado:</p>
        <ul>
          <li>
            Até <strong>15 dias</strong> após o nascimento, quando ocorrido na
            sede do distrito de Registro Civil
          </li>
          <li>
            Até <strong>3 meses</strong> após o nascimento, quando ocorrido fora
            da sede do distrito de Registro Civil
          </li>
        </ul>

        <div className="info-box">
          <p>
            O registro pode ser feito no Serviço de Registro Civil da área onde 
            ocorreu o nascimento ou da área de residência dos pais.
          </p>
        </div>

        <p>
          <strong>Observação:</strong> Quando depender do comparecimento da mãe
          para o registro, o prazo poderá ser prorrogado, conforme as
          circunstâncias específicas do caso.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Registro Após o Prazo Legal</h2>
        <p>
          Mesmo após o decurso do prazo legal, o registro de nascimento ainda
          poderá ser realizado no Serviço de Registro Civil da área de
          residência dos pais, observadas as normas legais vigentes.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Como Registrar um Nascimento</h2>
        <p>Para registrar o nascimento de uma criança são necessários:</p>
        <ul>
          <li>
            <strong>Declaração de Nascido Vivo (DNV)</strong> original, emitida
            pelo estabelecimento de saúde onde ocorreu o nascimento ou por
            médico habilitado que tenha assistido o parto
          </li>
          <li>Documentos pessoais originais que identifiquem os pais</li>
          <li>
            Comprovante de residência poderá ser solicitado quando o registro
            não for realizado no local de nascimento
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Pais Casados Civilmente</h2>
        <p>Basta a presença do pai ou da mãe da criança, munido de:</p>
        <ul>
          <li>Documento de Identificação (original)</li>
          <li>Certidão de Casamento (original)</li>
          <li>Declaração de Nascido Vivo – DNV (original)</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Pais Não Casados ou Sem Certidão de Casamento</h2>
        
        <h3 className="section-subtitle">Comparecimento do Pai</h3>
        <ul>
          <li>Documento de Identificação próprio (original)</li>
          <li>Declaração de Nascido Vivo (original)</li>
          <li>Documento de Identificação da mãe (original)</li>
        </ul>
        <p>
          O funcionário do Cartório poderá exigir o comparecimento da mãe
          quando julgar necessário para esclarecimentos.
        </p>

        <h3 className="section-subtitle">Comparecimento da Mãe</h3>
        <ul>
          <li>Documento de Identificação (original)</li>
          <li>Declaração de Nascido Vivo (original)</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Capacidade do Declarante</h2>
        <ul>
          <li>
            Maiores de <strong>16 anos</strong> podem declarar maternidade e
            paternidade sem assistência de pais ou responsáveis
          </li>
          <li>
            Menores de <strong>16 anos</strong> devem estar acompanhados do
            representante legal
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Nome</h2>
        <p>
          O nome é constituído de dois elementos:
          <strong> prenome</strong> (ou nome próprio) e
          <strong> sobrenome</strong> (ou patronímico ou apelido de família).
        </p>

        <h3 className="section-subtitle">Prenome</h3>
        <ul>
          <li>Escolhido livremente pelos pais, observando o bom senso</li>
          <li>Não deve ser ridículo, vexatório ou causar constrangimento</li>
          <li>
            Pode ser simples (João, Luzia, Pedro, Clarice) ou composto (Maria
            Aparecida, José Carlos, Pedro Henrique)
          </li>
        </ul>

        <h3 className="section-subtitle">Sobrenome</h3>
        <ul>
          <li>É composto pelos sobrenomes dos pais</li>
          <li>
            Tradicionalmente o sobrenome paterno vem por último, mas não há
            obrigatoriedade
          </li>
          <li>
            Não é permitido criar sobrenomes novos ou estranhos à família
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Registro de CPF</h2>
        <div className="highlight-box">
          <p>
            Os registros de nascimento já incluem automaticamente a inscrição
            do <strong>CPF</strong> da criança.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Base Legal e Informações Importantes</h2>
        <p>
          Este conteúdo está fundamentado na Lei nº 6.015/1973 (Lei de Registros
          Públicos).
        </p>
        <p>
          Para informações específicas sobre procedimentos locais, consulte
          sempre o Cartório de Registro Civil competente ou o Código de Normas
          Extrajudicial vigente em sua região.
        </p>
      </section>
    </>
  );
}
