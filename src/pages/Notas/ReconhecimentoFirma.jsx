import React from "react";

export default function ReconhecimentoFirma() {
  return (
    <>
      <section className="content-section">
        <h2 className="section-title">O que é Reconhecimento de Firma</h2>
        <p>
          O reconhecimento de firma é o ato pelo qual o <strong>tabelião certifica 
          a autenticidade de uma assinatura</strong> aposta em documento, conferindo 
          fé pública e segurança jurídica ao ato.
        </p>
        <p>
          Este serviço é essencial para validar contratos, procurações, declarações 
          e diversos documentos que exigem comprovação da autenticidade da assinatura.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Modalidades de Reconhecimento de Firma</h2>

        <h3 className="section-subtitle">1. Reconhecimento por Semelhança</h3>
        <p>
          O tabelião compara a assinatura do documento com a <strong>ficha de firma</strong> 
          (modelo de assinatura) previamente cadastrada no cartório, atestando que são semelhantes.
        </p>
        <p><strong>Quando usar:</strong></p>
        <ul>
          <li>Contratos particulares</li>
          <li>Declarações diversas</li>
          <li>Autorizações</li>
          <li>Documentos gerais que exigem firma reconhecida</li>
        </ul>
        <div className="info-box">
          <p>
            <strong>Importante:</strong> O tabelião certifica apenas a <strong>semelhança 
            da assinatura</strong>, não presenciou o ato de assinar nem atesta o conteúdo 
            do documento.
          </p>
        </div>

        <h3 className="section-subtitle">2. Reconhecimento por Autenticidade (ou por Verdade)</h3>
        <p>
          O signatário comparece <strong>pessoalmente</strong> ao cartório e assina o 
          documento <strong>na presença do tabelião</strong>, que certifica que aquela 
          pessoa, identificada por documento oficial, assinou naquele momento.
        </p>
        <p><strong>Quando usar:</strong></p>
        <ul>
          <li>Procurações</li>
          <li>Contratos de grande valor</li>
          <li>Transferências de veículos</li>
          <li>Documentos que exigem maior segurança</li>
          <li>Quando expressamente solicitado por órgão ou instituição</li>
        </ul>
        <div className="highlight-box">
          <p>
            Esta modalidade oferece <strong>maior segurança</strong>, pois o tabelião 
            presencia o ato e identifica o signatário.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Abertura de Firma (Cadastro de Assinatura)</h2>
        <p>
          Para realizar reconhecimento de firma por semelhança, é necessário ter 
          <strong> firma aberta</strong> (assinatura cadastrada) no cartório.
        </p>

        <h3 className="section-subtitle">Como Abrir Firma</h3>
        <ol>
          <li>Comparecer pessoalmente ao cartório</li>
          <li>Apresentar documento oficial com foto (RG, CNH ou Passaporte)</li>
          <li>Apresentar CPF</li>
          <li>Assinar na ficha de firma do cartório (geralmente 3 vezes)</li>
          <li>Pagar emolumento (valor tabelado)</li>
        </ol>

        <div className="success-box">
          <p>
            <strong>Atenção:</strong> A firma aberta em um cartório é válida apenas naquele 
            cartório. Para reconhecer firma em outro cartório, é necessário abrir firma 
            novamente.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Documentos que Exigem Reconhecimento de Firma</h2>
        <ul>
          <li>Procurações</li>
          <li>Contratos de compra e venda</li>
          <li>Contratos de locação</li>
          <li>Autorizações (viagem de menor, etc.)</li>
          <li>Declarações de residência</li>
          <li>Transferências de veículos</li>
          <li>Documentos para órgãos públicos</li>
          <li>Contratos bancários</li>
          <li>Cessões de direitos</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Procedimento para Reconhecimento</h2>

        <h3 className="section-subtitle">Reconhecimento por Semelhança</h3>
        <ol>
          <li>Ter firma aberta no cartório</li>
          <li>Assinar o documento (pode ser antes de ir ao cartório)</li>
          <li>Levar o documento ao cartório</li>
          <li>Cartório confere assinatura com ficha de firma</li>
          <li>Tabelião apõe carimbo de reconhecimento</li>
          <li>Pagar emolumento</li>
        </ol>

        <h3 className="section-subtitle">Reconhecimento por Autenticidade</h3>
        <ol>
          <li>Comparecer pessoalmente ao cartório <strong>SEM ASSINAR</strong> o documento</li>
          <li>Apresentar documento oficial com foto</li>
          <li>Assinar o documento na presença do tabelião ou preposto</li>
          <li>Tabelião certifica a autenticidade</li>
          <li>Pagar emolumento</li>
        </ol>
      </section>

      <section className="content-section">
        <h2 className="section-title">Documentos Necessários</h2>
        
        <h3 className="section-subtitle">Para Abertura de Firma</h3>
        <ul>
          <li>RG, CNH ou Passaporte (original)</li>
          <li>CPF</li>
        </ul>

        <h3 className="section-subtitle">Para Reconhecimento por Semelhança</h3>
        <ul>
          <li>Documento já assinado</li>
          <li>Firma já aberta no cartório</li>
        </ul>

        <h3 className="section-subtitle">Para Reconhecimento por Autenticidade</h3>
        <ul>
          <li>Documento SEM assinatura</li>
          <li>RG, CNH ou Passaporte (original)</li>
          <li>CPF (quando solicitado)</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Validade do Reconhecimento</h2>
        <p>
          O reconhecimento de firma <strong>não possui prazo de validade</strong>. 
          Ele certifica que, na data do reconhecimento, a assinatura era autêntica 
          ou semelhante ao padrão cadastrado.
        </p>
        <p>
          No entanto, o <strong>documento</strong> pode ter prazo de validade próprio, 
          conforme sua finalidade (ex: procurações podem ter prazo determinado).
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Situações Especiais</h2>

        <h3 className="section-subtitle">Pessoa que Não Sabe ou Não Pode Assinar</h3>
        <p>
          Nestes casos, não é possível fazer reconhecimento de firma. A solução é 
          lavrar <strong>escritura pública</strong> no Cartório de Notas, onde a pessoa 
          comparece e um terceiro assina "a rogo" (em nome dela).
        </p>

        <h3 className="section-subtitle">Documentos em Língua Estrangeira</h3>
        <p>
          É possível reconhecer firma em documentos estrangeiros, mas o tabelião 
          não certifica o conteúdo, apenas a assinatura.
        </p>

        <h3 className="section-subtitle">Reconhecimento de Firma Digital</h3>
        <p>
          Alguns cartórios oferecem reconhecimento de firma eletrônica/digital, 
          mediante uso de assinatura digital ICP-Brasil.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Custos</h2>
        <p>
          Os valores são tabelados por cada estado e incluem:
        </p>
        <ul>
          <li><strong>Abertura de firma:</strong> valor fixo</li>
          <li><strong>Reconhecimento por semelhança:</strong> valor por assinatura</li>
          <li><strong>Reconhecimento por autenticidade:</strong> valor maior (pela 
              presença do signatário)</li>
        </ul>

        <div className="warning-box">
          <p>
            <strong>Atenção:</strong> Se houver múltiplas assinaturas no mesmo documento, 
            cada reconhecimento é cobrado separadamente.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Reconhecimento de Firma x Autenticação</h2>
        <p>São serviços diferentes:</p>
        <ul>
          <li><strong>Reconhecimento de firma:</strong> Certifica a <strong>autenticidade 
              da assinatura</strong></li>
          <li><strong>Autenticação:</strong> Certifica que a <strong>cópia é fiel ao 
              original</strong></li>
        </ul>
        <p>
          Em alguns casos, um documento pode necessitar de ambos os serviços.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Cancelamento ou Revogação</h2>
        <p>
          O reconhecimento de firma é <strong>ato definitivo</strong> e não pode ser 
          cancelado. Se um documento com firma reconhecida precisa ser invalidado, 
          deve-se revogar o próprio documento (por exemplo, revogação de procuração).
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Recusa de Reconhecimento</h2>
        <p>
          O tabelião pode recusar reconhecimento de firma quando:
        </p>
        <ul>
          <li>A assinatura não confere com a ficha de firma</li>
          <li>Há suspeita de falsificação</li>
          <li>O documento contém ilegalidades evidentes</li>
          <li>Falta documentação necessária</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Atualização de Firma</h2>
        <p>
          Se a assinatura da pessoa mudou com o tempo, é recomendável atualizar a 
          ficha de firma no cartório para evitar divergências.
        </p>
        <p>
          Para atualizar, basta comparecer ao cartório com documento de identidade 
          e assinar nova ficha.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Dicas Importantes</h2>
        <ul>
          <li>Mantenha sua assinatura sempre padronizada</li>
          <li>Para maior segurança, prefira reconhecimento por autenticidade</li>
          <li>Sempre leia o documento antes de assinar</li>
          <li>Guarde cópia de documentos importantes com firma reconhecida</li>
          <li>Verifique qual modalidade o órgão destinatário exige</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Base Legal</h2>
        <p>
          Lei nº 8.935/1994 (Lei dos Cartórios), Código Civil Brasileiro, Código de 
          Normas da Corregedoria Geral da Justiça de cada estado, Provimentos do 
          Conselho Nacional de Justiça.
        </p>
      </section>
    </>
  );
}
