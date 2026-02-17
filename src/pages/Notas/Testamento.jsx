import React from "react";

export default function Testamento() {
  return (
    <>
      <section className="content-section">
        <h2 className="section-title">O que é Testamento</h2>
        <p>
          O testamento é o <strong>ato jurídico personalíssimo</strong> pelo qual uma 
          pessoa, chamada de <strong>testador</strong>, dispõe sobre o destino de seus 
          bens para depois de sua morte e pode fazer outras declarações de última vontade.
        </p>
        <p>
          É o instrumento legal que permite organizar a sucessão patrimonial, garantindo 
          que a vontade do testador seja respeitada, dentro dos limites estabelecidos pela lei.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Características do Testamento</h2>
        <ul>
          <li><strong>Unilateral:</strong> Expressa a vontade de apenas uma pessoa</li>
          <li><strong>Personalíssimo:</strong> Não pode ser feito por procurador</li>
          <li><strong>Revogável:</strong> Pode ser alterado ou revogado a qualquer tempo</li>
          <li><strong>Solene:</strong> Exige forma prescrita em lei</li>
          <li><strong>Gratuito:</strong> Não admite condições que beneficiem o testador</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Quem Pode Testar</h2>
        <p>
          Pode fazer testamento qualquer pessoa maior de <strong>16 anos completos</strong>, 
          desde que esteja em pleno gozo de suas faculdades mentais.
        </p>
        
        <div className="warning-box">
          <p>
            <strong>Impedimentos:</strong> Não podem testar pessoas absolutamente incapazes 
            (menores de 16 anos não emancipados, pessoas sem discernimento).
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Tipos de Testamento</h2>

        <h3 className="section-subtitle">1. Testamento Público</h3>
        <p>
          É lavrado por <strong>tabelião em Cartório de Notas</strong>, na presença de 
          duas testemunhas.
        </p>
        <p><strong>Características:</strong></p>
        <ul>
          <li>Maior segurança jurídica</li>
          <li>Orientação técnica do tabelião</li>
          <li>Dificulta questionamentos sobre validade</li>
          <li>Registro centralizado (facilitando localização futura)</li>
          <li>Ideal para pessoas com patrimônio significativo</li>
        </ul>
        <p><strong>Procedimento:</strong></p>
        <ol>
          <li>Testador comparece ao cartório com duas testemunhas</li>
          <li>Declara sua última vontade ao tabelião</li>
          <li>Tabelião redige o testamento</li>
          <li>Leitura em voz alta na presença das testemunhas</li>
          <li>Assinaturas do testador, testemunhas e tabelião</li>
          <li>Registro em livro próprio do cartório</li>
        </ol>

        <h3 className="section-subtitle">2. Testamento Cerrado (Secreto)</h3>
        <p>
          O testador escreve o testamento (ou manda escrever) e entrega ao tabelião em 
          envelope lacrado, na presença de duas testemunhas.
        </p>
        <p><strong>Características:</strong></p>
        <ul>
          <li>Mantém sigilo total sobre o conteúdo</li>
          <li>Ninguém conhece o conteúdo antes da morte do testador</li>
          <li>Menos comum atualmente</li>
        </ul>

        <h3 className="section-subtitle">3. Testamento Particular</h3>
        <p>
          Escrito e assinado pelo próprio testador, na presença de três testemunhas.
        </p>
        <p><strong>Características:</strong></p>
        <ul>
          <li>Mais simples e rápido</li>
          <li>Não exige cartório</li>
          <li>Maior risco de questionamento judicial</li>
          <li>Exige confirmação judicial após o falecimento</li>
        </ul>

        <div className="highlight-box">
          <p>
            <strong>Recomendação:</strong> O testamento público é a forma mais segura 
            e recomendada, pela orientação técnica e garantia de validade.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">O que Pode Ser Disposto em Testamento</h2>

        <h3 className="section-subtitle">Disposições Patrimoniais</h3>
        <ul>
          <li>Destinação da parte disponível dos bens (até 50% do patrimônio)</li>
          <li>Nomeação de herdeiros ou legatários</li>
          <li>Doações de bens específicos</li>
          <li>Condições e encargos aos beneficiários</li>
        </ul>

        <h3 className="section-subtitle">Disposições Não Patrimoniais</h3>
        <ul>
          <li>Reconhecimento de filhos</li>
          <li>Nomeação de tutor para filhos menores</li>
          <li>Deserdação de herdeiros (com justa causa)</li>
          <li>Determinações sobre funeral e sepultamento</li>
          <li>Perdão a ofensores</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Legítima e Parte Disponível</h2>
        <p>
          A lei brasileira protege <strong>50% do patrimônio</strong> para os herdeiros 
          necessários (descendentes, ascendentes e cônjuge), chamada de <strong>legítima</strong>.
        </p>
        <p>
          O testador pode dispor livremente apenas da <strong>parte disponível</strong> (outros 50%).
        </p>

        <div className="info-box">
          <p>
            <strong>Exemplo:</strong> Se o patrimônio vale R$ 1.000.000 e há herdeiros 
            necessários, somente R$ 500.000 podem ser livremente destinados no testamento.
          </p>
        </div>

        <p><strong>Se não houver herdeiros necessários:</strong></p>
        <p>
          O testador pode dispor de <strong>100% do patrimônio</strong> livremente.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Herdeiros Necessários</h2>
        <p>São considerados herdeiros necessários, nesta ordem:</p>
        <ol>
          <li><strong>Descendentes</strong> (filhos, netos, bisnetos)</li>
          <li><strong>Ascendentes</strong> (pais, avós) - na falta de descendentes</li>
          <li><strong>Cônjuge ou companheiro</strong> - conforme regime de bens</li>
        </ol>
        <p>
          Herdeiros necessários têm direito garantido à legítima, salvo em casos de 
          deserdação fundamentada.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Deserdação</h2>
        <p>
          É a <strong>exclusão de herdeiro necessário</strong> por justa causa prevista em lei.
        </p>
        <p><strong>Causas legais de deserdação:</strong></p>
        <ul>
          <li>Ofensa física grave</li>
          <li>Injúria grave</li>
          <li>Relações ilícitas com madrasta ou padrasto</li>
          <li>Desamparo em alienação mental ou grave enfermidade</li>
        </ul>
        <div className="warning-box">
          <p>
            <strong>Importante:</strong> A deserdação deve ser motivada e comprovada, 
            podendo ser contestada judicialmente pelos herdeiros.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Cláusulas Comuns em Testamentos</h2>

        <h3 className="section-subtitle">Cláusula de Inalienabilidade</h3>
        <p>Impede que o bem seja vendido ou transferido pelo herdeiro.</p>

        <h3 className="section-subtitle">Cláusula de Impenhorabilidade</h3>
        <p>Protege o bem contra penhoras em execuções judiciais.</p>

        <h3 className="section-subtitle">Cláusula de Incomunicabilidade</h3>
        <p>Impede que o bem se comunique com o cônjuge do herdeiro.</p>

        <p>
          Essas cláusulas devem ter <strong>justa causa</strong> para serem válidas.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Revogação e Alteração do Testamento</h2>
        <p>
          O testamento pode ser <strong>revogado ou alterado</strong> a qualquer momento, 
          enquanto o testador for vivo e capaz.
        </p>
        <p><strong>Formas de revogação:</strong></p>
        <ul>
          <li><strong>Expressa:</strong> Novo testamento declara revogação do anterior</li>
          <li><strong>Tácita:</strong> Disposições do novo testamento são incompatíveis 
              com o anterior</li>
          <li><strong>Por rompimento:</strong> Testamento cerrado pode ser rompido</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Testamenteiro</h2>
        <p>
          É a pessoa nomeada pelo testador para <strong>cumprir suas disposições</strong> 
          após a morte.
        </p>
        <p><strong>Funções do testamenteiro:</strong></p>
        <ul>
          <li>Zelar pelo cumprimento do testamento</li>
          <li>Administrar bens até a partilha</li>
          <li>Pagar dívidas e legados</li>
          <li>Prestar contas aos herdeiros</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Documentos Necessários para Testamento Público</h2>
        <ul>
          <li>RG e CPF do testador (original)</li>
          <li>Comprovante de residência</li>
          <li>Certidão de casamento ou nascimento</li>
          <li>Documentos dos bens (opcional, para consulta)</li>
          <li>Duas testemunhas maiores de 18 anos com RG</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Custos</h2>
        <p>
          O valor para lavratura de testamento público varia conforme a tabela de 
          emolumentos de cada estado.
        </p>
        <p>
          Geralmente, o custo é fixo ou baseado em faixas de valor do patrimônio.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Registro Central de Testamentos</h2>
        <p>
          Existe um <strong>Registro Central de Testamentos</strong> administrado pelo 
          Colégio Notarial do Brasil, que permite localizar testamentos lavrados em 
          qualquer cartório do país.
        </p>
        <p>
          Após o falecimento, basta consultar este registro com a certidão de óbito.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Vantagens do Testamento</h2>
        <ul>
          <li>Garante que sua vontade seja respeitada</li>
          <li>Evita conflitos entre herdeiros</li>
          <li>Permite beneficiar pessoas fora da linha sucessória</li>
          <li>Agiliza o processo de inventário</li>
          <li>Possibilita fazer doações com encargos</li>
          <li>Permite nomear tutor para filhos menores</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Mitos Sobre Testamento</h2>

        <div className="highlight-box">
          <p><strong>Mito 1:</strong> "Testamento é só para pessoas muito ricas"</p>
          <p><strong>Verdade:</strong> Qualquer pessoa pode e deve fazer testamento 
             para garantir suas vontades.</p>
        </div>

        <div className="highlight-box">
          <p><strong>Mito 2:</strong> "Testamento pode deserdar todos os filhos"</p>
          <p><strong>Verdade:</strong> A legítima (50%) é protegida por lei. Deserdação 
             exige justa causa.</p>
        </div>

        <div className="highlight-box">
          <p><strong>Mito 3:</strong> "Fazer testamento atrai má sorte"</p>
          <p><strong>Verdade:</strong> É um ato de responsabilidade e planejamento, 
             evitando conflitos futuros.</p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Base Legal</h2>
        <p>
          Código Civil Brasileiro (arts. 1.857 a 2.027), Lei nº 8.935/1994, 
          Código de Normas da Corregedoria Geral da Justiça, Provimentos do CNJ.
        </p>
      </section>

      <div className="whatsapp-contact">
        <p>Para fazer seu testamento ou esclarecer dúvidas, entre em contato:</p>
        <a
          href="https://wa.me/5521991633030"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <img src="/src/assets/images/whatsapp.png" alt="WhatsApp" />
          <span>(21) 99163-3030</span>
        </a>
      </div>
    </>
  );
}
