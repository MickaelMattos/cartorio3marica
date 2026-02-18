import React from "react";

export default function Averbacoes() {
  return (
    <>
      <section className="content-section">
        <h2 className="section-title">O que é Averbação</h2>
        <p>
          Averbação é o ato pelo qual se anota no registro civil informações 
          supervenientes que modificam, complementam ou retificam dados constantes 
          do assento originário, mantendo o registro atualizado.
        </p>
        <p>
          As averbações garantem que as certidões reflitam a situação atual da 
          pessoa, preservando a segurança jurídica e a publicidade dos atos da 
          vida civil.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Tipos Principais de Averbações</h2>

        <h3 className="section-subtitle">1. Averbação de Casamento no Registro de Nascimento</h3>
        <p>
          Anota-se no registro de nascimento a realização do casamento, alterando 
          o estado civil de solteiro para casado.
        </p>
        <p><strong>Documentos necessários:</strong></p>
        <ul>
          <li>Certidão de casamento atualizada (original)</li>
          <li>Certidão de nascimento (para consulta do número do livro e folha)</li>
        </ul>

        <h3 className="section-subtitle">2. Averbação de Divórcio</h3>
        <p>
          Anota-se a dissolução do casamento no registro de casamento e, 
          posteriormente, no registro de nascimento dos ex-cônjuges.
        </p>
        <p><strong>Documentos necessários:</strong></p>
        <ul>
          <li>Certidão de sentença de divórcio com trânsito em julgado ou escritura pública de divórcio</li>
          <li>Certidão de casamento</li>
        </ul>

        <h3 className="section-subtitle">3. Averbação de Óbito</h3>
        <p>
          Registra-se o falecimento no assento de casamento ou nascimento do falecido.
        </p>
        <p><strong>Documentos necessários:</strong></p>
        <ul>
          <li>Certidão de óbito atualizada (original)</li>
          <li>Certidão de casamento ou nascimento do falecido</li>
        </ul>

        <h3 className="section-subtitle">4. Averbação de Sentença Judicial</h3>
        <p>
          Incluem-se decisões judiciais que alteram o registro, tais como:
        </p>
        <ul>
          <li>Retificação de nome ou sobrenome</li>
          <li>Alteração de gênero</li>
          <li>Reconhecimento ou negatória de paternidade</li>
          <li>Anulação de casamento</li>
          <li>Adoção</li>
        </ul>
        <p><strong>Documentos necessários:</strong></p>
        <ul>
          <li>Mandado judicial ou certidão de sentença com trânsito em julgado</li>
          <li>Certidão do registro a ser averbado</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Averbações Específicas</h2>

        <h3 className="section-subtitle">Averbação de Reconhecimento de Paternidade/Maternidade</h3>
        <p>
          Realiza-se quando há reconhecimento posterior de paternidade ou maternidade, 
          seja de forma voluntária ou judicial.
        </p>
        <p><strong>Documentos necessários:</strong></p>
        <ul>
          <li>Escritura pública de reconhecimento de paternidade/maternidade, ou</li>
          <li>Termo lavrado diretamente no cartório, ou</li>
          <li>Mandado judicial</li>
          <li>Certidão de nascimento do reconhecido</li>
          <li>Documentos pessoais do reconhecente</li>
        </ul>

        <h3 className="section-subtitle">Averbação de Emancipação</h3>
        <p>
          Registra a emancipação de menores entre 16 e 18 anos de idade.
        </p>
        <p><strong>Documentos necessários:</strong></p>
        <ul>
          <li>Escritura pública de emancipação lavrada em Cartório de Notas</li>
          <li>Certidão de nascimento do emancipado</li>
          <li>Documentos dos pais ou responsável legal</li>
        </ul>

        <h3 className="section-subtitle">Averbação de Interdição ou Levantamento de Interdição</h3>
        <p>
          Anota-se a sentença de interdição ou seu levantamento.
        </p>
        <p><strong>Documentos necessários:</strong></p>
        <ul>
          <li>Mandado judicial ou certidão da sentença</li>
          <li>Certidão de nascimento ou casamento do interditado</li>
        </ul>

        <h3 className="section-subtitle">Averbação de Retificação Administrativa</h3>
        <p>
          Corrige erros materiais evidentes no registro (grafia, datas óbvias, etc.), 
          sem necessidade de ação judicial.
        </p>
        <p><strong>Documentos necessários:</strong></p>
        <ul>
          <li>Requerimento do interessado</li>
          <li>Documentos que comprovem o erro (RG, certidão de batismo, documentos escolares, etc.)</li>
          <li>Certidão do registro a ser retificado</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Averbação de Alteração de Nome por Uso Social</h2>
        <div className="highlight-box">
          <p>
            Conforme o Provimento CNJ nº 122/2021, é possível realizar alteração de 
            prenome e sobrenome diretamente em cartório, uma única vez, sem necessidade 
            de autorização judicial, desde que não prejudique terceiros.
          </p>
        </div>
        <p><strong>Requisitos:</strong></p>
        <ul>
          <li>Ser maior de 18 anos e capaz</li>
          <li>Não ter condenação criminal pendente</li>
          <li>Não ter processos cíveis que impeçam a alteração</li>
          <li>Uso social do nome pretendido</li>
        </ul>
        <p><strong>Documentos necessários:</strong></p>
        <ul>
          <li>Requerimento do interessado</li>
          <li>Documentos pessoais (RG, CPF)</li>
          <li>Certidão de nascimento ou casamento</li>
          <li>Certidões negativas (criminal, cível)</li>
          <li>Provas do uso social do nome (declarações, documentos, fotos, etc.)</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Averbação de Alteração de Gênero</h2>
        <p>
          Conforme decisão do STF (ADI 4275) e Provimento CNJ nº 73/2018, é possível 
          realizar alteração de prenome e gênero diretamente em cartório, independentemente 
          de cirurgia de redesignação sexual, laudos médicos ou autorização judicial.
        </p>
        <p><strong>Documentos necessários:</strong></p>
        <ul>
          <li>Requerimento do interessado</li>
          <li>Documentos pessoais com foto (RG, CPF)</li>
          <li>Certidão de nascimento</li>
        </ul>
        <div className="info-box">
          <p>
            O procedimento é sigiloso e a alteração não constará nas certidões futuras, 
            exceto mediante autorização judicial ou a pedido do próprio interessado.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Procedimento Geral para Averbação</h2>
        <ol>
          <li>Comparecimento ao Cartório de Registro Civil competente</li>
          <li>Apresentação dos documentos originais necessários</li>
          <li>Preenchimento de requerimento (quando aplicável)</li>
          <li>Análise da documentação pelo registrador</li>
          <li>Pagamento de emolumentos (quando não gratuito)</li>
          <li>Averbação e atualização do registro</li>
          <li>Emissão de nova certidão atualizada</li>
        </ol>
      </section>

      <section className="content-section">
        <h2 className="section-title">Gratuidades e Custos</h2>
        <div className="success-box">
          <p>
            <strong>Averbações gratuitas:</strong>
          </p>
          <ul>
            <li>Averbação de óbito no casamento</li>
            <li>Alterações decorrentes de decisão judicial em ação gratuita</li>
            <li>Pessoas reconhecidamente pobres (mediante declaração)</li>
          </ul>
        </div>
        <p>
          Para os demais casos, aplicam-se os emolumentos previstos na tabela estadual vigente.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Observações Importantes</h2>
        <ul>
          <li>Todas as averbações são realizadas no livro originário do registro</li>
          <li>As certidões expedidas após a averbação já refletirão as alterações</li>
          <li>Averbações não alteram a data do registro originário</li>
          <li>Documentos em língua estrangeira precisam de tradução juramentada</li>
          <li>Algumas averbações exigem publicação de edital</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Base Legal</h2>
        <p>
          Lei nº 6.015/1973 (Lei de Registros Públicos), Código Civil Brasileiro, 
          Provimentos do Conselho Nacional de Justiça (CNJ nº 73/2018, nº 122/2021), 
          Código de Normas da Corregedoria Geral da Justiça e legislação específica aplicável.
        </p>
      </section>
    </>
  );
}
