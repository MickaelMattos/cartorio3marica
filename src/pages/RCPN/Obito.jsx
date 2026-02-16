import React, { useState } from "react";

export default function Obito() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Registro de Óbito</h1>

      <AnimatedSection title="Gratuidade">
        <p>
          O registro de óbito, bem como a primeira certidão, são
          <strong> GRATUITOS</strong>, conforme a legislação vigente.
        </p>
      </AnimatedSection>

      <AnimatedSection title="Documentação Obrigatória">
        <p>
          O registro de óbito somente pode ser realizado mediante a apresentação
          da <strong>Declaração de Óbito</strong>, fornecida por hospital ou por
          médico habilitado, nos casos de óbito ocorrido em domicílio.
        </p>

        <p>
          A Declaração de Óbito deve ser preenchida pelo médico que atestou a
          morte. Havendo erro no preenchimento de qualquer campo, a correção deve
          ser realizada na lateral da própria declaração, com indicação do item
          incorreto, inserção da informação correta, assinatura e carimbo do
          médico responsável.
        </p>
      </AnimatedSection>

      <AnimatedSection title="Competência Territorial">
        <p>
          A competência para o registro de óbito é da Serventia de Registro Civil:
        </p>

        <ul>
          <li>Do local do falecimento; ou</li>
          <li>
            Do local de residência do falecido, quando o óbito ocorrer em local
            diverso do domicílio.
          </li>
        </ul>

        <p>
          Esta regra foi alterada pela Lei nº 13.484/2017, ampliando a
          possibilidade de escolha do local do registro.
        </p>
      </AnimatedSection>

      <AnimatedSection title="Documentação Necessária">
        <h3 style={styles.subTitle}>Documentos Obrigatórios</h3>
        <ul>
          <li>Declaração de Óbito;</li>
          <li>
            Documento de identificação do declarante (maior de 18 anos);
          </li>
          <li>
            Pelo menos um documento de identificação do falecido.
          </li>
        </ul>

        <h3 style={styles.subTitle}>Documentos Recomendados do Falecido</h3>
        <p>
          Quanto maior o número de documentos apresentados, maior a precisão das
          informações constantes do registro:
        </p>

        <ul>
          <li>Certidão de nascimento;</li>
          <li>
            Certidão de casamento (necessária para constar o nome do cônjuge);
          </li>
          <li>Cédula de identidade (RG);</li>
          <li>Carteira Nacional de Habilitação (CNH);</li>
          <li>CPF;</li>
          <li>Título de eleitor;</li>
          <li>Cartão de inscrição no INSS.</li>
        </ul>
      </AnimatedSection>

      <AnimatedSection title="Declarante do Óbito – Ordem de Preferência Legal">
        <p>
          O artigo 79 da Lei nº 6.015/1973 estabelece a seguinte ordem de
          preferência para a declaração do óbito:
        </p>

        <h3 style={styles.subTitle}>1ª Ordem de Preferência</h3>
        <ul>
          <li>
            Chefe de família, em relação à mulher, filhos, hóspedes, agregados e
            fâmulos;
          </li>
          <li>Viúva, em relação ao marido e demais pessoas da casa.</li>
        </ul>

        <h3 style={styles.subTitle}>2ª Ordem de Preferência</h3>
        <ul>
          <li>Filho, em relação ao pai ou à mãe;</li>
          <li>
            Irmão, em relação aos irmãos e demais pessoas da casa;
          </li>
          <li>Parente mais próximo, maior de idade e presente.</li>
        </ul>

        <h3 style={styles.subTitle}>3ª Ordem de Preferência</h3>
        <ul>
          <li>
            Administrador, diretor ou gerente de estabelecimento público ou
            particular onde ocorreu o falecimento, salvo se presente parente
            das ordens anteriores.
          </li>
        </ul>

        <h3 style={styles.subTitle}>4ª Ordem de Preferência</h3>
        <ul>
          <li>Pessoa que assistiu aos últimos momentos do falecido;</li>
          <li>Médico;</li>
          <li>Sacerdote;</li>
          <li>Vizinho que teve notícia do falecimento.</li>
        </ul>

        <h3 style={styles.subTitle}>5ª Ordem de Preferência</h3>
        <ul>
          <li>
            Autoridade policial, nos casos de pessoas encontradas mortas.
          </li>
        </ul>
      </AnimatedSection>

      <AnimatedSection title="Observações Importantes">
        <ul>
          <li>
            O declarante deve ser maior de 18 anos e portar documento de
            identificação;
          </li>
          <li>
            Devem ser informados dados como estado civil, nome do cônjuge, se
            deixou filhos, bens, testamento e se era eleitor;
          </li>
          <li>
            A declaração pode ser feita por preposto, mediante autorização
            escrita do declarante;
          </li>
          <li>É obrigatória a indicação do local de sepultamento;</li>
          <li>
            O rol legal é exemplificativo, não impedindo que outras pessoas
            façam a declaração por interesse público.
          </li>
        </ul>
      </AnimatedSection>

      <AnimatedSection title="Cremação – Requisitos Legais">
        <p>
          Para a realização da cremação, devem ser atendidos os seguintes
          requisitos legais:
        </p>

        <ul>
          <li>
            Manifestação de vontade do falecido, expressa em vida, ou interesse
            da saúde pública;
          </li>
          <li>
            Atestado de óbito assinado por dois médicos ou por um médico legista;
          </li>
          <li>
            Comprovação de morte não violenta (em caso de morte violenta, é
            necessária autorização judicial);
          </li>
          <li>Prazo mínimo de 24 horas após o falecimento.</li>
        </ul>

        <p>
          <strong>Manifestação de Vontade:</strong> Embora a lei não exija forma
          específica, recomenda-se declaração escrita e registrada em cartório.
          Na ausência, os tribunais têm aceitado declarações de familiares que
          comprovem a vontade do falecido.
        </p>
      </AnimatedSection>

      <AnimatedSection title="Plantão de Finais de Semana e Feriados">
        <p>
          O Registro Civil funciona em regime de plantão aos sábados, domingos e
          feriados, no horário de <strong>09h às 12h</strong>, exclusivamente
          para a lavratura de registros de óbito.
        </p>
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
