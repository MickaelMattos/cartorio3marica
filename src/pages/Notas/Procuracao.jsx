import React from "react";

export default function Procuracao() {
  return (
    <>
      <section className="content-section">
        <h2 className="section-title">O que é Procuração Pública</h2>
        <p>
          A procuração pública é instrumento jurídico de mandato lavrado em
          Cartório de Notas (Tabelionato), dotado de fé pública, pelo qual
          uma pessoa (outorgante/mandante) confere poderes a outra
          (outorgado/mandatário/procurador) para representá-la na prática de
          atos jurídicos específicos.
        </p>
        <p>
          Diferencia-se da procuração particular por ser elaborada perante
          o tabelião, conferindo maior segurança jurídica, autenticidade e
          força probante ao ato.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Características da Procuração Pública</h2>
        <ul>
          <li><strong>Fé Pública:</strong> O tabelião atesta identidade, capacidade civil e autenticidade das assinaturas.</li>
          <li><strong>Força Probante:</strong> Presunção de veracidade e autenticidade.</li>
          <li><strong>Obrigatoriedade Legal:</strong> Exigida para determinados atos, como venda de imóveis e representação matrimonial.</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Tipos de Procuração Pública</h2>
        <ul>
          <li><strong>Ad Judicia:</strong> Representação em processos judiciais.</li>
          <li><strong>Ad Negotia:</strong> Negócios e transações extrajudiciais.</li>
          <li><strong>Mista:</strong> Combinação de poderes judiciais e extrajudiciais.</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Principais Finalidades</h2>
        
        <h3 className="section-subtitle">Negócios Imobiliários</h3>
        <ul>
          <li>Compra, venda e permuta de imóveis</li>
          <li>Constituição de hipoteca ou direitos reais</li>
          <li>Dação em pagamento</li>
        </ul>

        <h3 className="section-subtitle">Questões Financeiras</h3>
        <ul>
          <li>Movimentação de contas bancárias</li>
          <li>Quitação de financiamentos</li>
          <li>Recebimento de valores e indenizações</li>
        </ul>

        <h3 className="section-subtitle">Procedimentos Administrativos</h3>
        <ul>
          <li>Atos junto ao DETRAN</li>
          <li>Receita Federal e Previdência Social</li>
          <li>Regularização em órgãos públicos</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Requisitos Fundamentais do Outorgante</h2>
        <div className="warning-box">
          <p><strong>Importante:</strong> O outorgante deve ter capacidade civil plena e lucidez. 
          Não se lavra procuração de pessoa não lúcida.</p>
        </div>

        <h3 className="section-subtitle">Documentação Necessária</h3>
        <ul>
          <li>Documento oficial com foto (RG, CNH ou Passaporte)</li>
          <li>CPF</li>
          <li>Comprovante de residência</li>
          <li>Certidão de casamento (se casado)</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Poderes Especiais</h2>
        <div className="highlight-box">
          <p>
            Os seguintes poderes exigem menção expressa na procuração:
          </p>
        </div>
        <ul>
          <li>Venda ou permuta de imóveis</li>
          <li>Dar e receber quitação</li>
          <li>Transigir e desistir</li>
          <li>Representação em inventário</li>
          <li>Constituição de hipoteca ou ônus reais</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Base Legal</h2>
        <ul>
          <li>Lei nº 8.935/94 – arts. 6º e 7º</li>
          <li>Código Civil – arts. 104, 166 e 653 a 692</li>
          <li>Lei nº 10.406/02 – art. 215, §1º, IV</li>
          <li>Código de Normas da CGJ/RJ – Parte Extrajudicial</li>
          <li>Provimento CNJ nº 150/2023</li>
        </ul>
      </section>

      {/* CONTATO WHATSAPP */}
      <div className="whatsapp-contact">
        <p>Para maiores informações, entre em contato:</p>
        <a
          href="https://wa.me/5521991633030"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <img
            src="/src/assets/images/whatsapp.png"
            alt="WhatsApp"
          />
          <span>(21) 99163-3030</span>
        </a>
      </div>
    </>
  );
}
