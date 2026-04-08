import ReactGA from 'react-ga4'
import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

export default function App() {
  const location = useLocation()

  // ← LINHA NOVA: detecta se está na página de faturamento
  const isFaturamento = location.pathname === '/gestao-interna-cartorio'

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname,
    })
  }, [location])

  return (
    <>
      {/* ← Só renderiza se NÃO for faturamento */}
      {!isFaturamento && <Header />}

      <main className="app-main">
        <div className="app-container">
          <Outlet />
        </div>
      </main>

      {/* ← Só renderiza se NÃO for faturamento */}
      {!isFaturamento && <Footer />}

      {!isFaturamento && <CookieBanner />}
      <Analytics />
      <SpeedInsights />
    </>
  )
}
