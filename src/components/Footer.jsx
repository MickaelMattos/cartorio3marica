import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/footer.css";
import sslIcon from "../assets/images/ssl.png";
import shieldIcon from "../assets/images/shield.png";
import googleIcon from "../assets/images/google.png";

export default function Footer() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* INSTITUCIONAL */}
        <div className="footer-column">
          <h3>Cartório do 3º Distrito de Maricá-RJ</h3>
          <p>
            Registro Civil das Pessoas Naturais e Tabelionato de Notas.
            Atuação pautada na legalidade, segurança jurídica e proteção
            de dados pessoais.
          </p>
        </div>

        {/* LINKS RÁPIDOS */}
        <div className="footer-column">
          <h4>Serviços</h4>
          <ul>
            <li><a href="/rcpn">Registro Civil</a></li>
            <li><a href="/notas">Tabelionato de Notas</a></li>
            <li><a href="/identidade">Carteira de Identidade</a></li>
            <li><a href="/links-uteis">Links Úteis</a></li>
            <li><a href="/lgpd">LGPD</a></li>
          </ul>
        </div>

        {/* CONTATO */}
        <div className="footer-column">
          <h4>Contato</h4>
          <p>
            Avenida Gilberto de Carvalho, Lote C-25<br />
            Inoã – Maricá/RJ<br />
            CEP: 24944-000
          </p>
          <p>
            (21) 2636-3910<br />
            (21) 2636-4287
          </p>
          <p>
            cartorio3marica@gmail.com
          </p>
        </div>

        {/* SEGURANÇA */}
        <div className="footer-column">
          <h4>Segurança do Site</h4>

          <div className="security-icons">
            <div>
              <img src={sslIcon} alt="Site com conexão segura SSL" />
              <span>Conexão Segura (HTTPS)</span>
            </div>

            <div>
              <img src={shieldIcon} alt="Proteção de dados" />
              <span>Proteção de Dados – LGPD</span>
            </div>

            <div>
              <img src={googleIcon} alt="Google Safe Browsing" />
              <span>Verificado pelo Google</span>
            </div>
          </div>
        </div>

      </div>

      {/* BARRA FINAL */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Cartório do 3º Distrito de Maricá-RJ — Todos os direitos reservados
      </div>

    </footer>
  );
}
