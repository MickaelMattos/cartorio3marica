import React from "react";

export default function Usucapiao() {
  return (
    <>
      <section className="content-section">
        <h2 className="section-title">O que é Usucapião Extrajudicial</h2>
        <p>
          A usucapião extrajudicial é o procedimento realizado <strong>diretamente em 
          cartório</strong>, sem necessidade de ação judicial, que permite a aquisição 
          da propriedade de imóvel por quem o possui de forma mansa, pacífica e 
          ininterrupta pelo tempo exigido em lei.
        </p>
        <p>
          Introduzido pelo Código de Processo Civil de 2015 (art. 216-A da Lei nº 6.015/73), 
          este procedimento torna a regularização imobiliária <strong>mais rápida, 
          econômica e desburocratizada</strong>.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Requisitos para Usucapião em Cartório</h2>
        <div className="highlight-box">
          <p><strong>Condições obrigatórias:</strong></p>
          <ul>
            <li>Posse <strong>mansa e pacífica</strong> (sem violência ou clandestinidade)</li>
            <li>Posse <strong>ininterrupta</strong> pelo prazo legal</li>
            <li>Posse com <strong>animus domini</strong> (intenção de dono)</li>
            <li><strong>Consenso</strong> de todos os interessados</li>
            <li>Ausência de litígio judicial sobre o imóvel</li>
            <li>Obrigatória a <strong>assistência de advogado</strong></li>
          </ul>
        </div>

        <div className="warning-box">
          <p>
            <strong>Importante:</strong> Se houver contestação, litígio ou discordância, 
            o procedimento deve ser <strong>judicial</strong>.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Modalidades de Usucapião</h2>

        <h3 className="section-subtitle">1. Usucapião Extraordinária</h3>
        <p><strong>Prazo:</strong> 15 anos de posse ininterrupta</p>
        <p><strong>Requisitos:</strong></p>
        <ul>
          <li>Posse mansa, pacífica e ininterrupta por 15 anos</li>
          <li>Não exige justo título nem boa-fé</li>
        </ul>
        <p><strong>Redução para 10 anos:</strong></p>
        <ul>
          <li>Se o possuidor estabeleceu moradia habitual, ou</li>
          <li>Realizou obras ou serviços de caráter produtivo</li>
        </ul>

        <h3 className="section-subtitle">2. Usucapião Ordinária</h3>
        <p><strong>Prazo:</strong> 10 anos de posse ininterrupta</p>
        <p><strong>Requisitos:</strong></p>
        <ul>
          <li>Posse mansa, pacífica e ininterrupta por 10 anos</li>
          <li><strong>Justo título</strong> (contrato de compra e venda, por exemplo)</li>
          <li><strong>Boa-fé</strong> (acreditar ser dono legítimo)</li>
        </ul>
        <p><strong>Redução para 5 anos:</strong></p>
        <ul>
          <li>Se o imóvel foi adquirido onerosamente</li>
          <li>Com base em registro cancelado posteriormente</li>
          <li>E estabeleceu moradia ou realizou investimentos de interesse social e econômico</li>
        </ul>

        <h3 className="section-subtitle">3. Usucapião Especial Urbana</h3>
        <p><strong>Prazo:</strong> 5 anos de posse ininterrupta</p>
        <p><strong>Requisitos:</strong></p>
        <ul>
          <li>Imóvel urbano de até <strong>250m²</strong></li>
          <li>Posse mansa, pacífica e ininterrupta por 5 anos</li>
          <li>Utilizado para <strong>moradia própria ou da família</strong></li>
          <li>Possuidor não pode ser proprietário de outro imóvel urbano ou rural</li>
        </ul>

        <h3 className="section-subtitle">4. Usucapião Especial Rural</h3>
        <p><strong>Prazo:</strong> 5 anos de posse ininterrupta</p>
        <p><strong>Requisitos:</strong></p>
        <ul>
          <li>Imóvel rural de até <strong>50 hectares</strong></li>
          <li>Posse mansa, pacífica e ininterrupta por 5 anos</li>
          <li>Tornou a terra <strong>produtiva</strong> com seu trabalho</li>
          <li>Utilizado para <strong>moradia própria ou da família</strong></li>
          <li>Possuidor não pode ser proprietário de outro imóvel urbano ou rural</li>
        </ul>

        <h3 className="section-subtitle">5. Usucapião por Abandono do Lar (Familiar)</h3>
        <p><strong>Prazo:</strong> 2 anos de posse ininterrupta</p>
        <p><strong>Requisitos:</strong></p>
        <ul>
          <li>Imóvel urbano de até <strong>250m²</strong></li>
          <li>Posse direta e exclusiva por <strong>ex-cônjuge ou ex-companheiro</strong></li>
          <li>Abandono do lar por mais de 2 anos</li>
          <li>Utilizado para moradia própria ou da família</li>
          <li>Possuidor não pode ser proprietário de outro imóvel</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Vantagens da Usucapião Extrajudicial</h2>
        <ul>
          <li><strong>Rapidez:</strong> Conclusão em 3 a 6 meses (ao invés de anos)</li>
          <li><strong>Menor custo:</strong> Sem custas judiciais</li>
          <li><strong>Menos burocracia:</strong> Procedimento simplificado</li>
          <li><strong>Desjudicialização:</strong> Desafoga o Poder Judiciário</li>
          <li><strong>Consensual:</strong> Quando há acordo entre interessados</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Documentação Necessária</h2>

        <h3 className="section-subtitle">Do Interessado (Possuidor)</h3>
        <ul>
          <li>RG, CPF e comprovante de residência</li>
          <li>Certidão de casamento ou nascimento</li>
          <li>Declaração de Imposto de Renda (últimos 3 anos)</li>
          <li>Certidão negativa de propriedade de imóveis</li>
        </ul>

        <h3 className="section-subtitle">Do Imóvel</h3>
        <ul>
          <li>Matrícula atualizada do Registro de Imóveis</li>
          <li>Planta e memorial descritivo do imóvel</li>
          <li>Certidão de IPTU atualizada</li>
          <li>Comprovantes de pagamento de IPTU (todo o período de posse)</li>
          <li>Contas de água, luz, telefone em nome do possuidor</li>
        </ul>

        <h3 className="section-subtitle">Provas da Posse</h3>
        <ul>
          <li><strong>Justo título:</strong> contrato de compra e venda, compromisso, etc.</li>
          <li><strong>Testemunhas:</strong> declarações de vizinhos e conhecidos</li>
          <li><strong>Documentos:</strong> contas de consumo, correspondências</li>
          <li><strong>Fotos:</strong> do imóvel ao longo dos anos</li>
          <li><strong>Benfeitorias:</strong> notas fiscais, recibos de reformas</li>
        </ul>

        <h3 className="section-subtitle">Certidões</h3>
        <ul>
          <li>Certidão de ônus reais do imóvel</li>
          <li>Certidão de ações cíveis e criminais (Justiça Estadual e Federal)</li>
          <li>Certidão de feitos ajuizados (Justiça do Trabalho)</li>
          <li>Certidão negativa de tributos municipais</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Procedimento da Usucapião Extrajudicial</h2>
        <ol>
          <li><strong>Consulta e análise prévia:</strong> Advogado verifica viabilidade</li>
          <li><strong>Coleta de documentação:</strong> Reunião de todos os documentos necessários</li>
          <li><strong>Elaboração da planta:</strong> Levantamento topográfico do imóvel</li>
          <li><strong>Ata notarial:</strong> Tabelião atesta a posse (facultativo mas recomendado)</li>
          <li><strong>Petição inicial:</strong> Advogado protocola no Cartório de Registro de Imóveis</li>
          <li><strong>Notificações:</strong> Proprietário, confrontantes, Fazenda Pública são notificados</li>
          <li><strong>Publicação de edital:</strong> Chamamento público de interessados</li>
          <li><strong>Manifestações:</strong> Prazo para impugnações</li>
          <li><strong>Parecer do Ministério Público:</strong> MP opina sobre o pedido</li>
          <li><strong>Decisão do Oficial de Registro:</strong> Deferimento ou indeferimento</li>
          <li><strong>Registro:</strong> Lavratura da matrícula em nome do usucapiente</li>
        </ol>
      </section>

      <section className="content-section">
        <h2 className="section-title">Notificação e Anuência de Interessados</h2>
        <p>
          Devem ser notificados e, preferencialmente, concordar com o pedido:
        </p>
        <ul>
          <li><strong>Proprietário registral</strong> (ou seus herdeiros)</li>
          <li><strong>Confrontantes</strong> (vizinhos que fazem divisa)</li>
          <li><strong>Fazenda Pública</strong> (União, Estado e Município)</li>
          <li><strong>Eventuais credores</strong> (se houver ônus no imóvel)</li>
        </ul>

        <div className="info-box">
          <p>
            Se algum interessado <strong>se opuser</strong> ao pedido, o procedimento 
            será <strong>extinto</strong> e deverá prosseguir judicialmente.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Papel do Advogado</h2>
        <p>
          A presença de advogado é <strong>obrigatória</strong> na usucapião extrajudicial.
        </p>
        <p><strong>Funções:</strong></p>
        <ul>
          <li>Análise de viabilidade do pedido</li>
          <li>Elaboração da petição inicial</li>
          <li>Coleta e organização de provas</li>
          <li>Acompanhamento do procedimento</li>
          <li>Resposta a eventuais questionamentos</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Prazo e Custos</h2>

        <h3 className="section-subtitle">Prazo</h3>
        <p>
          O procedimento costuma durar de <strong>3 a 6 meses</strong>, podendo variar 
          conforme a complexidade e a resposta dos interessados.
        </p>

        <h3 className="section-subtitle">Custos</h3>
        <ul>
          <li>Honorários advocatícios</li>
          <li>Emolumentos cartorários</li>
          <li>Levantamento topográfico (planta e memorial)</li>
          <li>Ata notarial (se aplicável)</li>
          <li>Publicação de editais</li>
          <li>Certidões diversas</li>
        </ul>

        <div className="success-box">
          <p>
            <strong>Gratuidade:</strong> Pessoas que não possam arcar com os custos 
            podem solicitar assistência da Defensoria Pública e gratuidade das custas.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Quando NÃO É Possível Usucapião Extrajudicial</h2>
        <div className="warning-box">
          <p><strong>O procedimento deve ser judicial quando:</strong></p>
          <ul>
            <li>Houver <strong>contestação</strong> de qualquer interessado</li>
            <li>Existir <strong>litígio judicial</strong> sobre o imóvel</li>
            <li>Houver <strong>dúvida</strong> sobre os requisitos legais</li>
            <li>Imóvel for <strong>público</strong> (não há usucapião de bem público)</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Usucapião de Imóveis Públicos</h2>
        <p>
          <strong>NÃO É POSSÍVEL</strong> usucapir bens públicos, conforme art. 102 do 
          Código Civil e Súmula 340 do STF.
        </p>
        <p>
          Imóveis pertencentes à União, Estados, Municípios ou entidades públicas são 
          <strong>imprescritíveis</strong>.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Diferenças entre Usucapião Judicial e Extrajudicial</h2>
        
        <h3 className="section-subtitle">Usucapião Judicial</h3>
        <ul>
          <li>Tramita no Poder Judiciário</li>
          <li>Admite contestação e litígio</li>
          <li>Prazo médio: 3 a 5 anos (ou mais)</li>
          <li>Custas judiciais</li>
          <li>Sentença judicial</li>
        </ul>

        <h3 className="section-subtitle">Usucapião Extrajudicial</h3>
        <ul>
          <li>Tramita em Cartório de Registro de Imóveis</li>
          <li>Exige consenso (sem litígio)</li>
          <li>Prazo médio: 3 a 6 meses</li>
          <li>Sem custas judiciais</li>
          <li>Decisão do Oficial de Registro</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Efeitos da Usucapião</h2>
        <p>
          Deferida a usucapião, o Oficial do Registro de Imóveis:
        </p>
        <ul>
          <li>Lavra nova matrícula em nome do usucapiente, ou</li>
          <li>Averba a aquisição na matrícula existente</li>
        </ul>
        <p>
          O usucapiente passa a ser o <strong>proprietário pleno</strong> do imóvel, 
          podendo vender, doar, hipotecar, etc.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Observações Importantes</h2>
        <ul>
          <li>A contagem do prazo da posse é retroativa à data do ajuizamento</li>
          <li>É possível somar a posse de anteriores possuidores (acessio possessionis)</li>
          <li>Interrupções na posse podem invalidar o pedido</li>
          <li>Atos de mera tolerância não geram posse usucapível</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Base Legal</h2>
        <p>
          Código Civil Brasileiro (arts. 1.238 a 1.244), Lei nº 6.015/73 (Lei de 
          Registros Públicos - art. 216-A), Código de Processo Civil (Lei nº 13.105/2015), 
          Provimento CNJ nº 65/2017.
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
