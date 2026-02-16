import React, { useEffect, useState } from "react";
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
    <div className="cookie-banner">
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

          <a href="/lgpd">
            Saiba mais
          </a>
        </div>
      </div>
    </div>
  );
}
