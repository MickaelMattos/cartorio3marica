import React, { useState, useEffect, useCallback } from "react";

/* ================================================================
   CONFIGURAÇÕES — EDITE APENAS ESTE BLOCO
   ================================================================ */

// 1. Cole aqui a URL gerada pelo Google Apps Script (veja INSTRUCOES.md)
const SHEETS_API_URL = "COLE_AQUI_A_URL_DO_APPS_SCRIPT";

// 2. Defina sua senha de acesso
const SENHA_ACESSO = "cartorio3marica";

// 3. Cole aqui sua chave pública do reCAPTCHA v2
//    Obtenha em: https://www.google.com/recaptcha/admin/create
const RECAPTCHA_SITE_KEY = "6LdblHEsAAAAABSm_HvMkV-GU0z2Ef-g7i3dDW9M";

/* ================================================================ */

const MESES = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
const MESES_FULL = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho",
                    "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

function fmt(valor) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency", currency: "BRL", maximumFractionDigits: 2
  }).format(valor || 0);
}

/* ── GRÁFICO DE BARRAS SVG ── */
function GraficoBarras({ dados, ano }) {
  if (!dados || dados.length === 0) return null;
  const max = Math.max(...dados.map(d => d.total), 1);
  const H = 180;

  return (
    <div style={{ overflowX: "auto" }}>
      <svg
        viewBox={`0 0 ${dados.length * 52} ${H + 48}`}
        style={{ width: "100%", minWidth: `${dados.length * 52}px`, display: "block" }}
      >
        {/* Linhas de grade */}
        {[0.25, 0.5, 0.75, 1].map(p => (
          <line key={p}
            x1="0" y1={H - H * p}
            x2={dados.length * 52} y2={H - H * p}
            stroke="rgba(191,167,106,0.12)" strokeWidth="1" strokeDasharray="4,4"
          />
        ))}
        {/* Barras */}
        {dados.map((d, i) => {
          const h = Math.max((d.total / max) * H, 2);
          const x = i * 52 + 8;
          const y = H - h;
          return (
            <g key={i}>
              {/* Barra RCPN */}
              <rect x={x} y={H - (d.rcpn / max) * H} width="10"
                height={Math.max((d.rcpn / max) * H, 1)}
                fill="rgba(191,167,106,0.7)" rx="2"
              />
              {/* Barra Notas */}
              <rect x={x + 12} y={H - (d.notas / max) * H} width="10"
                height={Math.max((d.notas / max) * H, 1)}
                fill="rgba(191,167,106,1)" rx="2"
              />
              {/* Barra Identidade */}
              <rect x={x + 24} y={H - (d.identidade / max) * H} width="10"
                height={Math.max((d.identidade / max) * H, 1)}
                fill="rgba(191,167,106,0.4)" rx="2"
              />
              {/* Label do mês */}
              <text x={x + 17} y={H + 16}
                textAnchor="middle" fontSize="11"
                fill="var(--text-muted, #888)"
              >
                {MESES[d.mes - 1]}
              </text>
            </g>
          );
        })}
      </svg>
      {/* Legenda */}
      <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "8px", flexWrap: "wrap" }}>
        {[
          { cor: "rgba(191,167,106,0.7)", label: "RCPN" },
          { cor: "rgba(191,167,106,1)",   label: "Notas" },
          { cor: "rgba(191,167,106,0.4)", label: "Identidade" },
        ].map(l => (
          <div key={l.label} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--text-muted, #888)" }}>
            <div style={{ width: 10, height: 10, background: l.cor, borderRadius: 2 }} />
            {l.label}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── GRÁFICO ROSCA SVG ── */
function GraficoPizza({ rcpn, notas, identidade }) {
  const total = (rcpn || 0) + (notas || 0) + (identidade || 0);
  if (total === 0) return <div style={{ textAlign: "center", color: "var(--text-muted)" }}>Sem dados</div>;

  const setores = [
    { valor: rcpn,       cor: "rgba(191,167,106,0.9)", label: "RCPN" },
    { valor: notas,      cor: "rgba(191,167,106,0.55)", label: "Notas" },
    { valor: identidade, cor: "rgba(191,167,106,0.3)", label: "Identidade" },
  ];

  let angulo = -Math.PI / 2;
  const cx = 80, cy = 80, r = 60, ir = 36;

  const arcos = setores.map(s => {
    const pct = s.valor / total;
    const ang = pct * 2 * Math.PI;
    const x1 = cx + r * Math.cos(angulo);
    const y1 = cy + r * Math.sin(angulo);
    angulo += ang;
    const x2 = cx + r * Math.cos(angulo);
    const y2 = cy + r * Math.sin(angulo);
    const xi1 = cx + ir * Math.cos(angulo - ang);
    const yi1 = cy + ir * Math.sin(angulo - ang);
    const xi2 = cx + ir * Math.cos(angulo);
    const yi2 = cy + ir * Math.sin(angulo);
    const large = ang > Math.PI ? 1 : 0;
    return {
      ...s, pct,
      d: `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} L ${xi2} ${yi2} A ${ir} ${ir} 0 ${large} 0 ${xi1} ${yi1} Z`
    };
  });

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap", justifyContent: "center" }}>
      <svg viewBox="0 0 160 160" style={{ width: 140, flexShrink: 0 }}>
        {arcos.map((a, i) => (
          <path key={i} d={a.d} fill={a.cor} stroke="var(--bg-card, #fff)" strokeWidth="2" />
        ))}
        <text x="80" y="76" textAnchor="middle" fontSize="11" fill="var(--text-muted, #888)">Total</text>
        <text x="80" y="90" textAnchor="middle" fontSize="9" fill="var(--accent, #bfa76a)" fontWeight="600">
          {fmt(total)}
        </text>
      </svg>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {arcos.map((a, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px" }}>
            <div style={{ width: 12, height: 12, background: a.cor, borderRadius: 3, flexShrink: 0 }} />
            <div>
              <div style={{ color: "var(--text-primary, #333)", fontWeight: 600 }}>{a.label}</div>
              <div style={{ color: "var(--text-muted, #888)", fontSize: "12px" }}>
                {fmt(a.valor)} — {(a.pct * 100).toFixed(1)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── CARD KPI ── */
function KpiCard({ titulo, valor, variacao, cor }) {
  const positivo = variacao >= 0;
  return (
    <div style={estilos.kpiCard}>
      <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--text-muted, #888)", marginBottom: 8 }}>
        {titulo}
      </div>
      <div style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 700, color: cor || "var(--accent, #bfa76a)", letterSpacing: "-0.5px" }}>
        {valor}
      </div>
      {variacao !== undefined && (
        <div style={{ fontSize: "12px", color: positivo ? "#27ae60" : "#e74c3c", marginTop: 6, display: "flex", alignItems: "center", gap: 4 }}>
          <span>{positivo ? "▲" : "▼"}</span>
          <span>{Math.abs(variacao).toFixed(1)}% vs mês anterior</span>
        </div>
      )}
    </div>
  );
}

/* ── TELA DE LOGIN ── */
function TelaLogin({ onEntrar, erro, carregando }) {
  const [senha, setSenha] = useState("");
  const [captchaOk, setCaptchaOk] = useState(false);
  const [captchaCarregado, setCaptchaCarregado] = useState(false);

  useEffect(() => {
    // Carrega o script do reCAPTCHA v2
    if (!window.grecaptcha) {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit`;
      script.async = true;
      script.defer = true;

      window.onRecaptchaLoad = () => {
        setCaptchaCarregado(true);
        window.grecaptcha.render("recaptcha-container", {
          sitekey: RECAPTCHA_SITE_KEY,
          theme: document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light",
          callback: () => setCaptchaOk(true),
          "expired-callback": () => setCaptchaOk(false),
        });
      };

      document.head.appendChild(script);
    } else {
      setCaptchaCarregado(true);
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!captchaOk) return;
    onEntrar(senha);
  }

  return (
    <div style={estilos.loginWrapper}>
      <div style={estilos.loginCard}>

        {/* Ícone cadeado */}
        <div style={estilos.loginIcone}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
            stroke="rgb(191,167,106)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        </div>

        <h1 style={estilos.loginTitulo}>Área Restrita</h1>
        <p style={estilos.loginSubtitulo}>Faturamento Financeiro — Cartório 3º Distrito (senha: cartorio3marica)</p>

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>

          <div style={{ marginBottom: "20px" }}>
            <label style={estilos.loginLabel}>Senha de acesso</label>
            <input
              type="password"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              placeholder="••••••••••"
              style={estilos.loginInput}
              required
              autoFocus
            />
          </div>

          {/* Container do reCAPTCHA */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
            <div id="recaptcha-container" />
            {!captchaCarregado && (
              <div style={{ fontSize: "13px", color: "var(--text-muted, #888)", padding: "12px" }}>
                Carregando verificação...
              </div>
            )}
          </div>

          {erro && (
            <div style={estilos.loginErro}>{erro}</div>
          )}

          <button
            type="submit"
            disabled={!captchaOk || carregando}
            style={{
              ...estilos.loginBtn,
              opacity: (!captchaOk || carregando) ? 0.5 : 1,
              cursor: (!captchaOk || carregando) ? "not-allowed" : "pointer",
            }}
          >
            {carregando ? "Verificando..." : "Acessar Dashboard"}
          </button>

        </form>

        <p style={{ fontSize: "11px", color: "var(--text-muted, #aaa)", marginTop: "20px", textAlign: "center" }}>
          Esta página não é indexada por mecanismos de busca.
        </p>
      </div>
    </div>
  );
}

/* ================================================================
   COMPONENTE PRINCIPAL
   ================================================================ */
export default function Financeiro() {
  const [autenticado, setAutenticado] = useState(false);
  const [errlogin, setErroLogin] = useState("");
  const [carregandoLogin, setCarregandoLogin] = useState(false);
  const [dados, setDados] = useState([]);
  const [carregandoDados, setCarregandoDados] = useState(false);
  const [erroDados, setErroDados] = useState("");
  const [anoSelecionado, setAnoSelecionado] = useState(new Date().getFullYear());

  /* ── Autenticação ── */
  function handleEntrar(senha) {
    setCarregandoLogin(true);
    setErroLogin("");
    setTimeout(() => {
      if (senha === SENHA_ACESSO) {
        setAutenticado(true);
        sessionStorage.setItem("fin_auth", "1"); // mantém na sessão
      } else {
        setErroLogin("Senha incorreta. Tente novamente.");
        // Reset reCAPTCHA
        if (window.grecaptcha) window.grecaptcha.reset();
      }
      setCarregandoLogin(false);
    }, 600);
  }

  /* ── Busca dados do Google Sheets ── */
  const buscarDados = useCallback(async () => {
    if (!autenticado) return;
    setCarregandoDados(true);
    setErroDados("");
    try {
      const res = await fetch(SHEETS_API_URL);
      if (!res.ok) throw new Error("Erro ao buscar dados");
      const json = await res.json();
      setDados(json);
    } catch (e) {
      setErroDados("Não foi possível carregar os dados. Verifique a URL do Apps Script.");
    } finally {
      setCarregandoDados(false);
    }
  }, [autenticado]);

  useEffect(() => {
    // Verifica se já estava autenticado nesta sessão
    if (sessionStorage.getItem("fin_auth") === "1") setAutenticado(true);
  }, []);

  useEffect(() => {
    if (autenticado) buscarDados();
  }, [autenticado, buscarDados]);

  /* ── Cálculos ── */
  const dadosAno = dados.filter(d => d.ano === anoSelecionado);
  const anos = [...new Set(dados.map(d => d.ano))].sort((a, b) => b - a);

  const mesAtual = dadosAno.find(d => d.mes === new Date().getMonth() + 1) || {};
  const mesAnterior = dadosAno.find(d => d.mes === new Date().getMonth()) || {};

  const variacaoTotal = mesAnterior.total
    ? ((mesAtual.total - mesAnterior.total) / mesAnterior.total) * 100
    : undefined;

  const totalAno = dadosAno.reduce((s, d) => s + (d.total || 0), 0);
  const totalRcpn = dadosAno.reduce((s, d) => s + (d.rcpn || 0), 0);
  const totalNotas = dadosAno.reduce((s, d) => s + (d.notas || 0), 0);
  const totalIdentidade = dadosAno.reduce((s, d) => s + (d.identidade || 0), 0);
  const mediaMensal = dadosAno.length > 0 ? totalAno / dadosAno.length : 0;
  const melhorMes = dadosAno.reduce((m, d) => d.total > (m.total || 0) ? d : m, {});

  /* ── Tela de Login ── */
  if (!autenticado) {
    return <TelaLogin onEntrar={handleEntrar} erro={errlogin} carregando={carregandoLogin} />;
  }

  /* ── Dashboard ── */
  return (
    <div style={estilos.wrapper}>

      {/* TOPO */}
      <div style={estilos.topo}>
        <div>
          <h1 style={estilos.tituloPrincipal}>Faturamento Financeiro</h1>
          <p style={estilos.subtitulo}>Cartório do 3º Distrito de Maricá-RJ — Uso interno</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          {/* Seletor de ano */}
          <select
            value={anoSelecionado}
            onChange={e => setAnoSelecionado(Number(e.target.value))}
            style={estilos.select}
          >
            {anos.map(a => <option key={a} value={a}>{a}</option>)}
            {anos.length === 0 && <option value={anoSelecionado}>{anoSelecionado}</option>}
          </select>

          {/* Botão atualizar */}
          <button onClick={buscarDados} style={estilos.btnAtualizar} disabled={carregandoDados}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
            </svg>
            {carregandoDados ? "Atualizando..." : "Atualizar"}
          </button>

          {/* Sair */}
          <button
            onClick={() => { sessionStorage.removeItem("fin_auth"); setAutenticado(false); }}
            style={estilos.btnSair}
          >
            Sair
          </button>
        </div>
      </div>

      {/* ERRO DE DADOS */}
      {erroDados && (
        <div style={estilos.alertaErro}>
          ⚠️ {erroDados}
          <span style={{ fontSize: "12px", display: "block", marginTop: "4px" }}>
            Verifique se a URL do Apps Script está configurada corretamente em Financeiro.jsx
          </span>
        </div>
      )}

      {/* CARREGANDO */}
      {carregandoDados && (
        <div style={{ textAlign: "center", padding: "60px", color: "var(--accent, #bfa76a)" }}>
          <div style={estilos.spinner} />
          <p style={{ marginTop: "16px", color: "var(--text-muted, #888)" }}>Buscando dados...</p>
        </div>
      )}

      {/* SEM DADOS */}
      {!carregandoDados && dados.length === 0 && !erroDados && (
        <div style={estilos.semDados}>
          <div style={{ fontSize: "40px", marginBottom: "12px" }}>📊</div>
          <p style={{ color: "var(--text-muted, #888)", fontSize: "15px" }}>
            Nenhum dado encontrado. Preencha a planilha Google Sheets e configure a URL do Apps Script.
          </p>
        </div>
      )}

      {/* DASHBOARD */}
      {!carregandoDados && dadosAno.length > 0 && (
        <>
          {/* KPIs */}
          <div style={estilos.kpiGrid}>
            <KpiCard
              titulo={`Mês atual — ${MESES_FULL[new Date().getMonth()]}`}
              valor={fmt(mesAtual.total)}
              variacao={variacaoTotal}
            />
            <KpiCard titulo={`Total ${anoSelecionado}`}    valor={fmt(totalAno)} />
            <KpiCard titulo="Média mensal"                 valor={fmt(mediaMensal)} />
            <KpiCard
              titulo="Melhor mês"
              valor={melhorMes.mes ? `${MESES_FULL[melhorMes.mes - 1]}` : "—"}
              cor="var(--text-primary, #333)"
            />
          </div>

          {/* GRÁFICO ANUAL + ROSCA */}
          <div style={estilos.chartsRow}>

            <div style={estilos.chartCard}>
              <h3 style={estilos.chartTitulo}>
                Evolução Mensal — {anoSelecionado}
              </h3>
              <GraficoBarras dados={dadosAno} ano={anoSelecionado} />
            </div>

            <div style={{ ...estilos.chartCard, minWidth: "260px", flex: "0 0 auto" }}>
              <h3 style={estilos.chartTitulo}>Divisão por Setor — {anoSelecionado}</h3>
              <GraficoPizza
                rcpn={totalRcpn}
                notas={totalNotas}
                identidade={totalIdentidade}
              />
            </div>

          </div>

          {/* TABELA DETALHADA */}
          <div style={estilos.tabelaCard}>
            <h3 style={estilos.chartTitulo}>Detalhamento Mensal — {anoSelecionado}</h3>
            <div style={{ overflowX: "auto" }}>
              <table style={estilos.tabela}>
                <thead>
                  <tr>
                    {["Mês", "RCPN", "Notas", "Identidade", "Total"].map(h => (
                      <th key={h} style={estilos.th}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dadosAno.map((d, i) => (
                    <tr key={i} style={d.mes === new Date().getMonth() + 1 ? estilos.trDestaque : estilos.tr}>
                      <td style={estilos.td}>
                        <strong style={{ color: "var(--accent, #bfa76a)" }}>
                          {MESES_FULL[d.mes - 1]}
                          {d.mes === new Date().getMonth() + 1 && (
                            <span style={{ fontSize: "10px", marginLeft: "6px", opacity: 0.7 }}>(atual)</span>
                          )}
                        </strong>
                      </td>
                      <td style={estilos.td}>{fmt(d.rcpn)}</td>
                      <td style={estilos.td}>{fmt(d.notas)}</td>
                      <td style={estilos.td}>{fmt(d.identidade)}</td>
                      <td style={{ ...estilos.td, fontWeight: 700, color: "var(--accent, #bfa76a)" }}>
                        {fmt(d.total)}
                      </td>
                    </tr>
                  ))}
                  {/* Totais */}
                  <tr style={estilos.trTotal}>
                    <td style={{ ...estilos.td, fontWeight: 700 }}>TOTAL {anoSelecionado}</td>
                    <td style={estilos.td}>{fmt(totalRcpn)}</td>
                    <td style={estilos.td}>{fmt(totalNotas)}</td>
                    <td style={estilos.td}>{fmt(totalIdentidade)}</td>
                    <td style={{ ...estilos.td, fontWeight: 700, color: "var(--accent, #bfa76a)", fontSize: "16px" }}>
                      {fmt(totalAno)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Observações */}
          {dadosAno.some(d => d.observacao) && (
            <div style={estilos.tabelaCard}>
              <h3 style={estilos.chartTitulo}>Observações</h3>
              {dadosAno.filter(d => d.observacao).map((d, i) => (
                <div key={i} style={estilos.observacao}>
                  <span style={{ color: "var(--accent, #bfa76a)", fontWeight: 600 }}>
                    {MESES_FULL[d.mes - 1]}:
                  </span>{" "}
                  {d.observacao}
                </div>
              ))}
            </div>
          )}

        </>
      )}

      {/* Rodapé */}
      <div style={estilos.rodape}>
        Página restrita — não indexada · Dados sincronizados via Google Sheets ·
        Última atualização: {new Date().toLocaleString("pt-BR")}
      </div>

    </div>
  );
}

/* ================================================================
   ESTILOS
   ================================================================ */
const estilos = {
  wrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 0 40px",
    fontFamily: "inherit",
  },
  topo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "16px",
    marginBottom: "32px",
    paddingBottom: "24px",
    borderBottom: "2px solid rgba(191,167,106,0.2)",
  },
  tituloPrincipal: {
    fontSize: "clamp(22px, 4vw, 28px)",
    fontWeight: 700,
    color: "rgb(191,167,106)",
    margin: 0,
    letterSpacing: "-0.5px",
  },
  subtitulo: {
    fontSize: "13px",
    color: "var(--text-muted, #888)",
    margin: "4px 0 0",
  },
  select: {
    padding: "8px 14px",
    borderRadius: "8px",
    border: "1px solid rgba(191,167,106,0.4)",
    background: "var(--bg-section, #f8f8f8)",
    color: "var(--text-primary, #333)",
    fontSize: "14px",
    cursor: "pointer",
    fontFamily: "inherit",
  },
  btnAtualizar: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "8px 16px",
    borderRadius: "8px",
    border: "1px solid rgba(191,167,106,0.4)",
    background: "transparent",
    color: "rgb(191,167,106)",
    fontSize: "13px",
    fontWeight: 500,
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "all 0.2s",
  },
  btnSair: {
    padding: "8px 16px",
    borderRadius: "8px",
    border: "1px solid rgba(200,60,60,0.3)",
    background: "transparent",
    color: "#c0392b",
    fontSize: "13px",
    fontWeight: 500,
    cursor: "pointer",
    fontFamily: "inherit",
  },
  kpiGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
    marginBottom: "24px",
  },
  kpiCard: {
    background: "var(--bg-section, #fff)",
    borderRadius: "12px",
    padding: "24px",
    borderLeft: "3px solid rgb(191,167,106)",
    boxShadow: "0 2px 8px var(--shadow, rgba(0,0,0,0.06))",
  },
  chartsRow: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    marginBottom: "24px",
  },
  chartCard: {
    background: "var(--bg-section, #fff)",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 2px 8px var(--shadow, rgba(0,0,0,0.06))",
    flex: "1 1 340px",
  },
  chartTitulo: {
    fontSize: "15px",
    fontWeight: 600,
    color: "var(--text-primary, #333)",
    marginBottom: "20px",
    margin: "0 0 20px",
  },
  tabelaCard: {
    background: "var(--bg-section, #fff)",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 2px 8px var(--shadow, rgba(0,0,0,0.06))",
    marginBottom: "24px",
  },
  tabela: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "14px",
  },
  th: {
    textAlign: "left",
    padding: "10px 14px",
    fontSize: "11px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.8px",
    color: "var(--text-muted, #888)",
    borderBottom: "2px solid rgba(191,167,106,0.2)",
  },
  td: {
    padding: "12px 14px",
    color: "var(--text-secondary, #444)",
    borderBottom: "1px solid var(--border-color, #eee)",
  },
  tr: {},
  trDestaque: {
    background: "rgba(191,167,106,0.05)",
  },
  trTotal: {
    background: "rgba(191,167,106,0.08)",
    borderTop: "2px solid rgba(191,167,106,0.3)",
  },
  observacao: {
    padding: "10px 0",
    borderBottom: "1px solid var(--border-color, #eee)",
    fontSize: "14px",
    color: "var(--text-secondary, #444)",
    lineHeight: 1.6,
  },
  alertaErro: {
    background: "rgba(231,76,60,0.1)",
    border: "1px solid rgba(231,76,60,0.3)",
    color: "#c0392b",
    padding: "14px 18px",
    borderRadius: "10px",
    marginBottom: "24px",
    fontSize: "14px",
  },
  semDados: {
    textAlign: "center",
    padding: "80px 20px",
  },
  rodape: {
    textAlign: "center",
    fontSize: "11px",
    color: "var(--text-muted, #aaa)",
    marginTop: "40px",
    paddingTop: "20px",
    borderTop: "1px solid var(--border-color, #eee)",
  },
  spinner: {
    width: "36px",
    height: "36px",
    border: "3px solid rgba(191,167,106,0.2)",
    borderTop: "3px solid rgb(191,167,106)",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
    margin: "0 auto",
  },
  // LOGIN
  loginWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "60vh",
    padding: "40px 16px",
  },
  loginCard: {
    background: "var(--bg-section, #fff)",
    borderRadius: "16px",
    padding: "40px",
    width: "100%",
    maxWidth: "420px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
    border: "1px solid rgba(191,167,106,0.2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  loginIcone: {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    background: "rgba(191,167,106,0.1)",
    border: "2px solid rgba(191,167,106,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },
  loginTitulo: {
    fontSize: "22px",
    fontWeight: 700,
    color: "var(--text-primary, #1f2f2b)",
    margin: "0 0 6px",
    textAlign: "center",
  },
  loginSubtitulo: {
    fontSize: "13px",
    color: "var(--text-muted, #888)",
    margin: "0 0 28px",
    textAlign: "center",
  },
  loginLabel: {
    display: "block",
    fontSize: "12px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.8px",
    color: "var(--text-muted, #888)",
    marginBottom: "8px",
  },
  loginInput: {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid rgba(191,167,106,0.35)",
    background: "var(--input-bg, #fff)",
    color: "var(--text-primary, #333)",
    fontSize: "16px",
    fontFamily: "inherit",
    outline: "none",
    boxSizing: "border-box",
  },
  loginBtn: {
    width: "100%",
    padding: "13px",
    borderRadius: "10px",
    border: "none",
    background: "rgb(191,167,106)",
    color: "#fff",
    fontSize: "15px",
    fontWeight: 600,
    fontFamily: "inherit",
    transition: "all 0.3s",
  },
  loginErro: {
    background: "rgba(231,76,60,0.1)",
    border: "1px solid rgba(231,76,60,0.3)",
    color: "#c0392b",
    padding: "10px 14px",
    borderRadius: "8px",
    fontSize: "13px",
    marginBottom: "16px",
    textAlign: "center",
  },
};

/* Spinner animation */
const styleTag = document.createElement("style");
styleTag.textContent = `@keyframes spin { to { transform: rotate(360deg); } }`;
document.head.appendChild(styleTag);
