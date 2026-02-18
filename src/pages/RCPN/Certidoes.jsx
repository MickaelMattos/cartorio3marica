import React from "react";

export default function Certidoes() {
  return (
    <>
      <section className="content-section">
        <h2 className="section-title">O que são Certidões de Registro Civil</h2>
        <p>
          As certidões de registro civil são documentos oficiais que reproduzem 
          os assentos registrados nos livros do Registro Civil das Pessoas Naturais, 
          dotadas de fé pública e eficácia probatória.
        </p>
        <p>
          São essenciais para comprovação de situação jurídica e prática de diversos 
          atos da vida civil.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Tipos de Certidões</h2>

        <h3 className="section-subtitle">1. Certidão de Inteiro Teor</h3>
        <p>
          Reproduz <strong>integralmente</strong> o conteúdo do assento de registro, 
          incluindo todas as anotações, averbações e dados constantes no livro.
        </p>
        <p><strong>Quando utilizar:</strong></p>
        <ul>
          <li>Quando é necessário comprovar todas as informações do registro</li>
          <li>Para fins de processos judiciais</li>
          <li>Para comprovar averbações e alterações realizadas</li>
          <li>Uso em repartições públicas que exijam documentação completa</li>
        </ul>

        <h3 className="section-subtitle">2. Certidão de Nascimento</h3>
        <p>
          Comprova o nascimento e a filiação da pessoa, bem como eventuais averbações 
          (casamento, divórcio, emancipação, etc.).
        </p>
        <p><strong>Uso comum:</strong></p>
        <ul>
          <li>Matrícula escolar</li>
          <li>Emissão de documentos (RG, CPF, Passaporte)</li>
          <li>Habilitação para casamento</li>
          <li>Concursos públicos</li>
          <li>Formalização de contratos de trabalho</li>
        </ul>

        <h3 className="section-subtitle">3. Certidão de Casamento</h3>
        <p>
          Comprova a união civil entre duas pessoas, incluindo regime de bens e 
          eventuais averbações (divórcio, óbito, alterações de nome).
        </p>
        <p><strong>Uso comum:</strong></p>
        <ul>
          <li>Alteração de documentos pessoais após casamento</li>
          <li>Comprovação de estado civil</li>
          <li>Processos de inventário</li>
          <li>Questões previdenciárias</li>
          <li>Registro de filhos</li>
        </ul>

        <h3 className="section-subtitle">4. Certidão de Óbito</h3>
        <p>
          Comprova o falecimento de uma pessoa, com informações sobre data, hora, 
          local e causa da morte.
        </p>
        <p><strong>Uso comum:</strong></p>
        <ul>
          <li>Liberação de sepultamento</li>
          <li>Processos de inventário e sucessão</li>
          <li>Questões previdenciárias (pensão por morte)</li>
          <li>Baixa de documentos e registros</li>
          <li>Cancelamento de contratos e serviços</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Gratuidade das Certidões</h2>
        <div className="success-box">
          <p>
            <strong>São gratuitas:</strong>
          </p>
          <ul>
            <li>A primeira certidão de nascimento</li>
            <li>A primeira certidão de óbito</li>
            <li>Certidão de nascimento para fins eleitorais (alistamento)</li>
            <li>Certidão para pessoas reconhecidamente pobres (mediante declaração)</li>
          </ul>
        </div>
        <p>
          As demais certidões são sujeitas ao pagamento de emolumentos conforme 
          tabela estadual vigente.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Validade das Certidões</h2>
        <p>
          De acordo com a legislação vigente, as certidões não possuem prazo de validade 
          fixo, exceto quando estabelecido expressamente pelo órgão requisitante.
        </p>
        
        <h3 className="section-subtitle">Prazos Comuns Exigidos</h3>
        <ul>
          <li><strong>Concursos públicos:</strong> geralmente 90 dias</li>
          <li><strong>Casamento:</strong> certidão de nascimento sem prazo; certidão de 
              casamento com divórcio até 180 dias</li>
          <li><strong>Processos judiciais:</strong> conforme determinação do juiz</li>
          <li><strong>Transações imobiliárias:</strong> até 90 dias</li>
        </ul>

        <div className="info-box">
          <p>
            <strong>Importante:</strong> Sempre verifique com o órgão solicitante qual 
            o prazo de validade aceito para a certidão.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Como Solicitar Certidões</h2>

        <h3 className="section-subtitle">Presencialmente</h3>
        <ul>
          <li>Comparecer ao Cartório de Registro Civil onde foi feito o registro</li>
          <li>Informar os dados da pessoa (nome completo, data do evento, nome dos pais)</li>
          <li>Apresentar documento de identidade (quando aplicável)</li>
          <li>Efetuar pagamento de emolumentos (quando devido)</li>
          <li>Receber a certidão no prazo estipulado</li>
        </ul>

        <h3 className="section-subtitle">Online (Portal Nacional de Certidões)</h3>
        <p>
          Através do site <strong>www.registrocivil.org.br</strong>, é possível solicitar 
          certidões de nascimento, casamento e óbito de todo o Brasil.
        </p>
        <p><strong>Vantagens:</strong></p>
        <ul>
          <li>Disponibilidade 24 horas</li>
          <li>Entrega rápida (geralmente em minutos)</li>
          <li>Certidão em formato digital com QR Code</li>
          <li>Mesma validade jurídica da certidão física</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Certidões em Formato Digital</h2>
        <p>
          As certidões digitais emitidas pelo Portal Nacional ou pelos cartórios possuem:
        </p>
        <ul>
          <li><strong>QR Code</strong> para verificação de autenticidade</li>
          <li><strong>Assinatura eletrônica</strong> do registrador</li>
          <li><strong>Validade jurídica</strong> equivalente à certidão física</li>
          <li><strong>Possibilidade de impressão</strong> em papel comum</li>
        </ul>

        <div className="highlight-box">
          <p>
            A certidão digital tem a mesma força probante que a certidão física, 
            sendo aceita em todos os órgãos públicos e privados.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Certidões de Pessoas Falecidas</h2>
        <p>
          Certidões de pessoas falecidas podem ser solicitadas por:
        </p>
        <ul>
          <li>Herdeiros legais</li>
          <li>Cônjuge ou companheiro(a)</li>
          <li>Representante legal</li>
          <li>Advogados com procuração</li>
          <li>Interessados mediante justificativa</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Certidão Negativa</h2>
        <p>
          A certidão negativa atesta a <strong>inexistência</strong> de registro em 
          determinado período ou para determinada pessoa.
        </p>
        <p><strong>Quando solicitar:</strong></p>
        <ul>
          <li>Para comprovar estado civil de solteiro</li>
          <li>Para demonstrar que não consta casamento em determinado local</li>
          <li>Para fins de habilitação matrimonial em casos específicos</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Apostilamento de Certidões (Apostila de Haia)</h2>
        <p>
          Para uso de certidões brasileiras no exterior, é necessário realizar o 
          <strong> apostilamento</strong>, conforme a Convenção de Haia.
        </p>
        <p>
          O apostilamento certifica a autenticidade da assinatura e do cargo do 
          registrador, dispensando reconhecimento consular.
        </p>
        <p><strong>Onde fazer:</strong></p>
        <ul>
          <li>Cartórios de Notas autorizados</li>
          <li>Alguns Cartórios de Registro Civil (conforme regulamentação local)</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Retificação de Dados na Certidão</h2>
        <p>
          Se houver erros ou informações incorretas na certidão, é possível solicitar:
        </p>
        <ul>
          <li><strong>Retificação administrativa:</strong> para erros materiais evidentes, 
              diretamente no cartório</li>
          <li><strong>Retificação judicial:</strong> para alterações substanciais, 
              mediante ação judicial</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Segunda Via de Certidão</h2>
        <p>
          A segunda via de certidão pode ser solicitada a qualquer momento, mediante:
        </p>
        <ul>
          <li>Comparecimento ao cartório onde foi feito o registro, ou</li>
          <li>Solicitação online pelo Portal Nacional de Certidões</li>
        </ul>
        <p>
          A segunda via reproduz fielmente o registro, incluindo todas as averbações 
          realizadas até a data da expedição.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Informações Adicionais</h2>
        <ul>
          <li>As certidões devem ser apresentadas em bom estado de conservação</li>
          <li>Certidões danificadas ou ilegíveis podem ser recusadas pelos órgãos</li>
          <li>É recomendável sempre conferir os dados antes de solicitar a certidão</li>
          <li>Documentos em língua estrangeira necessitam de tradução juramentada</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Base Legal</h2>
        <p>
          Lei nº 6.015/1973 (Lei de Registros Públicos), Lei nº 9.534/1997 (Gratuidade), 
          Provimento CNJ nº 100/2020 (Certidões Digitais), Código de Normas da 
          Corregedoria Geral da Justiça e demais normas aplicáveis.
        </p>
      </section>
    </>
  );
}
