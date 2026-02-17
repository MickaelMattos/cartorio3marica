import React from "react";

export default function Casamento() {
  return (
    <>
      <section className="content-section">
        <h2 className="section-title">Documentação Necessária para Habilitação de Casamento</h2>
        
        <h3 className="section-subtitle">Quando Solteiros</h3>
        <ul>
          <li>Certidão de nascimento (em perfeito estado de conservação)</li>
          <li>
            Documento de identidade com foto, CPF e comprovante de residência
            atualizado (até 30 dias) dos noivos (original e cópia)
          </li>
          <li>
            Duas testemunhas maiores de 18 anos, portando RG e CPF (cópia)
          </li>
        </ul>

        <div className="warning-box">
          <p>
            <strong>Importante:</strong> A idade mínima para o casamento é de
            <strong> 18 anos completos</strong>, conforme a Lei nº 13.811/2019.
            Não há mais possibilidade legal de casamento de menores de idade.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h3 className="section-subtitle">Quando um ou Ambos Forem Divorciados</h3>
        <ul>
          <li>
            Certidão de casamento com averbação de divórcio atualizada (até 180
            dias)
          </li>
          <li>
            Documento de identidade com foto, CPF e comprovante de residência
            atualizado (até 30 dias) dos noivos (original e cópia)
          </li>
          <li>
            Duas testemunhas maiores de 18 anos, portando RG e CPF (cópia)
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h3 className="section-subtitle">Quando um ou Ambos Forem Viúvos</h3>
        <ul>
          <li>Certidão de casamento atualizada (até 180 dias)</li>
          <li>
            Certidão de óbito do cônjuge falecido atualizada (até 180 dias)
          </li>
          <li>
            Documento de identidade com foto, CPF e comprovante de residência
            atualizado (até 30 dias) dos noivos (original e cópia)
          </li>
          <li>
            Duas testemunhas maiores de 18 anos, portando RG e CPF (cópia)
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Outras Situações Específicas</h2>
        <div className="info-box">
          <p>
            Para situações específicas, como casamento envolvendo estrangeiros,
            militares ou outros casos excepcionais, é indispensável o
            comparecimento pessoal ao cartório para orientação individualizada,
            conforme a legislação vigente.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Regime de Bens</h2>
        <p>
          No ato da habilitação para o casamento, os noivos deverão escolher o
          regime de bens que regulará o patrimônio do casal.
        </p>

        <h3 className="section-subtitle">Regimes Disponíveis</h3>
        <ul>
          <li>Comunhão Parcial de Bens (regime legal padrão)</li>
          <li>Comunhão Universal de Bens</li>
          <li>Separação Total de Bens</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Separação Obrigatória de Bens</h2>
        <p>
          A separação obrigatória de bens aplica-se <strong>exclusivamente</strong> nos
          seguintes casos:
        </p>
        <ul>
          <li>
            Casamento realizado com inobservância das causas suspensivas
            previstas no art. 1.523 do Código Civil
          </li>
          <li>
            Pessoas que dependam de suprimento judicial para contrair casamento
          </li>
        </ul>

        <div className="highlight-box">
          <p>
            <strong>Atenção:</strong> A regra de separação obrigatória para maiores
            de 70 anos foi declarada <strong>inconstitucional</strong> pelo Supremo
            Tribunal Federal (RE 646.721/RS). Assim, pessoas com 70 anos ou mais
            podem escolher livremente qualquer regime de bens.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Formalização do Regime de Bens</h2>
        <ul>
          <li>
            <strong>Comunhão Parcial de Bens:</strong> formalizada diretamente no
            Registro Civil, sem necessidade de escritura pública
          </li>
          <li>
            <strong>Demais Regimes:</strong> exigem escritura pública de pacto
            antenupcial lavrada em Cartório de Notas, a ser apresentada no
            momento da habilitação
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Processo de Habilitação e Prazos Importantes</h2>
        <ul>
          <li>
            <strong>Validade da habilitação:</strong> 90 dias após a conclusão
          </li>
          <li>
            <strong>Publicação de editais:</strong> prazo de 15 dias, quando não
            dispensada
          </li>
          <li>
            <strong>Celebração da cerimônia:</strong> deve ocorrer dentro do
            prazo de validade da habilitação
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Observações Gerais</h2>
        <ul>
          <li>Todas as certidões devem ser apresentadas em via original</li>
          <li>
            Documentos em língua estrangeira devem ser traduzidos por tradutor
            juramentado
          </li>
          <li>
            O prazo de validade das certidões pode variar conforme normas da
            Corregedoria local
          </li>
          <li>
            Em caso de dúvidas específicas, recomenda-se consultar diretamente o
            cartório
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Base Legal</h2>
        <p>
          Lei nº 6.015/1973 (Lei de Registros Públicos), Código Civil Brasileiro,
          Lei nº 13.811/2019, Provimentos do Conselho Nacional de Justiça e Código
          de Normas da Corregedoria Geral da Justiça do Estado do Rio de Janeiro.
        </p>
      </section>
    </>
  );
}
