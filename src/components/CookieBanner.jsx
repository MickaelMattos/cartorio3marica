import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/cookie-banner.css";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function acceptCookies() {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
      <div className="cookie-content">
        <p>
          Utilizamos cookies essenciais para garantir o correto funcionamento
          deste site e melhorar sua experiência, em conformidade com a
          <strong> Lei Geral de Proteção de Dados (LGPD)</strong>.
          Ao continuar navegando, você concorda com o uso de cookies.
        </p>

        <div className="cookie-actions">
          <button onClick={acceptCookies}>
            Aceitar
          </button>

          {/* Link ao invés de <a href> para não recarregar o SPA */}
          <Link to="/lgpd">
            Saiba mais
          </Link>
        </div>
      </div>
    </div>
  );
}
