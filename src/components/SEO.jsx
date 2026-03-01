import { Helmet } from "react-helmet-async";

/**
 * SEO — Componente reutilizável de meta tags
 *
 * Uso em qualquer página:
 * <SEO title="Nascimento" description="Saiba como registrar..." path="/rcpn/nascimento" />
 *
 * Props:
 * - title:       título da página (concatenado com nome do cartório)
 * - description: descrição curta (máx. 160 caracteres)
 * - path:        caminho da URL para a tag canonical (ex: "/rcpn/nascimento")
 * - noIndex:     true para páginas internas que não devem ser indexadas
 */

const SITE_NAME = "Cartório do 3º Distrito de Maricá-RJ";
const BASE_URL  = "https://cartorio3marica.vercel.app"; // sem www — igual ao robots.txt e sitemap.xml
const DEFAULT_DESCRIPTION =
  "Cartório do 3º Distrito de Maricá-RJ — Registro Civil, Tabelionato de Notas e Carteira de Identidade. Atendimento em Inoã, Maricá/RJ.";

export default function SEO({ title, description = DEFAULT_DESCRIPTION, path = "", noIndex = false }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonical = `${BASE_URL}${path}`;

  return (
    <Helmet>
      {/* Básico */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Indexação — noIndex=true bloqueia páginas internas */}
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <meta name="language" content="pt-BR" />

      {/* Open Graph — WhatsApp, Facebook, LinkedIn */}
      <meta property="og:type"        content="website" />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url"         content={canonical} />
      <meta property="og:image"       content={`${BASE_URL}/logo.png`} />

      {/* Twitter Card */}
      <meta name="twitter:card"        content="summary" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={`${BASE_URL}/logo.png`} />
    </Helmet>
  );
}
