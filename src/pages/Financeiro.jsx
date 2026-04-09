import React, { useState, useEffect, useCallback } from 'react'

/* ================================================================
   CONFIGURAÇÕES — EDITE APENAS ESTE BLOCO
   ================================================================ */

// 1. Cole aqui a URL gerada pelo Google Apps Script
const SHEETS_API_URL =
  'https://script.google.com/macros/s/AKfycbx9ZA_fndtqoFKSMKmm8TBEob4BMjQJyF9Ly7Buj7V6P1-xcYf-UUrJf1dkuX31wpxA/exec'

// 2. Cole aqui sua chave pública do reCAPTCHA v2
const RECAPTCHA_SITE_KEY = '6LfI9a0sAAAAAHT5NkTXYlp2q2f1CRL5QmGxbAb0'

/* ================================================================ */

const MESES = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
]
const MESES_FULL = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
]

/* ── Campos de encargos (tudo exceto emolumento e ISS) ── */
const ENCARGOS = [
  { key: 'fetj', label: 'FETJ' },
  { key: 'fundperj', label: 'FUNDPERJ' },
  { key: 'funperj', label: 'FUNPERJ' },
  { key: 'funarpen', label: 'FUNARPEN' },
  { key: 'ressag', label: 'RESSAG' },
  { key: 'fundacPguerj', label: 'FUNDAC-PGUERJ' },
  { key: 'funpgt', label: 'FUNPGT' },
  { key: 'funpgalerj', label: 'FUNPGALERJ' },
]

/* Todas as colunas da tabela (exceto Mês e Observações) */
const COLUNAS_TABELA = [
  { key: 'emolumento', label: 'Emolumento' },
  { key: 'fetj', label: 'FETJ' },
  { key: 'fundperj', label: 'FUNDPERJ' },
  { key: 'funperj', label: 'FUNPERJ' },
  { key: 'funarpen', label: 'FUNARPEN' },
  { key: 'ressag', label: 'RESSAG' },
  { key: 'fundacPguerj', label: 'FUNDAC-PG' },
  { key: 'funpgt', label: 'FUNPGT' },
  { key: 'funpgalerj', label: 'FUNPGALERJ' },
  { key: 'iss', label: 'ISS' },
]

/* Formatação monetária BRL */
function fmt(valor) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
  }).format(valor || 0)
}

/* ================================================================
   GRÁFICO ROSCA — breakdown dos encargos do ano
   Exibe até 5 fatias: FETJ, FUNARPEN, FUNDPERJ+FUNPERJ, ISS, Outros
   ================================================================ */
function GraficoEncargos({ totais }) {
  /* Agrupa em 5 categorias para não poluir o gráfico */
  const grupos = [
    {
      label: 'FETJ',
      valor: totais.fetj || 0,
      cor: 'rgba(191,167,106,0.95)',
    },
    {
      label: 'FUND(P/R)ERJ',
      valor: (totais.fundperj || 0) + (totais.funperj || 0),
      cor: 'rgba(191,167,106,0.65)',
    },
    {
      label: 'FUNARPEN',
      valor: totais.funarpen || 0,
      cor: 'rgba(191,167,106,0.45)',
    },
    {
      label: 'ISS',
      valor: totais.iss || 0,
      cor: 'rgba(160,130,60,0.75)',
    },
    {
      label: 'Outros Fundos',
      valor:
        (totais.ressag || 0) +
        (totais.fundacPguerj || 0) +
        (totais.funpgt || 0) +
        (totais.funpgalerj || 0),
      cor: 'rgba(191,167,106,0.25)',
    },
  ].filter((g) => g.valor > 0) // remove fatias zeradas

  const total = grupos.reduce((s, g) => s + g.valor, 0)

  if (total === 0) {
    return (
      <div
        style={{
          textAlign: 'center',
          color: 'var(--text-muted, #888)',
          padding: '40px 0',
        }}
      >
        Sem dados de encargos
      </div>
    )
  }

  let angulo = -Math.PI / 2
  const cx = 80,
    cy = 80,
    r = 62,
    ir = 34

  const arcos = grupos.map((g) => {
    const pct = g.valor / total
    const ang = pct * 2 * Math.PI
    const x1 = cx + r * Math.cos(angulo)
    const y1 = cy + r * Math.sin(angulo)
    angulo += ang
    const x2 = cx + r * Math.cos(angulo)
    const y2 = cy + r * Math.sin(angulo)
    const xi1 = cx + ir * Math.cos(angulo - ang)
    const yi1 = cy + ir * Math.sin(angulo - ang)
    const xi2 = cx + ir * Math.cos(angulo)
    const yi2 = cy + ir * Math.sin(angulo)
    const large = ang > Math.PI ? 1 : 0
    return {
      ...g,
      pct,
      d: `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} L ${xi2} ${yi2} A ${ir} ${ir} 0 ${large} 0 ${xi1} ${yi1} Z`,
    }
  })

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <svg viewBox="0 0 160 160" style={{ width: 140, flexShrink: 0 }}>
        {arcos.map((a, i) => (
          <path
            key={i}
            d={a.d}
            fill={a.cor}
            stroke="var(--bg-card, #fff)"
            strokeWidth="2"
          />
        ))}
        <text
          x="80"
          y="76"
          textAnchor="middle"
          fontSize="10"
          fill="var(--text-muted, #888)"
        >
          Encargos
        </text>
        <text
          x="80"
          y="90"
          textAnchor="middle"
          fontSize="9"
          fill="var(--accent, #bfa76a)"
          fontWeight="600"
        >
          {fmt(total)}
        </text>
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {arcos.map((a, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '13px',
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                background: a.cor,
                borderRadius: 3,
                flexShrink: 0,
              }}
            />
            <div>
              <div
                style={{ color: 'var(--text-primary, #333)', fontWeight: 600 }}
              >
                {a.label}
              </div>
              <div
                style={{ color: 'var(--text-muted, #888)', fontSize: '12px' }}
              >
                {fmt(a.valor)} — {(a.pct * 100).toFixed(1)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── CARD KPI ── */
function KpiCard({ titulo, valor, subtitulo, cor, small }) {
  return (
    <div style={estilos.kpiCard}>
      <div
        style={{
          fontSize: small ? '11px' : '12px',
          fontWeight: 600,
          letterSpacing: '1.2px',
          textTransform: 'uppercase',
          color: 'var(--text-muted, #888)',
          marginBottom: 8,
        }}
      >
        {titulo}
      </div>
      <div
        style={{
          fontSize: small ? 'clamp(15px, 2vw, 19px)' : 'clamp(18px, 3vw, 24px)',
          fontWeight: 700,
          color: cor || 'var(--accent, #bfa76a)',
          letterSpacing: '-0.5px',
        }}
      >
        {valor}
      </div>
      {subtitulo && (
        <div
          style={{
            fontSize: '12px',
            color: 'var(--text-muted, #888)',
            marginTop: 4,
          }}
        >
          {subtitulo}
        </div>
      )}
    </div>
  )
}

/* ================================================================
   TELA DE VERIFICAÇÃO — só reCAPTCHA, sem senha
   ================================================================ */
function TelaVerificacao({ onEntrar }) {
  const [captchaCarregado, setCaptchaCarregado] = useState(false)

  useEffect(() => {
    if (!window.grecaptcha) {
      const script = document.createElement('script')
      script.src =
        'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit'
      script.async = true
      script.defer = true

      window.onRecaptchaLoad = () => {
        setCaptchaCarregado(true)
        window.grecaptcha.render('recaptcha-container', {
          sitekey: RECAPTCHA_SITE_KEY,
          theme:
            document.documentElement.getAttribute('data-theme') === 'dark'
              ? 'dark'
              : 'light',
          callback: () => setTimeout(() => onEntrar(), 400),
          'expired-callback': () => {
            if (window.grecaptcha) window.grecaptcha.reset()
          },
        })
      }

      document.head.appendChild(script)
    } else {
      setCaptchaCarregado(true)
      setTimeout(() => {
        if (
          document.getElementById('recaptcha-container') &&
          !document.getElementById('recaptcha-container').hasChildNodes()
        ) {
          window.grecaptcha.render('recaptcha-container', {
            sitekey: RECAPTCHA_SITE_KEY,
            theme:
              document.documentElement.getAttribute('data-theme') === 'dark'
                ? 'dark'
                : 'light',
            callback: () => setTimeout(() => onEntrar(), 400),
            'expired-callback': () => {
              if (window.grecaptcha) window.grecaptcha.reset()
            },
          })
        }
      }, 100)
    }
  }, [onEntrar])

  return (
    <div style={estilos.loginWrapper}>
      <div style={estilos.loginCard}>
        <div style={estilos.loginIcone}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(191,167,106)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>

        <h1 style={estilos.loginTitulo}>Área Restrita</h1>
        <p style={estilos.loginSubtitulo}>
          Faturamento Financeiro — Cartório 3º Distrito
        </p>
        <p
          style={{
            fontSize: '14px',
            color: 'var(--text-secondary, #555)',
            marginBottom: '24px',
            textAlign: 'center',
          }}
        >
          Confirme que você não é um robô para acessar.
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '8px',
          }}
        >
          <div id="recaptcha-container" />
          {!captchaCarregado && (
            <div
              style={{
                fontSize: '13px',
                color: 'var(--text-muted, #888)',
                padding: '16px',
              }}
            >
              Carregando verificação...
            </div>
          )}
        </div>

        <p
          style={{
            fontSize: '11px',
            color: 'var(--text-muted, #aaa)',
            marginTop: '24px',
            textAlign: 'center',
          }}
        >
          Esta página não é indexada por mecanismos de busca.
        </p>
      </div>
    </div>
  )
}

/* ================================================================
   COMPONENTE PRINCIPAL
   ================================================================ */
export default function Financeiro() {
  const [autenticado, setAutenticado] = useState(false)
  const [dados, setDados] = useState([])
  const [carregandoDados, setCarregandoDados] = useState(false)
  const [erroDados, setErroDados] = useState('')
  const [anoSelecionado, setAnoSelecionado] = useState(new Date().getFullYear())

  function handleEntrar() {
    setAutenticado(true)
    sessionStorage.setItem('fin_auth', '1')
  }

  const buscarDados = useCallback(async () => {
    if (!autenticado) return
    setCarregandoDados(true)
    setErroDados('')
    try {
      const res = await fetch(SHEETS_API_URL)
      if (!res.ok) throw new Error('Erro ao buscar dados')
      const json = await res.json()
      setDados(json)
    } catch {
      setErroDados(
        'Não foi possível carregar os dados. Verifique a URL do Apps Script.',
      )
    } finally {
      setCarregandoDados(false)
    }
  }, [autenticado])

  useEffect(() => {
    if (sessionStorage.getItem('fin_auth') === '1') setAutenticado(true)
  }, [])

  useEffect(() => {
    if (autenticado) buscarDados()
  }, [autenticado, buscarDados])

  /* ── Cálculos ── */
  const dadosAno = dados.filter((d) => d.ano === anoSelecionado)
  const anos = [...new Set(dados.map((d) => d.ano))].sort((a, b) => b - a)

  /* Totais de cada campo para o ano selecionado */
  const totais = COLUNAS_TABELA.reduce((acc, col) => {
    acc[col.key] = dadosAno.reduce((s, d) => s + (d[col.key] || 0), 0)
    return acc
  }, {})

  const totalEmolumentos = totais.emolumento || 0
  const totalISS = totais.iss || 0
  const mediaMensal =
    dadosAno.length > 0 ? totalEmolumentos / dadosAno.length : 0

  /* ── Tela de verificação ── */
  if (!autenticado) {
    return <TelaVerificacao onEntrar={handleEntrar} />
  }

  /* ── Dashboard ── */
  return (
    <div style={estilos.wrapper}>
      {/* TOPO */}
      <div style={estilos.topo}>
        <div>
          <h1 style={estilos.tituloPrincipal}>Faturamento Financeiro</h1>
          <p style={estilos.subtitulo}>
            Cartório do 3º Distrito de Maricá-RJ — Uso interno
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          <select
            value={anoSelecionado}
            onChange={(e) => setAnoSelecionado(Number(e.target.value))}
            style={estilos.select}
          >
            {anos.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
            {anos.length === 0 && (
              <option value={anoSelecionado}>{anoSelecionado}</option>
            )}
          </select>

          <button
            onClick={buscarDados}
            style={estilos.btnAtualizar}
            disabled={carregandoDados}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="23 4 23 10 17 10" />
              <polyline points="1 20 1 14 7 14" />
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
            {carregandoDados ? 'Atualizando...' : 'Atualizar'}
          </button>

          <button
            onClick={() => {
              sessionStorage.removeItem('fin_auth')
              setAutenticado(false)
            }}
            style={estilos.btnSair}
          >
            Sair
          </button>
        </div>
      </div>

      {/* ERRO */}
      {erroDados && (
        <div style={estilos.alertaErro}>
          ⚠️ {erroDados}
          <span
            style={{ fontSize: '12px', display: 'block', marginTop: '4px' }}
          >
            Verifique se a URL do Apps Script está configurada corretamente em
            Financeiro.jsx
          </span>
        </div>
      )}

      {/* CARREGANDO */}
      {carregandoDados && (
        <div style={{ textAlign: 'center', padding: '60px' }}>
          <div style={estilos.spinner} />
          <p style={{ marginTop: '16px', color: 'var(--text-muted, #888)' }}>
            Buscando dados...
          </p>
        </div>
      )}

      {/* SEM DADOS */}
      {!carregandoDados && dados.length === 0 && !erroDados && (
        <div style={estilos.semDados}>
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>📊</div>
          <p style={{ color: 'var(--text-muted, #888)', fontSize: '15px' }}>
            Nenhum dado encontrado. Preencha a planilha Google Sheets e
            configure a URL do Apps Script.
          </p>
        </div>
      )}

      {/* DASHBOARD */}
      {!carregandoDados && dadosAno.length > 0 && (
        <>
          {/* ── KPIs — Linha 1: destaques principais ── */}
          <div
            style={{
              ...estilos.kpiGrid,
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              marginBottom: '12px',
            }}
          >
            <KpiCard
              titulo={`Total Emolumentos — ${anoSelecionado}`}
              valor={fmt(totalEmolumentos)}
              cor="var(--accent, #bfa76a)"
            />
            <KpiCard
              titulo={`Total ISS — ${anoSelecionado}`}
              valor={fmt(totalISS)}
              cor="var(--text-primary, #333)"
            />
            <KpiCard
              titulo={`Média Emolumentos/Mês — ${anoSelecionado}`}
              valor={fmt(mediaMensal)}
              subtitulo={`Base: ${dadosAno.length} ${dadosAno.length === 1 ? 'mês' : 'meses'}`}
            />
          </div>

          {/* ── TABELA + GRÁFICO ── */}
          <div style={estilos.chartsRow}>
            {/* TABELA DETALHAMENTO MENSAL */}
            <div
              style={{
                ...estilos.tabelaCard,
                flex: '1 1 420px',
                marginBottom: 0,
              }}
            >
              <h3 style={estilos.chartTitulo}>
                Detalhamento Mensal — {anoSelecionado}
              </h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={estilos.tabela}>
                  <thead>
                    <tr>
                      {/* Cabeçalho: Mês + todas as colunas de valor */}
                      <th style={{ ...estilos.th, minWidth: '90px' }}>Mês</th>
                      {COLUNAS_TABELA.map((col) => (
                        <th
                          key={col.key}
                          style={{ ...estilos.th, minWidth: '110px' }}
                        >
                          {col.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {dadosAno.map((d, i) => {
                      const eMesAtual = d.mes === new Date().getMonth() + 1
                      return (
                        <tr
                          key={i}
                          style={eMesAtual ? estilos.trDestaque : estilos.tr}
                        >
                          <td style={estilos.td}>
                            <strong style={{ color: 'var(--accent, #bfa76a)' }}>
                              {MESES_FULL[d.mes - 1]}
                              {eMesAtual && (
                                <span
                                  style={{
                                    fontSize: '10px',
                                    marginLeft: '6px',
                                    opacity: 0.7,
                                  }}
                                >
                                  (atual)
                                </span>
                              )}
                            </strong>
                          </td>
                          {COLUNAS_TABELA.map((col) => (
                            <td
                              key={col.key}
                              style={{
                                ...estilos.td,
                                /* Emolumento e ISS em destaque visual sutil */
                                ...(col.key === 'emolumento'
                                  ? {
                                      fontWeight: 700,
                                      color: 'var(--accent, #bfa76a)',
                                    }
                                  : {}),
                                ...(col.key === 'iss'
                                  ? { fontWeight: 600 }
                                  : {}),
                              }}
                            >
                              {/* Exibe "—" para valores zerados ou ausentes (evita poluição visual) */}
                              {d[col.key] ? fmt(d[col.key]) : '—'}
                            </td>
                          ))}
                        </tr>
                      )
                    })}

                    {/* Linha de totais */}
                    <tr style={estilos.trTotal}>
                      <td style={{ ...estilos.td, fontWeight: 700 }}>
                        TOTAL {anoSelecionado}
                      </td>
                      {COLUNAS_TABELA.map((col) => (
                        <td
                          key={col.key}
                          style={{
                            ...estilos.td,
                            fontWeight: 700,
                            ...(col.key === 'emolumento'
                              ? {
                                  color: 'var(--accent, #bfa76a)',
                                  fontSize: '15px',
                                }
                              : {}),
                          }}
                        >
                          {totais[col.key] ? fmt(totais[col.key]) : '—'}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* GRÁFICO ROSCA — distribuição dos encargos */}
            <div
              style={{
                ...estilos.chartCard,
                minWidth: '300px',
                flex: '0 0 auto',
                alignSelf: 'flex-start',
              }}
            >
              <h3 style={estilos.chartTitulo}>
                Distribuição dos Encargos — {anoSelecionado}
              </h3>
              <GraficoEncargos totais={totais} />
            </div>
          </div>

          {/* OBSERVAÇÕES */}
          {dadosAno.some((d) => d.observacoes) && (
            <div style={estilos.tabelaCard}>
              <h3 style={estilos.chartTitulo}>Observações</h3>
              {dadosAno
                .filter((d) => d.observacoes)
                .map((d, i) => (
                  <div key={i} style={estilos.observacao}>
                    <span
                      style={{
                        color: 'var(--accent, #bfa76a)',
                        fontWeight: 600,
                      }}
                    >
                      {MESES_FULL[d.mes - 1]}:
                    </span>{' '}
                    {d.observacoes}
                  </div>
                ))}
            </div>
          )}
        </>
      )}

      <div style={estilos.rodape}>
        Página restrita — não indexada · Dados sincronizados via Google Sheets ·
        Última atualização: {new Date().toLocaleString('pt-BR')}
      </div>
    </div>
  )
}

/* ================================================================
   ESTILOS
   ================================================================ */
const estilos = {
  wrapper: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 0 40px',
    fontFamily: 'inherit',
  },
  topo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '16px',
    marginBottom: '32px',
    paddingBottom: '24px',
    borderBottom: '2px solid rgba(191,167,106,0.2)',
  },
  tituloPrincipal: {
    fontSize: 'clamp(22px, 4vw, 28px)',
    fontWeight: 700,
    color: 'rgb(191,167,106)',
    margin: 0,
    letterSpacing: '-0.5px',
  },
  subtitulo: {
    fontSize: '13px',
    color: 'var(--text-muted, #888)',
    margin: '4px 0 0',
  },
  select: {
    padding: '8px 14px',
    borderRadius: '8px',
    border: '1px solid rgba(191,167,106,0.4)',
    background: 'var(--bg-section, #f8f8f8)',
    color: 'var(--text-primary, #333)',
    fontSize: '14px',
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  btnAtualizar: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 16px',
    borderRadius: '8px',
    border: '1px solid rgba(191,167,106,0.4)',
    background: 'transparent',
    color: 'rgb(191,167,106)',
    fontSize: '13px',
    fontWeight: 500,
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  btnSair: {
    padding: '8px 16px',
    borderRadius: '8px',
    border: '1px solid rgba(200,60,60,0.3)',
    background: 'transparent',
    color: '#c0392b',
    fontSize: '13px',
    fontWeight: 500,
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  kpiGrid: { display: 'grid', gap: '14px', marginBottom: '16px' },
  kpiCard: {
    background: 'var(--bg-section, #fff)',
    borderRadius: '12px',
    padding: '20px 24px',
    borderLeft: '3px solid rgb(191,167,106)',
    boxShadow: '0 2px 8px var(--shadow, rgba(0,0,0,0.06))',
  },
  chartsRow: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    marginBottom: '24px',
  },
  chartCard: {
    background: 'var(--bg-section, #fff)',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 2px 8px var(--shadow, rgba(0,0,0,0.06))',
    flex: '1 1 340px',
  },
  chartTitulo: {
    fontSize: '15px',
    fontWeight: 600,
    color: 'var(--text-primary, #333)',
    margin: '0 0 20px',
  },
  tabelaCard: {
    background: 'var(--bg-section, #fff)',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 2px 8px var(--shadow, rgba(0,0,0,0.06))',
    marginBottom: '24px',
  },
  tabela: { width: '100%', borderCollapse: 'collapse', fontSize: '13px' },
  th: {
    textAlign: 'left',
    padding: '10px 12px',
    fontSize: '10px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
    color: 'var(--text-muted, #888)',
    borderBottom: '2px solid rgba(191,167,106,0.2)',
    whiteSpace: 'nowrap',
  },
  td: {
    padding: '11px 12px',
    color: 'var(--text-secondary, #444)',
    borderBottom: '1px solid var(--border-color, #eee)',
    whiteSpace: 'nowrap',
  },
  tr: {},
  trDestaque: { background: 'rgba(191,167,106,0.05)' },
  trTotal: {
    background: 'rgba(191,167,106,0.08)',
    borderTop: '2px solid rgba(191,167,106,0.3)',
  },
  observacao: {
    padding: '10px 0',
    borderBottom: '1px solid var(--border-color, #eee)',
    fontSize: '14px',
    color: 'var(--text-secondary, #444)',
    lineHeight: 1.6,
  },
  alertaErro: {
    background: 'rgba(231,76,60,0.1)',
    border: '1px solid rgba(231,76,60,0.3)',
    color: '#c0392b',
    padding: '14px 18px',
    borderRadius: '10px',
    marginBottom: '24px',
    fontSize: '14px',
  },
  semDados: { textAlign: 'center', padding: '80px 20px' },
  rodape: {
    textAlign: 'center',
    fontSize: '11px',
    color: 'var(--text-muted, #aaa)',
    marginTop: '40px',
    paddingTop: '20px',
    borderTop: '1px solid var(--border-color, #eee)',
  },
  spinner: {
    width: '36px',
    height: '36px',
    border: '3px solid rgba(191,167,106,0.2)',
    borderTop: '3px solid rgb(191,167,106)',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
    margin: '0 auto',
  },
  loginWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    padding: '40px 16px',
  },
  loginCard: {
    background: 'var(--bg-section, #fff)',
    borderRadius: '16px',
    padding: '40px',
    width: '100%',
    maxWidth: '380px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
    border: '1px solid rgba(191,167,106,0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  loginIcone: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: 'rgba(191,167,106,0.1)',
    border: '2px solid rgba(191,167,106,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  loginTitulo: {
    fontSize: '22px',
    fontWeight: 700,
    color: 'var(--text-primary, #1f2f2b)',
    margin: '0 0 6px',
    textAlign: 'center',
  },
  loginSubtitulo: {
    fontSize: '13px',
    color: 'var(--text-muted, #888)',
    margin: '0 0 8px',
    textAlign: 'center',
  },
}

/* Spinner animation */
const styleTag = document.createElement('style')
styleTag.textContent = `@keyframes spin { to { transform: rotate(360deg); } }`
document.head.appendChild(styleTag)
