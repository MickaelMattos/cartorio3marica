import React from "react";

export default function Autenticacao() {
  return (
    <>
      <section className="content-section">
        <h2 className="section-title">O que é Autenticação de Documentos</h2>
        <p>
          A autenticação é o ato pelo qual o <strong>tabelião</strong> ou 
          <strong> escrevente autorizado</strong> certifica que a <strong>cópia 
          reproduz fielmente o documento original</strong> apresentado, conferindo 
          fé pública e validade jurídica à reprodução.
        </p>
        <p>
          Com a autenticação, a cópia passa a ter o mesmo valor legal do original 
          para fins de comprovação em processos administrativos, judiciais e 
          transações comerciais.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Finalidade da Autenticação</h2>
        <ul>
          <li>Conferir autenticidade e segurança jurídica a cópias de documentos</li>
          <li>Dispensar a apresentação do documento original em repartições públicas</li>
          <li>Proteger o original contra desgaste, perda ou extravio</li>
          <li>Garantir a fidelidade da reprodução</li>
          <li>Comprovar que a cópia corresponde ao original em determinada data</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Tipos de Documentos que Podem Ser Autenticados</h2>
        
        <h3 className="section-subtitle">Documentos Pessoais</h3>
        <ul>
          <li>RG, CNH, CPF, Passaporte</li>
          <li>Certidões de registro civil (nascimento, casamento, óbito)</li>
          <li>Título de eleitor, certificado militar</li>
          <li>Carteira de trabalho</li>
        </ul>

        <h3 className="section-subtitle">Documentos Acadêmicos</h3>
        <ul>
          <li>Diplomas, certificados, históricos escolares</li>
          <li>Declarações de matrícula</li>
          <li>Atestados de frequência</li>
        </ul>

        <h3 className="section-subtitle">Documentos Empresariais</h3>
        <ul>
          <li>Contratos sociais, alterações contratuais</li>
          <li>Certidões da Junta Comercial</li>
          <li>Balanços, demonstrações financeiras</li>
          <li>Procurações, atas de reunião</li>
        </ul>

        <h3 className="section-subtitle">Outros Documentos</h3>
        <ul>
          <li>Comprovantes de residência</li>
          <li>Certidões negativas (débitos, antecedentes)</li>
          <li>Laudos médicos, atestados</li>
          <li>Contratos particulares</li>
          <li>Declarações diversas</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Documentos que NÃO Podem Ser Autenticados</h2>
        <div className="warning-box">
          <p>
            <strong>Não se autentica:</strong>
          </p>
          <ul>
            <li>Cópia de cópia (salvo se a primeira cópia for autenticada)</li>
            <li>Documentos rasurados, ilegíveis ou em péssimo estado</li>
            <li>Fotografias soltas (salvo quando parte integrante de documento)</li>
            <li>Páginas de livros ou obras com direitos autorais protegidos</li>
            <li>Documentos cujo conteúdo seja ilegal ou imoral</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Como Funciona a Autenticação</h2>
        <ol>
          <li>O interessado apresenta o <strong>documento original</strong> ao cartório</li>
          <li>O cartório faz uma cópia (ou o interessado apresenta cópia já feita)</li>
          <li>O tabelião ou preposto confere a cópia com o original</li>
          <li>É aposto carimbo ou selo de autenticidade com assinatura</li>
          <li>A cópia autenticada é devolvida ao interessado</li>
        </ol>

        <div className="info-box">
          <p>
            <strong>Importante:</strong> É obrigatória a apresentação do documento 
            original no momento da autenticação. Não é possível autenticar sem conferir 
            com o original.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Modalidades de Autenticação</h2>

        <h3 className="section-subtitle">1. Autenticação por Cópia Reprográfica (Xerox)</h3>
        <p>
          É a forma mais comum. O documento é reproduzido por fotocópia (xerox) e 
          conferido com o original.
        </p>

        <h3 className="section-subtitle">2. Autenticação por Traslado</h3>
        <p>
          O documento é transcrito manualmente ou digitado pelo tabelião, reproduzindo 
          fielmente o conteúdo original.
        </p>
        <p>
          Utilizada quando:
        </p>
        <ul>
          <li>O documento original está danificado ou ilegível para fotocópia</li>
          <li>Há necessidade de transcrição literal do texto</li>
          <li>A pedido expresso do interessado</li>
        </ul>

        <h3 className="section-subtitle">3. Autenticação Digital (e-Notariado)</h3>
        <p>
          Alguns cartórios oferecem autenticação digital de documentos eletrônicos, 
          mediante assinatura digital qualificada (ICP-Brasil).
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Autenticação de Documentos Digitais</h2>
        <p>
          Com o avanço tecnológico, é possível autenticar documentos digitais (PDFs) 
          através de plataformas de e-Notariado.
        </p>
        <p><strong>Requisitos:</strong></p>
        <ul>
          <li>Documento em formato digital (PDF, preferencialmente)</li>
          <li>Certificado digital ICP-Brasil do solicitante (em alguns casos)</li>
          <li>Plataforma online do cartório credenciado</li>
        </ul>

        <div className="highlight-box">
          <p>
            A autenticação digital possui mesma validade jurídica da autenticação física.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Autenticação de Documentos em Língua Estrangeira</h2>
        <p>
          Documentos redigidos em idioma estrangeiro podem ser autenticados, mas 
          o tabelião <strong>não certifica o conteúdo</strong>, apenas atesta que 
          a cópia reproduz o original apresentado.
        </p>
        <p>
          Para uso oficial no Brasil, pode ser necessária <strong>tradução juramentada</strong>.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Validade da Autenticação</h2>
        <p>
          A autenticação <strong>não possui prazo de validade</strong>. Ela certifica 
          que, na data da autenticação, a cópia era fiel ao original.
        </p>
        <p>
          No entanto, o <strong>documento autenticado</strong> pode ter prazo de validade 
          próprio, conforme determinação do órgão que o solicitou (ex: certidões com 
          validade de 90 dias).
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Documentos Necessários</h2>
        <ul>
          <li><strong>Documento original</strong> a ser copiado</li>
          <li><strong>Cópia simples</strong> (pode ser feita no próprio cartório)</li>
          <li><strong>Documento de identidade</strong> do solicitante (em alguns casos)</li>
        </ul>
        
        <div className="info-box">
          <p>
            Não é necessário ser o titular do documento para solicitar autenticação, 
            basta apresentar o original.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Custos</h2>
        <p>
          O valor da autenticação é tabelado por cada estado e varia conforme o número 
          de páginas do documento.
        </p>
        <p>
          Geralmente, o custo é por:
        </p>
        <ul>
          <li>Folha única ou primeira folha</li>
          <li>Folhas subsequentes (valor reduzido)</li>
        </ul>

        <div className="success-box">
          <p>
            <strong>Gratuidade:</strong> Pessoas reconhecidamente pobres têm direito 
            à gratuidade mediante declaração de hipossuficiência.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Autenticação x Reconhecimento de Firma</h2>
        <p>São atos distintos:</p>
        <ul>
          <li><strong>Autenticação:</strong> Certifica que a <strong>cópia</strong> 
              é fiel ao original</li>
          <li><strong>Reconhecimento de Firma:</strong> Certifica a 
              <strong> autenticidade da assinatura</strong> em um documento</li>
        </ul>

        <p>
          Em alguns casos, pode ser necessário realizar ambos os atos no mesmo documento.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Ata Notarial para Documentos Digitais</h2>
        <p>
          Para documentos que existem apenas em meio digital (sites, e-mails, redes sociais), 
          não é possível fazer autenticação tradicional. Nesses casos, utiliza-se a 
          <strong> Ata Notarial</strong>.
        </p>
        <p>
          A Ata Notarial documenta fatos presenciados pelo tabelião, como captura de 
          tela, conteúdo de páginas web, conversas digitais, etc.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Observações Importantes</h2>
        <ul>
          <li>A autenticação não valida o conteúdo do documento, apenas atesta que a 
              cópia é fiel ao original</li>
          <li>Documentos públicos já têm fé pública e, em tese, dispensam autenticação 
              (mas podem ser autenticados se solicitado)</li>
          <li>Cartórios não autenticam documentos em branco ou incompletos</li>
          <li>É possível autenticar documentos de outros estados</li>
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
