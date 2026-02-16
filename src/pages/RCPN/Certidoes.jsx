import React, { useState } from "react";

export default function Certidoes() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Certidões de Registro Civil</h1>

      <AnimatedSection title="2ª Via de Certidão">
        <p>
          Para a emissão de segunda via de certidão de nascimento, casamento ou
          óbito, o requerente deverá informar, sempre que possível:
        </p>
        <ul>
          <li>Nome completo do registrado;</li>
          <li>Data do nascimento, casamento ou óbito;</li>
          <li>Livro, folha e número do assento.</li>
        </ul>

        <p>
          Caso o requerente não saiba se o registro pertence a este cartório ou
          não possua os dados do livro, folha e termo, será necessária a
          realização de pesquisa. Nessa hipótese, os emolumentos correspondentes
          à pesquisa serão de responsabilidade do requerente.
        </p>

        <p>
          Quando se tratar de registro lavrado em outra serventia do Estado do
          Rio de Janeiro, o pedido somente será aceito mediante apresentação da
          certidão original ou cópia do registro anterior.
        </p>
      </AnimatedSection>

      <AnimatedSection title="Pesquisa de Certidão e Informação Verbal">
        <p>
          Para localizar uma certidão ou obter informação verbal sobre a
          existência de registro, o requerente poderá:
        </p>
        <ul>
          <li>Comparecer pessoalmente à serventia; ou</li>
          <li>
            Encaminhar solicitação por e-mail, informando os dados disponíveis
            (nome, data aproximada, filiação, livro/folha/termo se houver).
          </li>
        </ul>

        <p>
          Após a confirmação do pagamento dos emolumentos devidos, a resposta
          será encaminhada ao requerente.
        </p>
      </AnimatedSection>

      <AnimatedSection title="Certidões Interligadas">
        <p>
          Visando maior comodidade e acessibilidade ao usuário, é possível
          requerer certidões de nascimento, casamento e óbito de pessoas
          registradas em qualquer cartório de Registro Civil do Estado do Rio de
          Janeiro, conforme o Provimento CGJ-RJ nº 37/2013.
        </p>

        <p>
          O sistema de certidões interligadas também está disponível em diversos
          estados da federação, por meio de convênios interestaduais, permitindo
          maior agilidade e praticidade.
        </p>

        <ul>
          <li>
            <strong>Comodidade:</strong> dispensa deslocamento até o local do
            registro;
          </li>
          <li>
            <strong>Agilidade:</strong> solicitação realizada diretamente no
            cartório de escolha do usuário;
          </li>
          <li>
            <strong>Abrangência:</strong> válido em todo o Estado do RJ e estados
            conveniados.
          </li>
        </ul>

        <p>
          Para informações adicionais, o usuário pode consultar também o portal
          nacional: <strong>registrocivil.org.br</strong>.
        </p>
      </AnimatedSection>

      <AnimatedSection title="Certidão de Inteiro Teor – Quem Pode Requerer">
        <p>
          A certidão de inteiro teor de registro civil poderá ser requerida
          observadas as seguintes regras:
        </p>

        <h4>Dispensam autorização judicial:</h4>
        <ul>
          <li>O próprio registrado, quando maior de 18 anos;</li>
          <li>Os pais, como representantes legais do filho menor;</li>
          <li>Descendentes diretos, em caso de falecimento do registrado;</li>
          <li>
            Procurador, mediante instrumento com firma reconhecida e poderes
            específicos.
          </li>
        </ul>

        <h4>Necessitam de autorização judicial:</h4>
        <ul>
          <li>
            Requerimentos formulados por tutores, curadores ou outros
            representantes legais que não sejam os pais;
          </li>
          <li>Pedidos realizados por terceiros;</li>
          <li>Casos que envolvam dados sensíveis protegidos por lei.</li>
        </ul>

        <p>
          Base legal: art. 6º da Lei nº 8.560/1992.
        </p>
      </AnimatedSection>

      <AnimatedSection title="Tipos de Certidão de Inteiro Teor">
        <h4>Certidão Digitada</h4>
        <p>
          Consiste na transcrição completa do conteúdo do assento de registro
          civil. É utilizada, principalmente, para fins administrativos,
          retificações, averbações e procedimentos cartorários.
        </p>

        <h4>Certidão Reprográfica</h4>
        <p>
          Trata-se da reprodução fiel da página do livro onde consta o registro,
          sendo comumente exigida em processos de naturalização e situações que
          demandam visualização do documento original.
        </p>
      </AnimatedSection>

      <AnimatedSection title="Proteção de Dados e Observações Importantes">
        <p>
          O Registro Civil observa rigorosamente as normas de proteção de dados
          pessoais e sensíveis. Assim:
        </p>

        <ul>
          <li>
            Não constarão informações que indiquem se a pessoa foi concebida
            dentro ou fora do casamento;
          </li>
          <li>
            Não será mencionada a natureza da filiação, o estado civil dos
            genitores ou o cartório do casamento;
          </li>
          <li>
            Em casos de adoção, a certidão de inteiro teor solicitada pelo
            adotado não conterá informações sobre a origem biológica, salvo
            determinação judicial;
          </li>
          <li>
            O fato de o registro ter sido lavrado por mandado judicial não impede
            que o próprio registrado solicite a certidão;
          </li>
          <li>
            Quando solicitada por procurador, é indispensável que a procuração
            contenha poderes específicos e expressos.
          </li>
        </ul>
      </AnimatedSection>

      <AnimatedSection title="Legislação Aplicável">
        <ul>
          <li>Lei nº 6.015/1973 – Lei de Registros Públicos</li>
          <li>Lei nº 8.560/1992</li>
          <li>
            Código de Normas da Corregedoria Geral da Justiça do Estado do Rio de
            Janeiro – Parte Extrajudicial
          </li>
          <li>Provimento CNJ nº 63/2017</li>
          <li>Provimento CNJ nº 149/2023</li>
        </ul>
      </AnimatedSection>
    </div>
  );
}

/* ======================= */
/* COMPONENTE ANIMADO */
/* ======================= */

function AnimatedSection({ title, children }) {
  const [hover, setHover] = useState(false);

  return (
    <section
      style={{
        ...styles.section,
        transform: hover ? "scale(1.02)" : "scale(1)"
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h2 style={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}

/* ======================= */
/* ESTILOS */
/* ======================= */

const styles = {
  page: {
    maxWidth: 1000,
    margin: "0 auto",
    padding: "40px 20px",
    color: "#eaeaea"
  },

  title: {
    color: "rgb(191,167,106)",
    marginBottom: 40,
    textAlign: "center",
    fontSize: 32
  },

  section: {
    background: "#1f2f2b",
    padding: 30,
    borderRadius: 14,
    marginBottom: 30,
    transition: "transform 0.25s ease"
  },

  sectionTitle: {
    color: "rgb(191,167,106)",
    marginBottom: 15,
    fontSize: 22
  },

  subTitle: {
    color: "#d6c28b",
    marginTop: 20,
    marginBottom: 10,
    fontSize: 18
  }
};