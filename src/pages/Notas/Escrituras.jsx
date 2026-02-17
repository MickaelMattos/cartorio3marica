import React from "react";

export default function Escrituras() {
  return (
    <>
      <section className="content-section">
        <h2 className="section-title">O que é Escritura Pública</h2>
        <p>
          A escritura pública é um <strong>documento dotado de fé pública</strong>, 
          lavrado por tabelião em Cartório de Notas, que formaliza negócios jurídicos 
          e declarações de vontade das partes envolvidas.
        </p>
        <p>
          Por conferir <strong>segurança jurídica, autenticidade e publicidade</strong> 
          aos atos praticados, a escritura pública é instrumento essencial para diversos 
          negócios jurídicos, especialmente aqueles de maior complexidade ou valor.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Características da Escritura Pública</h2>
        <ul>
          <li><strong>Fé Pública:</strong> Presunção de veracidade e autenticidade</li>
          <li><strong>Força Probante:</strong> Documento público com alto valor probatório</li>
          <li><strong>Segurança Jurídica:</strong> Redação técnica conforme as normas legais</li>
          <li><strong>Assessoria Jurídica:</strong> Orientação do tabelião às partes</li>
          <li><strong>Imparcialidade:</strong> Tabelião zela pelos interesses de todas as partes</li>
          <li><strong>Permanência:</strong> Registro permanente em livros do cartório</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Principais Tipos de Escrituras Públicas</h2>

        <h3 className="section-subtitle">1. Escritura Pública de Compra e Venda de Imóvel</h3>
        <p>
          Formaliza a transferência de propriedade de bem imóvel entre vendedor e comprador.
        </p>
        <p><strong>Quando é obrigatória:</strong></p>
        <ul>
          <li>Imóveis de valor superior a 30 salários mínimos (art. 108 do Código Civil)</li>
          <li>Quando uma das partes preferir este formato por maior segurança</li>
        </ul>

        <h3 className="section-subtitle">2. Escritura Pública de Doação</h3>
        <p>
          Formaliza a transferência gratuita de bens imóveis ou móveis de alto valor.
        </p>
        <p><strong>Tipos de doação:</strong></p>
        <ul>
          <li>Doação pura e simples</li>
          <li>Doação com reserva de usufruto</li>
          <li>Doação com encargo (modal)</li>
          <li>Doação em contemplação de casamento futuro</li>
        </ul>

        <h3 className="section-subtitle">3. Escritura Pública de Permuta</h3>
        <p>
          Formaliza a troca de imóveis entre proprietários, com ou sem compensação financeira (torna).
        </p>

        <h3 className="section-subtitle">4. Escritura Pública de Divórcio Consensual</h3>
        <p>
          Dissolve o casamento de forma consensual, sem necessidade de processo judicial, 
          quando não há filhos menores ou incapazes.
        </p>
        <p><strong>Requisitos:</strong></p>
        <ul>
          <li>Consenso entre os cônjuges</li>
          <li>Ausência de filhos menores ou incapazes</li>
          <li>Assistência de advogado(a)</li>
        </ul>

        <h3 className="section-subtitle">5. Escritura Pública de União Estável</h3>
        <p>
          Reconhece e formaliza a união estável, estabelecendo regime de bens e direitos 
          dos companheiros.
        </p>

        <h3 className="section-subtitle">6. Escritura Pública de Dissolução de União Estável</h3>
        <p>
          Extingue a união estável de forma consensual, com partilha de bens, quando não 
          há filhos menores ou incapazes.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Outros Tipos de Escrituras</h2>

        <h3 className="section-subtitle">Escritura de Inventário e Partilha</h3>
        <p>
          Formaliza a partilha de bens deixados por pessoa falecida, de forma extrajudicial, 
          quando há consenso entre herdeiros e não há testamento.
        </p>

        <h3 className="section-subtitle">Escritura de Pacto Antenupcial</h3>
        <p>
          Estabelece o regime de bens do casamento (separação total, comunhão universal, 
          participação final nos aquestos), diverso do regime legal de comunhão parcial.
        </p>

        <h3 className="section-subtitle">Escritura de Instituição de Bem de Família</h3>
        <p>
          Protege o imóvel residencial contra penhoras e execuções, garantindo moradia 
          à família.
        </p>

        <h3 className="section-subtitle">Escritura de Dação em Pagamento</h3>
        <p>
          Formaliza a entrega de bem imóvel para quitação de dívida, com concordância 
          do credor.
        </p>

        <h3 className="section-subtitle">Escritura de Cessão de Direitos Hereditários</h3>
        <p>
          Transfere direitos hereditários de um herdeiro para outro ou para terceiros.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Requisitos para Lavratura de Escritura</h2>

        <h3 className="section-subtitle">Capacidade das Partes</h3>
        <ul>
          <li>Maiores de 18 anos</li>
          <li>Capazes civilmente</li>
          <li>Menores entre 16 e 18 anos com assistência de pais ou responsável legal</li>
        </ul>

        <h3 className="section-subtitle">Documentação Geral</h3>
        <ul>
          <li>RG e CPF de todas as partes</li>
          <li>Comprovante de residência atualizado</li>
          <li>Certidão de casamento ou nascimento (conforme estado civil)</li>
          <li>Certidão negativa de débitos fiscais (ITBI, quando aplicável)</li>
        </ul>

        <h3 className="section-subtitle">Documentação Específica (conforme o ato)</h3>
        <ul>
          <li><strong>Imóveis:</strong> matrícula atualizada, IPTU, certidões negativas</li>
          <li><strong>Divórcio:</strong> certidão de casamento, documentos dos bens a partilhar</li>
          <li><strong>Inventário:</strong> certidão de óbito, documentos de todos os bens</li>
        </ul>

        <div className="warning-box">
          <p>
            <strong>Importante:</strong> A documentação completa e específica varia conforme 
            o tipo de escritura. Consulte previamente o cartório para lista detalhada.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Procedimento de Lavratura</h2>
        <ol>
          <li><strong>Consulta prévia:</strong> Agendamento e orientação sobre documentação</li>
          <li><strong>Análise documental:</strong> Verificação de requisitos legais pelo tabelião</li>
          <li><strong>Elaboração da minuta:</strong> Redação técnica do ato jurídico</li>
          <li><strong>Leitura e aprovação:</strong> Leitura da escritura às partes presentes</li>
          <li><strong>Assinaturas:</strong> Partes, testemunhas (quando necessário) e tabelião</li>
          <li><strong>Registro:</strong> Lavratura no livro de notas do cartório</li>
          <li><strong>Certidões:</strong> Emissão de cópias autenticadas para as partes</li>
        </ol>
      </section>

      <section className="content-section">
        <h2 className="section-title">Presença das Partes</h2>
        <p>
          É <strong>obrigatória</strong> a presença pessoal das partes no ato da lavratura, 
          salvo casos excepcionais com procuração pública com poderes especiais e expressos.
        </p>

        <div className="info-box">
          <p>
            Para atos que envolvem imóveis, a procuração deve conter poderes específicos 
            para venda, compra, doação ou permuta de imóveis, conforme o caso.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Testemunhas</h2>
        <p>
          A presença de testemunhas é <strong>facultativa</strong> na maioria dos casos, 
          mas pode ser exigida em situações específicas:
        </p>
        <ul>
          <li>Quando uma das partes não sabe ou não pode assinar</li>
          <li>A pedido das próprias partes</li>
          <li>Por determinação legal ou normativa</li>
        </ul>
        <p>
          Testemunhas devem ser maiores de 18 anos, capazes, e não podem ter interesse 
          direto no ato.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Custos e Emolumentos</h2>
        <p>
          O valor dos emolumentos para lavratura de escrituras é tabelado pelo estado 
          e varia conforme:
        </p>
        <ul>
          <li>Tipo de escritura</li>
          <li>Valor do negócio (no caso de compra e venda)</li>
          <li>Quantidade de páginas</li>
        </ul>

        <div className="success-box">
          <p>
            <strong>Gratuidades:</strong> Escritura de divórcio e dissolução de união 
            estável são gratuitas para pessoas que declarem não poder pagar os emolumentos.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Retificação de Escritura</h2>
        <p>
          Erros materiais ou omissões podem ser corrigidos mediante:
        </p>
        <ul>
          <li><strong>Escritura retificadora:</strong> para correções simples</li>
          <li><strong>Escritura ratificadora:</strong> para ratificar atos</li>
          <li><strong>Averbação:</strong> para pequenos ajustes</li>
        </ul>
        <p>
          Alterações substanciais podem exigir nova escritura ou processo judicial.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Registro da Escritura</h2>
        <p>
          Após a lavratura, escrituras que envolvem <strong>bens imóveis</strong> devem 
          ser levadas ao <strong>Registro de Imóveis</strong> competente para produzir 
          efeitos perante terceiros.
        </p>
        <p>
          Sem o registro imobiliário, a escritura tem validade apenas entre as partes, 
          mas não transfere efetivamente a propriedade.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Vantagens da Escritura Pública</h2>
        <ul>
          <li>Segurança jurídica máxima</li>
          <li>Fé pública e presunção de veracidade</li>
          <li>Orientação técnica especializada do tabelião</li>
          <li>Redução de litígios futuros</li>
          <li>Dispensa de reconhecimento de firma (assinaturas já são reconhecidas)</li>
          <li>Permanência: cópias podem ser emitidas a qualquer tempo</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Base Legal</h2>
        <p>
          Código Civil Brasileiro (especialmente arts. 107, 108, 215 a 224), Lei nº 
          8.935/1994 (Lei dos Cartórios), Código de Normas da Corregedoria Geral da 
          Justiça de cada estado, Provimentos do Conselho Nacional de Justiça.
        </p>
      </section>
	  
	  <div className="whatsapp-contact">
        <p>Para agendar escrituras ou obter mais informações, entre em contato:</p>
        <a
          href="https://wa.me/5521994135564"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <img src="/src/assets/images/whatsapp.png" alt="WhatsApp" />
          <span>(21) 99413-5564</span>
        </a>
      </div>
    </>
  );
}
