import React from "react";

export default function Inventario() {
  return (
    <>
      <section className="content-section">
        <h2 className="section-title">O que é Inventário Extrajudicial</h2>
        <p>
          O inventário extrajudicial é o procedimento realizado <strong>diretamente 
          em cartório</strong>, sem necessidade de processo judicial, para formalizar 
          a partilha de bens deixados por pessoa falecida.
        </p>
        <p>
          Introduzido pela Lei nº 11.441/2007, este procedimento torna a sucessão 
          mais ágil, econômica e menos burocrática, desde que preenchidos os requisitos legais.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Requisitos para Inventário em Cartório</h2>
        <div className="highlight-box">
          <p><strong>Condições obrigatórias:</strong></p>
          <ul>
            <li>Todos os herdeiros devem ser <strong>maiores e capazes</strong></li>
            <li>Deve haver <strong>consenso</strong> entre todos os herdeiros quanto à partilha</li>
            <li>Não pode existir <strong>testamento</strong></li>
            <li>Obrigatória a <strong>assistência de advogado</strong> ou defensor público</li>
          </ul>
        </div>
        <div className="warning-box">
          <p>
            <strong>Atenção:</strong> Se houver testamento, herdeiros menores ou incapazes, 
            ou discordância entre herdeiros, o inventário deve ser <strong>judicial</strong>.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Vantagens do Inventário Extrajudicial</h2>
        <ul>
          <li><strong>Rapidez:</strong> Conclusão em semanas, ao invés de meses ou anos</li>
          <li><strong>Menor custo:</strong> Dispensam-se custas judiciais</li>
          <li><strong>Menos burocracia:</strong> Procedimento simplificado</li>
          <li><strong>Flexibilidade:</strong> Horários mais amplos para atendimento</li>
          <li><strong>Privacidade:</strong> Ato realizado em cartório, sem publicidade judicial</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Documentação Necessária</h2>
        
        <h3 className="section-subtitle">Do Falecido</h3>
        <ul>
          <li>Certidão de óbito (atualizada)</li>
          <li>Certidão de casamento com averbação do óbito (se casado)</li>
          <li>Certidão de nascimento (se solteiro)</li>
          <li>RG e CPF</li>
        </ul>

        <h3 className="section-subtitle">Dos Herdeiros</h3>
        <ul>
          <li>RG e CPF (original e cópia)</li>
          <li>Comprovante de residência</li>
          <li>Certidão de casamento ou nascimento</li>
          <li>Certidão de nascimento dos filhos</li>
        </ul>

        <h3 className="section-subtitle">Dos Bens</h3>
        <ul>
          <li><strong>Imóveis:</strong> Matrícula atualizada, IPTU, certidões negativas</li>
          <li><strong>Veículos:</strong> Documento do veículo (CRLV)</li>
          <li><strong>Valores:</strong> Extratos bancários, comprovantes de investimentos</li>
          <li><strong>Outros bens:</strong> Documentos comprobatórios</li>
        </ul>

        <h3 className="section-subtitle">Certidões Negativas</h3>
        <ul>
          <li>Certidão negativa de tributos federais</li>
          <li>Certidão negativa de tributos estaduais</li>
          <li>Certidão negativa de tributos municipais</li>
          <li>Certidão de inexistência de testamento (Colégio Notarial do Brasil)</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Procedimento do Inventário Extrajudicial</h2>
        <ol>
          <li><strong>Consulta prévia:</strong> Verificação de requisitos e documentação</li>
          <li><strong>Elaboração da escritura:</strong> Advogado e tabelião elaboram minuta</li>
          <li><strong>Cálculo de tributos:</strong> Apuração de ITCMD (Imposto de Transmissão)</li>
          <li><strong>Pagamento do ITCMD:</strong> Recolhimento do imposto estadual</li>
          <li><strong>Lavratura da escritura:</strong> Comparecimento de todos os herdeiros ao cartório</li>
          <li><strong>Assinaturas:</strong> Herdeiros, cônjuge sobrevivente, advogado e tabelião</li>
          <li><strong>Registro:</strong> Averbação no Registro de Imóveis (quando há imóveis)</li>
        </ol>
      </section>

      <section className="content-section">
        <h2 className="section-title">Partilha dos Bens</h2>
        <p>
          A partilha pode ser feita de diversas formas, conforme acordo entre os herdeiros:
        </p>
        <ul>
          <li><strong>Adjudicação:</strong> Um herdeiro fica com determinado bem</li>
          <li><strong>Partilha em condomínio:</strong> Bens ficam em propriedade comum</li>
          <li><strong>Venda e divisão do valor:</strong> Bens são vendidos e valor dividido</li>
          <li><strong>Mista:</strong> Combinação das formas anteriores</li>
        </ul>

        <div className="info-box">
          <p>
            É importante que a partilha respeite os direitos sucessórios de cada herdeiro 
            conforme a lei (meação, legítima, etc.).
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">ITCMD - Imposto de Transmissão</h2>
        <p>
          O <strong>ITCMD</strong> (Imposto sobre Transmissão Causa Mortis e Doação) é 
          tributo estadual devido na transmissão de bens por herança.
        </p>
        <p><strong>Características:</strong></p>
        <ul>
          <li>Alíquota varia conforme o estado (geralmente entre 4% e 8%)</li>
          <li>Calculado sobre o valor venal dos bens</li>
          <li>Deve ser pago antes da lavratura da escritura</li>
          <li>Isenções em alguns estados para valores pequenos</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Papel do Advogado</h2>
        <p>
          A presença de advogado é <strong>obrigatória</strong> no inventário extrajudicial.
        </p>
        <p><strong>Funções:</strong></p>
        <ul>
          <li>Orientar os herdeiros sobre direitos e deveres</li>
          <li>Elaborar minuta da escritura</li>
          <li>Acompanhar o procedimento no cartório</li>
          <li>Auxiliar na regularização documental</li>
        </ul>

        <div className="success-box">
          <p>
            <strong>Gratuidade:</strong> Herdeiros que não possam arcar com custos de 
            advogado podem solicitar assistência da Defensoria Pública.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Prazo e Custos</h2>
        
        <h3 className="section-subtitle">Prazo</h3>
        <p>
          O inventário extrajudicial costuma ser concluído em <strong>30 a 90 dias</strong>, 
          dependendo da complexidade e da rapidez na obtenção de documentos.
        </p>

        <h3 className="section-subtitle">Custos</h3>
        <ul>
          <li>Emolumentos cartorários (conforme tabela estadual)</li>
          <li>ITCMD (imposto estadual)</li>
          <li>Honorários advocatícios</li>
          <li>Certidões e documentos</li>
          <li>Registro de imóveis (quando aplicável)</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Inventário Negativo (Sem Bens)</h2>
        <p>
          Quando o falecido não deixou bens, mas é necessário formalizar essa situação 
          (para fins previdenciários, por exemplo), lavra-se <strong>escritura declaratória 
          de ausência de bens</strong>.
        </p>
        <p><strong>Finalidade:</strong></p>
        <ul>
          <li>Comprovar que não há bens a inventariar</li>
          <li>Habilitar dependentes em pensão por morte</li>
          <li>Regularizar situação cadastral</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Casos Especiais</h2>

        <h3 className="section-subtitle">Cônjuge Sobrevivente</h3>
        <p>
          O cônjuge sobrevivente tem direito à meação (metade dos bens do casal, conforme 
          regime de bens) e pode ser herdeiro, conforme o caso.
        </p>

        <h3 className="section-subtitle">Companheiro(a) em União Estável</h3>
        <p>
          O companheiro tem direitos sucessórios equiparados aos do cônjuge, devendo 
          ser incluído na partilha.
        </p>

        <h3 className="section-subtitle">Herdeiros no Exterior</h3>
        <p>
          Herdeiros residentes no exterior podem outorgar procuração com poderes específicos 
          para o inventário, com reconhecimento consular ou apostilamento.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Quando NÃO é Possível Fazer em Cartório</h2>
        <div className="warning-box">
          <p><strong>O inventário deve ser judicial quando:</strong></p>
          <ul>
            <li>Houver herdeiros menores de idade ou incapazes</li>
            <li>Existir testamento (mesmo que não haja conflito)</li>
            <li>Houver discordância entre os herdeiros quanto à partilha</li>
            <li>Algum herdeiro não puder ou não quiser comparecer pessoalmente 
                (sem procuração adequada)</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Base Legal</h2>
        <p>
          Lei nº 11.441/2007, Código Civil Brasileiro (arts. 1.784 a 2.027), Código de 
          Processo Civil, Resolução CNJ nº 35/2007, Lei nº 8.935/1994, Código de Normas 
          da Corregedoria Geral da Justiça.
        </p>
      </section>

      <div className="whatsapp-contact">
        <p>Para iniciar inventário ou esclarecer dúvidas, entre em contato:</p>
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
