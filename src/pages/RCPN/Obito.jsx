import React from "react";

export default function Obito() {
  return (
    <>
      <section className="content-section">
        <h2 className="section-title">Gratuidade</h2>
        <div className="success-box">
          <p>
            <strong>Importante:</strong> O registro de óbito, bem como a primeira certidão, 
            são <strong>GRATUITOS</strong>, conforme a legislação vigente (Lei nº 9.534/1997).
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Prazo para Registro</h2>
        <p>
          O óbito deve ser registrado no prazo de <strong>até 24 horas</strong> após 
          o falecimento, no Cartório de Registro Civil:
        </p>
        <ul>
          <li>Do local onde ocorreu o óbito, ou</li>
          <li>Do local de residência do falecido, ou</li>
          <li>Do local de sepultamento</li>
        </ul>

        <div className="warning-box">
          <p>
            <strong>Atenção:</strong> O sepultamento só pode ser realizado após 
            a emissão da Certidão de Óbito.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Quem Pode Fazer a Declaração</h2>
        <p>Estão obrigados a fazer a declaração de óbito, pela ordem:</p>
        <ol>
          <li>Chefe de família, a respeito de sua mulher, filhos, hóspedes, agregados e fâmulos</li>
          <li>A viúva, a respeito de seu marido, e de cada uma das pessoas indicadas no item anterior</li>
          <li>O filho, a respeito do pai ou da mãe</li>
          <li>O irmão, a respeito dos irmãos e demais pessoas de casa</li>
          <li>O parente mais próximo maior e presente</li>
          <li>O administrador, diretor ou gerente de qualquer estabelecimento público ou particular, 
              a respeito dos que nele faleceram</li>
          <li>Na falta de pessoa competente, nos casos anteriores, a que tiver assistido aos últimos 
              momentos do finado, o médico, o sacerdote ou vizinho que do falecimento tiver notícia</li>
        </ol>
      </section>

      <section className="content-section">
        <h2 className="section-title">Documentos Necessários</h2>
        
        <h3 className="section-subtitle">Documentação Obrigatória</h3>
        <ul>
          <li><strong>Declaração de Óbito (DO)</strong> expedida por médico (original)</li>
          <li><strong>Documento de identidade do falecido</strong> (RG, CNH ou outro documento oficial com foto)</li>
          <li><strong>CPF do falecido</strong></li>
          <li><strong>Certidão de Casamento</strong> (se o falecido era casado) - para fins de averbação</li>
          <li><strong>Documento de identidade do declarante</strong> (original e cópia)</li>
        </ul>

        <h3 className="section-subtitle">Documentação Complementar (quando aplicável)</h3>
        <ul>
          <li>Certidão de nascimento ou casamento do falecido</li>
          <li>Comprovante de residência do falecido</li>
          <li>Declaração de sepultamento ou cremação</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Óbitos Ocorridos em Hospitais ou Estabelecimentos de Saúde</h2>
        <p>
          Quando o óbito ocorre em hospital, clínica ou outro estabelecimento de saúde, 
          o próprio estabelecimento fornece a Declaração de Óbito (DO) preenchida por médico.
        </p>
        <p>
          O declarante deve comparecer ao Cartório munido da DO e da documentação pessoal 
          do falecido e do declarante.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Óbitos Ocorridos em Residência ou Via Pública</h2>
        <div className="info-box">
          <p>
            Quando o óbito ocorre em residência, via pública ou circunstâncias não hospitalares, 
            é necessário acionar o Serviço de Verificação de Óbito (SVO) ou, dependendo da 
            circunstância, a autoridade policial competente, que providenciará a Declaração de Óbito.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Óbitos por Causa Externa ou Suspeita</h2>
        <p>
          Em casos de morte violenta, suspeita ou por causa externa (acidente, homicídio, suicídio), 
          o corpo deve ser encaminhado ao Instituto Médico Legal (IML) ou órgão equivalente.
        </p>
        <p>
          A Declaração de Óbito será emitida após a realização da necropsia e liberação pelo IML.
        </p>
        
        <div className="warning-box">
          <p>
            <strong>Importante:</strong> Nesses casos, o registro do óbito depende da autorização 
            judicial ou da polícia técnica.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Óbito de Natimorto</h2>
        <p>
          Quando ocorre óbito fetal (natimorto), o registro será feito no livro de registro de 
          óbito, não gerando assento de nascimento.
        </p>
        <p>
          Documentos necessários:
        </p>
        <ul>
          <li>Declaração de Óbito Fetal emitida por médico</li>
          <li>Documentos de identificação dos pais</li>
          <li>Certidão de casamento dos pais (se casados)</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Averbação do Óbito no Registro de Casamento</h2>
        <p>
          Após o registro do óbito, quando o falecido era casado, é importante realizar a 
          averbação do óbito na certidão de casamento. Isso atualiza o estado civil do 
          cônjuge sobrevivente para viúvo(a).
        </p>
        <div className="highlight-box">
          <p>
            Essa averbação pode ser solicitada no mesmo ato do registro de óbito ou 
            posteriormente, mediante apresentação da certidão de óbito.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Emissão de Certidão de Óbito</h2>
        <p>
          Após o registro, a primeira via da certidão é gratuita e será entregue ao declarante.
        </p>
        <p>
          Vias adicionais ou certidões de segunda via são sujeitas ao pagamento de emolumentos 
          conforme tabela vigente, salvo nos casos de gratuidade legal.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Retificação ou Correção de Óbito</h2>
        <p>
          Erros ou omissões no registro de óbito podem ser corrigidos mediante:
        </p>
        <ul>
          <li>Averbação administrativa (erros materiais evidentes)</li>
          <li>Procedimento judicial (alterações substanciais)</li>
        </ul>
        <p>
          Para esclarecimentos sobre retificações, consulte o cartório responsável pelo registro.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Base Legal</h2>
        <p>
          Lei nº 6.015/1973 (Lei de Registros Públicos), Lei nº 9.534/1997 (Gratuidade de 
          Registros Civis), Código Civil Brasileiro, Provimentos do Conselho Nacional de 
          Justiça e Código de Normas da Corregedoria Geral da Justiça.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Informações Importantes</h2>
        <div className="info-box">
          <p>
            Para situações específicas ou casos excepcionais, recomenda-se o comparecimento 
            pessoal ao cartório para orientação individualizada. Nossa equipe está à 
            disposição para esclarecer dúvidas e auxiliar no processo.
          </p>
        </div>
      </section>
    </>
  );
}
