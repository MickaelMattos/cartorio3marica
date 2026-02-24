import React, { useContext } from "react";
import { Link } from "react-router-dom";
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

        {/* SERVIÇOS */}
        <div className="footer-column">
          <h4>Serviços</h4>
          <ul>
            <li><Link to="/rcpn">Registro Civil</Link></li>
            <li><Link to="/notas">Tabelionato de Notas</Link></li>
            <li><Link to="/identidade">Carteira de Identidade</Link></li>
          </ul>
        </div>

        {/* INSTITUCIONAL — LGPD e Links Úteis aqui */}
        <div className="footer-column">
          <h4>Institucional</h4>
          <ul>
            <li><Link to="/sobre">Sobre o Cartório</Link></li>
            <li><Link to="/contato">Contato</Link></li>
            <li><Link to="/lgpd">LGPD</Link></li>
            <li><Link to="/links-uteis">Links Úteis</Link></li>
          </ul>
        </div>

        {/* CONTATO */}
        <div className="footer-column">
          <h4>Contato</h4>
          <p>
            Avenida Gilberto de Carvalho, Lote C-25<br />
            Inoã — Maricá/RJ<br />
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

      </div>

      {/* BARRA FINAL — copyright + ícones de segurança */}
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Cartório do 3º Distrito de Maricá-RJ — Todos os direitos reservados
        </span>

        <div className="footer-bottom-security">
          <div>
            <img src={sslIcon} alt="Conexão segura SSL" />
            <span>HTTPS</span>
          </div>
          <div>
            <img src={shieldIcon} alt="Proteção de dados LGPD" />
            <span>LGPD</span>
          </div>
          <div>
            <img src={googleIcon} alt="Verificado pelo Google" />
            <span>Google</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
